/* =========================
   STORAGE KEY – FM
========================= */
const FM_STORAGE_KEY = "fmData";

/* =========================
   Editier Bereich – FS
========================= */
const FM_EDITABLE_FIELDS = [
  "lieferung_pr",
  "bestand",
  "bemerkung"
];
/* =====================================================
   STATUS
===================================================== */


const DEFAULT_FM_DATA = [
  {
    pos1: 1,
    artikel1: "E00034311",
    artikel2: "E00034067",
    artikel: "052J",
    koernung: "60",
    abmessung: "6 x 610",
    verpackung: "250",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },
  {
    pos1: 2,
    artikel1: "E00034312",
    artikel2: "E00034068",
    artikel: "052J",
    koernung: "80",
    abmessung: "6 x 610",
    verpackung: "250",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },
  {
    pos1: 3,
    artikel1: "E00034307",
    artikel2: "E00034066",
    artikel: "052J",
    koernung: "60",
    abmessung: "15 x 457",
    verpackung: "250",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },
  {
    pos1: 4,
    artikel1: "E00034308",
    artikel2: "E00034065",
    artikel: "052J",
    koernung: "80",
    abmessung: "15 x 457",
    verpackung: "250",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },
  {
    pos1: 5,
    artikel1: "E00034328",
    artikel2: "E00010411",
    artikel: "051XP P50",
    koernung: "50",
    abmessung: "25 x 760",
    verpackung: "50",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },
  {
    pos1: 6,
    artikel1: "E00034304",
    artikel2: "E00034072",
    artikel: "052J",
    koernung: "60",
    abmessung: "25 x 760",
    verpackung: "100",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },
  {
    pos1: 7,
    artikel1: "E00034305",
    artikel2: "E00034063",
    artikel: "052J",
    koernung: "80",
    abmessung: "25 x 760",
    verpackung: "100",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },
  {
    pos1: 8,
    artikel1: "E00034323",
    artikel2: "E00034061",
    artikel: "051XP",
    koernung: "60",
    abmessung: "50 x 1067",
    verpackung: "10",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },
  {
    pos1: 9,
    artikel1: "E00034317",
    artikel2: "E00034062",
    artikel: "052J",
    koernung: "60",
    abmessung: "50 x 1067",
    verpackung: "20",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },
  {
    pos1: 10,
    artikel1: "E00034318",
    artikel2: "E00034071",
    artikel: "052J",
    koernung: "80",
    abmessung: "50 x 1067",
    verpackung: "20",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },

  {
    pos1: 11,
    artikel1: "E00034310",
    artikel2: "E00034052",
    artikel: "052J",
    koernung: "80",
    abmessung: "50 x 2500",
    verpackung: "100",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },
  {
    pos1: 12,
    artikel1: "E00034321",
    artikel2: "E00034051",
    artikel: "051XP",
    koernung: "60",
    abmessung: "50 x 2500",
    verpackung: "50",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },
  {
    pos1: 13,
    artikel1: "E00034322",
    artikel2: "E00034053",
    artikel: "051XP",
    koernung: "80",
    abmessung: "50 x 2500",
    verpackung: "50",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },
  {
    pos1: 14,
    artikel1: "E00034300",
    artikel2: "E00034058",
    artikel: "552JFF",
    koernung: "120",
    abmessung: "48 x 2500",
    verpackung: "20",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },

  {
    pos1: 15,
    artikel1: "E00034301",
    artikel2: "E00034060",
    artikel: "552JFF",
    koernung: "180",
    abmessung: "48 x 2500",
    verpackung: "20",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },
  {
    pos1: 16,
    artikel1: "E00034325",
    artikel2: "E00034074",
    artikel: "051XP",
    koernung: "60",
    abmessung: "50 x 3500",
    verpackung: "50",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },

  {
    pos1: 17,
    artikel1: "E00034309",
    artikel2: "E000XXXXX",
    artikel: "052J",
    koernung: "61800",
    abmessung: "15 x 9457",
    verpackung: "250",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },
  {
    pos1: 18,
    artikel1: "E00034306",
    artikel2: "E000XXXXX",
    artikel: "052J",
    koernung: "180",
    abmessung: "25 x 760",
    verpackung: "100",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },

  {
    pos1: 19,
    artikel1: "E00034303",
    artikel2: "E00034059",
    artikel: "552JFF",
    koernung: "180",
    abmessung: "50 x 2500",
    verpackung: "20",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },
  {
    pos1: 20,
    artikel1: "E00034302",
    artikel2: "E00034057",
    artikel: "552JFF",
    koernung: "120",
    abmessung: "50 x 2500",
    verpackung: "20",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },

  {
    pos1: 21,
    artikel1: "E00034313",
    artikel2: "E000XXXXX",
    artikel: "052J",
    koernung: "60",
    abmessung: "25 x 3500",
    verpackung: "????",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },
  {
    pos1: 22,
    artikel1: "E00034314",
    artikel2: "E000XXXXX",
    artikel: "052J",
    koernung: "80",
    abmessung: "25 x 3500",
    verpackung: "????",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },

  {
    pos1: 23,
    artikel1: "E00034327",
    artikel2: "E000XXXXX",
    artikel: "071XP",
    koernung: "80",
    abmessung: "50 x 2500",
    verpackung: "????",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },
  {
    pos1: 24,
    artikel1: "E00034324",
    artikel2: "E000XXXXX",
    artikel: "071XP",
    koernung: "60",
    abmessung: "50 x 1067",
    verpackung: "????",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },

  {
    pos1: 25,
    artikel1: "E00034336",
    artikel2: "E000XXXXX",
    artikel: "P36",
    koernung: "60",
    abmessung: "150 x 3500",
    verpackung: "????",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },
  {
    pos1: 26,
    artikel1: "E00034329",
    artikel2: "E000XXXXX",
    artikel: "????",
    koernung: "60+",
    abmessung: "18 x 2030",
    verpackung: "????",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },

  {
    pos1: 27,
    artikel1: "E00034330",
    artikel2: "E000XXXXX",
    artikel: "????",
    koernung: "80+",
    abmessung: "18 x 2040",
    verpackung: "????",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },
  {
    pos1: 28,
    artikel1: "E00034331",
    artikel2: "E000XXXXX",
    artikel: "????",
    koernung: "80",
    abmessung: "18 x 2010",
    verpackung: "????",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },

  {
    pos1: 29,
    artikel1: "E00034332",
    artikel2: "E000XXXXX",
    artikel: "????",
    koernung: "60+",
    abmessung: "30 x 3500",
    verpackung: "????",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },
  {
    pos1: 30,
    artikel1: "E00034333",
    artikel2: "E000XXXXX",
    artikel: "????",
    koernung: "36+",
    abmessung: "30 x 3500",
    verpackung: "????",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },

  {
    pos1: 31,
    artikel1: "E00034334",
    artikel2: "E000XXXXX",
    artikel: "????",
    koernung: "80",
    abmessung: "25 x 3500",
    verpackung: "????",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },
  {
    pos1: 32,
    artikel1: "E00034335",
    artikel2: "E000XXXXX",
    artikel: "????",
    koernung: "60",
    abmessung: "25 x 3500",
    verpackung: "????",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },

  {
    pos1: 33,
    artikel1: "E00034326",
    artikel2: "E00034075",
    artikel: "051XP",
    koernung: "80",
    abmessung: "50 x 3500",
    verpackung: "????",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  },
  {
    pos1: 34,
    artikel1: "E00034320",
    artikel2: "E000XXXXX",
    artikel: "????",
    koernung: "80",
    abmessung: "6 x 610",
    verpackung: "????",
    lieferung_pr: "",
    bestand: 0,
    bemerkung: "",
    _isDefault: true
  }
];

let fmData = loadFMData();
/* Daten Laden */
function loadFMData() {
  const stored = localStorage.getItem(FM_STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return structuredClone(DEFAULT_FM_DATA);
    }
  }
  return structuredClone(DEFAULT_FM_DATA);
}

/* Daten Speichern */
function saveFMData() {
  localStorage.setItem(FM_STORAGE_KEY, JSON.stringify(fmData));
}

function setTabCount(tab, count) {
  const btn = document.querySelector(`.tab-btn[data-tab="${tab}"]`);
  if (!btn) return;

  const base = btn.textContent.replace(/\s*\(\d+\)$/, "");

  if (count > 0 && globalSearchTerm) {
    btn.textContent = `${base} (${count})`;
  } else {
    btn.textContent = base;
  }
}

/* Edit funktion */
function fmCell(value, rowIndex, field) {
  const canEdit = FM_EDITABLE_FIELDS.includes(field);

  return `
    <td data-col="${field}" class="${canEdit ? "" : "protected"}">
      <div class="edit-wrapper">
        <span>${value ?? ""}</span>
        ${
          canEdit
            ? `<span class="edit-icon"
                   onclick="editFM(this, ${rowIndex}, '${field}')">✏️</span>`
            : ""
        }
      </div>
    </td>
  `;
}

function editFM(icon, rowIndex, field) {
  /* 
    ➡️ Die Funktion beendet sich sofort
    ➡️ Kein Input
    ➡️ Kein Fehler
    ➡️ „Es passiert nichts“
    */
  
    const canEdit = editEnabled && FM_EDITABLE_FIELDS.includes(field);
  if (!editEnabled) return;



  const td = icon.closest("td");
  const span = td.querySelector("span");

  if (!span) return;

  const oldValue = span.textContent;

  // Input erzeugen
  const input = document.createElement("input");
  input.type = "text";
  input.value = oldValue;
  input.className = "cell-input";

  // Span ersetzen
  span.replaceWith(input);
  input.focus();

  function save() {
    const newValue = input.value.trim();

    // Daten aktualisieren
    fmData[rowIndex][field] = newValue;
    saveFMData();
    // Re-Render
    renderFM();
  }

  input.addEventListener("blur", save);
  input.addEventListener("keydown", e => {
    if (e.key === "Enter") input.blur();
    if (e.key === "Escape") renderFM();
  });
}


function renderFM() {
  if (!loggedIn) return;

  const tbody = document.getElementById("fmTableBody");
  tbody.innerHTML = "";

  /* ===== FILTER ===== */
  let fmFiltered = fmData;

  if (globalSearchTerm) {
    fmFiltered = fmFiltered.filter(row =>
      Object.values(row).some(v =>
        String(v).toLowerCase().includes(globalSearchTerm)
      )
    );
  }

  setTabCount("fm", fmFiltered.length);
  /* ===== ENDE FILTER ===== */

  fmFiltered.forEach((row, i) => {
    tbody.innerHTML += `
      <tr>
        <td data-col="pos1">${highlightText(row.pos1 ?? "", globalSearchTerm)}</td>
        <td data-col="artikel1">${highlightText(row.artikel1 ?? "", globalSearchTerm)}</td>
        <td data-col="artikel2">${highlightText(row.artikel2 ?? "", globalSearchTerm)}</td>
        <td data-col="artikel">${highlightText(row.artikel ?? "", globalSearchTerm)}</td>
        <td data-col="koernung">${highlightText(row.koernung ?? "", globalSearchTerm)}</td>
        <td data-col="abmessung">${highlightText(row.abmessung ?? "", globalSearchTerm)}</td>
        <td data-col="verpackung">${highlightText(row.verpackung ?? "", globalSearchTerm)}</td>
        ${fmCell(row.lieferung_pr, i, "lieferung_pr")}
        ${fmCell(row.bestand, i, "bestand")}
        ${fmCell(row.bemerkung, i, "bemerkung")}
      </tr>
    `;
  });
}

document
  .querySelectorAll('#fmSection input[type="checkbox"][data-col]')
  .forEach(cb => {
    cb.addEventListener("change", () => {
      const col = cb.dataset.col;
      const visible = cb.checked;

      document
        .querySelectorAll(`#fmSection [data-col="${col}"]`)
        .forEach(el => {
          el.style.display = visible ? "" : "none";
        });
    });
  });

  function highlightText(text, term) {
  if (!term) return text;

  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");

  return String(text).replace(regex, '<mark class="search-hit">$1</mark>');
}

function resetFM() {
  if (!confirm("FM-Daten wirklich zurücksetzen?")) return;

  localStorage.removeItem("fmData");

  fmData = structuredClone(DEFAULT_FM_DATA);
  renderFM();
}
