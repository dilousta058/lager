
/* =====================================================
   KONFIGURATION
===================================================== */
const STORAGE_KEY = "materialData";
const HISTORY_KEY = "materialHistory";
const LOGIN_USER = "DiloUsta58";
const LOGIN_PASS = "64579";
const EDIT_KEY = "64579";
const AUTO_LOCK_MINUTES = 10;
const PROTECTED_FIELDS = ["material", "e"];

/* =====================================================
   STATUS
===================================================== */
let loggedIn = false;
let listVisible = false;
let editEnabled = localStorage.getItem("editEnabled") === "true";
let lockTimer = null;
let fsVisible = false;

/* =====================================================
   DATEN
===================================================== */
let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultData;

/* =====================================================
   LOGIN / LOGOUT
===================================================== */
function login() {
  const user = userInput.value;
  const pass = passInput.value;

  if (user === LOGIN_USER && pass === LOGIN_PASS) {
    loggedIn = true;
    listVisible = false;
    loginBox.style.display = "none";
    app.style.display = "block";
    tableBody.innerHTML = "";
    // FS-Bereich freigeben
    document.getElementById("fsToggleBtn").style.display = "inline-block";
    fsVisible = false;
    document.getElementById("fsSection").style.display = "none";

    initCategories();
    syncUI();
    updateToggleButton();
  } else {
    alert("Login fehlgeschlagen");
  }
}

function logout() {
  loggedIn = false;
  listVisible = false;
  editEnabled = false;
    // FS sperren
    fsVisible = false;
    document.getElementById("fsSection").style.display = "none";
    document.getElementById("fsToggleBtn").style.display = "none";

  localStorage.removeItem("editEnabled");
  app.style.display = "none";
  loginBox.style.display = "block";
  tableBody.innerHTML = "";
}

/* =====================================================
   LISTE EIN / AUS
===================================================== */
function toggleList() {
  if (!loggedIn) return;

  listVisible = !listVisible;
  updateToggleButton();

  if (listVisible) {
    render();
  } else {
    tableBody.innerHTML = "";
  }
}

function updateToggleButton() {
  toggleListBtn.textContent = listVisible
    ? "📋 Liste ausblenden"
    : "📋 Liste anzeigen";
}

function toggleFS() {
  if (!loggedIn) return;

  fsVisible = !fsVisible;

  const fsSection = document.getElementById("fsSection");
  const btn = document.getElementById("fsToggleBtn");

  fsSection.style.display = fsVisible ? "block" : "none";
  btn.textContent = fsVisible
    ? "FS-Liste ausblenden"
    : "FS-Liste anzeigen";
}

/* =====================================================
   STORAGE
===================================================== */
function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function saveHistory(entry) {
  const h = JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
  h.push(entry);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(h));
}

/* =====================================================
   KEY-STEUERUNG
===================================================== */
function unlockEditing() {
  if (keyInput.value !== EDIT_KEY) {
    alert("Falscher Key");
    return;
  }
  editEnabled = true;
  localStorage.setItem("editEnabled", "true");
  startAutoLock();
  syncUI();
  render();
}

function lockEditing() {
  editEnabled = false;
  localStorage.removeItem("editEnabled");
  clearTimeout(lockTimer);
  syncUI();
  render();
}

function startAutoLock() {
  clearTimeout(lockTimer);
  lockTimer = setTimeout(lockEditing, AUTO_LOCK_MINUTES * 60000);
}

function syncUI() {
  unlockBtn.disabled = editEnabled;
  status.textContent = editEnabled
    ? "🔓 Bearbeitung aktiv"
    : "🔒 Geschützt";
}

/* =====================================================
   KATEGORIEN INITIALISIEREN
===================================================== */
function initCategories() {
  categoryFilter.innerHTML = '<option value="">Alle Kategorien</option>';
  [...new Set(data.map(d => d.cat))].forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    categoryFilter.appendChild(opt);
  });
}

/* =====================================================
   SUCHE
===================================================== */
function parseQuery(q) {
  const obj = {};
  if (!q || !q.trim()) return obj;

  q.trim().split(/\s+/).forEach(p => {
    const [k, v] = p.includes(":") ? p.split(":") : ["all", p];
    if (v) obj[k] = v.toLowerCase();
  });

  return obj;
}

function highlight(text, q) {
  if (!q) return text;
  return text.replace(
    new RegExp(`(${q})`, "gi"),
    '<span class="highlight">$1</span>'
  );
}

/* =====================================================
   RENDERING MIT KATEGORIEN (1:1 LOGIK WIE FRÜHER)
===================================================== */
function render() {
  if (!loggedIn || !listVisible) return;

  tableBody.innerHTML = "";

  const query = parseQuery(search.value);
  const catFilter = categoryFilter.value;
  const noSearch = Object.keys(query).length === 0;

  let lastCat = null;

  data.forEach((m, i) => {
    if (catFilter && m.cat !== catFilter) return;

    const hay = (m.material + m.e + m.shelf).toLowerCase();

    const hit =
      noSearch ||
      (query.material && m.material.toLowerCase().includes(query.material)) ||
      (query.e && m.e.toLowerCase().includes(query.e)) ||
      (query.regal && m.shelf.toLowerCase().includes(query.regal)) ||
      (query.all && hay.includes(query.all));

    if (!hit) return;

    if (m.cat !== lastCat) {
      tableBody.innerHTML +=
        `<tr class="category"><td colspan="5">${m.cat}</td></tr>`;
      lastCat = m.cat;
    }

    tableBody.innerHTML += `
      <tr>
        ${cell(highlight(m.material, query.material || query.all), i, "material")}
        ${cell(highlight(m.e, query.e || query.all), i, "e")}
        ${cell(highlight(m.shelf, query.regal || query.all), i, "shelf")}
        ${cell(m.bestand, i, "bestand")}
        <td></td>
      </tr>
    `;
  });
}

/* =====================================================
   INLINE EDIT
===================================================== */
function cell(value, index, field) {
  const protectedField = PROTECTED_FIELDS.includes(field);
  const canEdit = !protectedField || editEnabled;

  return `
    <td class="${protectedField ? "protected" : ""}">
      <div class="edit-wrapper">
        <span>${value}</span>
        ${
          canEdit
            ? `<span class="edit-icon" onclick="editCell(this, ${index}, '${field}')">✏️</span>`
            : ""
        }
      </div>
    </td>
  `;
}

function editCell(icon, index, field) {
  if (PROTECTED_FIELDS.includes(field) && !editEnabled) return;

  const td = icon.closest("td");
  const oldValue = data[index][field];

  td.innerHTML = `<input class="edit-input" value="${oldValue}">`;
  const input = td.querySelector("input");
  input.focus();

  input.addEventListener("blur", () => {
    data[index][field] = input.value;
    save();
    saveHistory({
      time: new Date().toISOString(),
      field,
      oldValue,
      newValue: input.value
    });
    render();
  });
}

/* =====================================================
   EVENTS & START
===================================================== */
function debounce(fn, delay = 300) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(null, args), delay);
  };
}

const debouncedRender = debounce(render, 300);

search.addEventListener("input", debouncedRender);
categoryFilter.addEventListener("change", render);

["click", "keydown", "mousemove"].forEach(evt =>
  document.addEventListener(evt, () => {
    if (editEnabled) startAutoLock();
  })
);

syncUI();
updateToggleButton();
