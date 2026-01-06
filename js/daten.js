
/* =======================
   KONFIGURATION
======================= */
const STORAGE_KEY = "materialData";
const PROTECTED_FIELDS = ["material", "e"];
let editEnabled = localStorage.getItem("editEnabled") === "true";
const defaultData = [

/* =======================
   MATERIAL KERAMIK
======================= */
{ cat: "Material Keramik", material: "Alodur 0,1 - 0,15", e: "E32873900", shelf: "", bestand: "" },
{ cat: "Material Keramik", material: "Alodur 0,25 - 0,5", e: "E32874100", shelf: "", bestand: "" },
{ cat: "Material Keramik", material: "Alodur 0,5 - 1", e: "E32874200", shelf: "", bestand: "" },
{ cat: "Material Keramik", material: "Tabular 14/28", e: "E32873100", shelf: "", bestand: "" },
{ cat: "Material Keramik", material: "DPC 200 mesh", e: "E32809100", shelf: "", bestand: "" },
{ cat: "Material Keramik", material: "DPC 300 mesh", e: "E32809200", shelf: "", bestand: "" },
{ cat: "Material Keramik", material: "DPC 300FG", e: "E32809301", shelf: "", bestand: "" },
{ cat: "Material Keramik", material: "ZFG", e: "E32809300", shelf: "", bestand: "" },
{ cat: "Material Keramik", material: "Nabalox", e: "E32870500", shelf: "", bestand: "" },
{ cat: "Material Keramik", material: "F-240", e: "E32870800", shelf: "", bestand: "" },
{ cat: "Material Keramik", material: "F-280", e: "E32874280", shelf: "", bestand: "" },
{ cat: "Material Keramik", material: "ZrO2 (ehemals Q1)", e: "E32871400", shelf: "", bestand: "" },
{ cat: "Material Keramik", material: "Cobalt Aluminat", e: "E32808800", shelf: "", bestand: "" },
{ cat: "Material Keramik", material: "Rhoseal", e: "E32873000", shelf: "", bestand: "" },
{ cat: "Material Keramik", material: "Rhoseal HT", e: "E32873200", shelf: "", bestand: "" },

/* =======================
   MATERIAL KERNFERTIGUNG
======================= */
{ cat: "Material Kernfertigung", material: "Remet FS 120 Mesh LHT", e: "E00010380", shelf: "", bestand: "" },
{ cat: "Material Kernfertigung", material: "Amosil FW4", e: "E00010376", shelf: "", bestand: "" },
{ cat: "Material Kernfertigung", material: "Amosil 550", e: "E00010377", shelf: "", bestand: "" },
{ cat: "Material Kernfertigung", material: "Sikron SF6000", e: "E00001155", shelf: "", bestand: "" },
{ cat: "Material Kernfertigung", material: "Zirkon", e: "E00004495", shelf: "", bestand: "" },
{ cat: "Material Kernfertigung", material: "A800", e: "E00000452", shelf: "", bestand: "" },
{ cat: "Material Kernfertigung", material: "Al-Stearat", e: "E00001142", shelf: "", bestand: "" },
{ cat: "Material Kernfertigung", material: "Ca-Stearat", e: "E00000451", shelf: "", bestand: "" },
{ cat: "Material Kernfertigung", material: "Nabalox No202 II", e: "", shelf: "", bestand: "" },

/* =======================
   MATERIAL WACHS
======================= */
{ cat: "Material Wachs", material: "Modellwachs A7 FR 60", e: "E32880700", shelf: "", bestand: "" },
{ cat: "Material Wachs", material: "Paracast FW 14896", e: "E32882600", shelf: "", bestand: "" },
{ cat: "Material Wachs", material: "B559", e: "E32882300", shelf: "", bestand: "" },

/* =======================
   MATERIAL FLÜSSIGKEITEN
======================= */
{ cat: "Material Flüssigkeiten Keramik", material: "W640", e: "E32874640", shelf: "", bestand: "" },
{ cat: "Material Flüssigkeiten Keramik", material: "Latex", e: "E32874500", shelf: "", bestand: "" },
{ cat: "Material Flüssigkeiten Keramik", material: "Ludox", e: "E32874300", shelf: "", bestand: "" },
{ cat: "Material Flüssigkeiten Keramik", material: "Isopropanol", e: "E00006517", shelf: "", bestand: "" },
{ cat: "Material Flüssigkeiten Keramik", material: "Symperonic", e: "E32871300", shelf: "", bestand: "" }

];

let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultData;

/* =======================
   STORAGE
======================= */
function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

/* =======================
   RENDERING
======================= */
function render(filter = "") {
  const body = document.getElementById("tableBody");
  body.innerHTML = "";
  let lastCat = "";

  data.forEach((m, i) => {
    if (!m.material || !m.material.toLowerCase().includes(filter.toLowerCase())) return;

    if (m.cat !== lastCat) {
      body.innerHTML += `<tr class="category"><td colspan="5">${m.cat}</td></tr>`;
      lastCat = m.cat;
    }

    body.innerHTML += `
      <tr>
        ${editableCell(m.material, i, "material")}
        ${editableCell(m.e, i, "e")}
        ${editableCell(m.shelf, i, "shelf")}
        ${editableCell(m.bestand, i, "bestand")}
        <td>—</td>
      </tr>
    `;
  });
}

/* =======================
   EDITING
======================= */
function editableCell(value, index, field) {
  const needsKey = PROTECTED_FIELDS.includes(field);
  const canEdit = !needsKey || editEnabled;

  return `
    <td>
      <div class="edit-wrapper">
        <span>${value || ""}</span>
        ${canEdit ? `<span class="edit-icon" onclick="startEdit(this, ${index}, '${field}')">✏️</span>` : ""}
      </div>
    </td>
  `;
}

function startEdit(icon, index, field) {
  const needsKey = PROTECTED_FIELDS.includes(field);
  if (needsKey && !editEnabled) {
    alert("Dieser Bereich ist geschützt.");
    return;
  }

  const td = icon.closest("td");
  const currentValue = data[index][field];

  td.innerHTML = `<input class="edit-input" value="${currentValue || ""}">`;
  const input = td.querySelector("input");
  input.focus();

  input.addEventListener("blur", () => finishEdit(input, index, field));
  input.addEventListener("keydown", e => {
    if (e.key === "Enter") input.blur();
  });
}

function finishEdit(input, index, field) {
  data[index][field] = input.value;
  save();
  render(document.getElementById("search").value);
}

/* =======================
   EVENTS
======================= */
document.getElementById("search").addEventListener("input", e => {
  render(e.target.value);
});

/* =======================
   START
======================= */
render();

