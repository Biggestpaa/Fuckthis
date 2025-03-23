
function updateBanner() {
  const file = document.getElementById("bannerUpload").files[0];
  const reader = new FileReader();
  reader.onload = () => {
    localStorage.setItem("bannerImage", reader.result);
    document.getElementById("banner").src = reader.result;
  };
  if (file) reader.readAsDataURL(file);
}

function loadAdminPage() {
  const banner = localStorage.getItem("bannerImage");
  if (banner) document.getElementById("banner").src = banner;
  displayParts();
  displayAccessories();
}

function addPart() {
  const parts = JSON.parse(localStorage.getItem("parts") || "[]");
  const partImage = document.getElementById('partImage').files[0];
  const reader = new FileReader();
  reader.onload = () => {
    parts.push({
    name: document.getElementById("partName").value,
    partNumber: document.getElementById("partNumber").value,
    price: document.getElementById("partPrice").value,
    make: document.getElementById("partMake").value,
    model: document.getElementById("partModel").value,
    year: document.getElementById("partYear").value,
    category: document.getElementById("partCategory").value,
    subcategory: document.getElementById("partSubcategory").value
  });
      localStorage.setItem("parts", JSON.stringify(parts));
    displayParts();
  };
  if (partImage) reader.readAsDataURL(partImage); else reader.onload();
  displayParts();
}

function addAccessory() {
  const accs = JSON.parse(localStorage.getItem("accessories") || "[]");
  const accImage = document.getElementById('accImage').files[0];
  const reader2 = new FileReader();
  reader2.onload = () => {
    accs.push({
    name: document.getElementById("accName").value,
    partNumber: document.getElementById("accNumber").value,
    price: document.getElementById("accPrice").value,
    make: document.getElementById("accMake").value,
    model: document.getElementById("accModel").value,
    year: document.getElementById("accYear").value,
    category: document.getElementById("accCategory").value,
    subcategory: document.getElementById("accSubcategory").value
  });
      localStorage.setItem("accessories", JSON.stringify(accs));
    displayAccessories();
  };
  if (accImage) reader2.readAsDataURL(accImage); else reader2.onload();
  displayAccessories();
}

function displayParts() {
  const container = document.getElementById("partsManager");
  const parts = JSON.parse(localStorage.getItem("parts") || "[]");
  container.innerHTML = parts.map((p, i) => `<div class='item'>${p.name} - ${p.partNumber} - €${p.price}</div>`)+ `<button onclick='deletePart(i)' style='float:right; background:red; color:white;'>Delete</button>`</div>`)+ `<button onclick='deleteAccessory(i)' style='float:right; background:red; color:white;'>Delete</button>`</div>`).join("");
}

function displayAccessories() {
  const container = document.getElementById("accessoriesManager");
  const accs = JSON.parse(localStorage.getItem("accessories") || "[]");
  container.innerHTML = accs.map((a, i) => `<div class='item'>${a.name} - ${a.partNumber} - €${a.price}</div>`)+ `<button onclick='deletePart(i)' style='float:right; background:red; color:white;'>Delete</button>`</div>`)+ `<button onclick='deleteAccessory(i)' style='float:right; background:red; color:white;'>Delete</button>`</div>`).join("");
}


function deletePart(index) {
  const parts = JSON.parse(localStorage.getItem("parts") || "[]");
  parts.splice(index, 1);
  localStorage.setItem("parts", JSON.stringify(parts));
  displayParts();
}

function deleteAccessory(index) {
  const accs = JSON.parse(localStorage.getItem("accessories") || "[]");
  accs.splice(index, 1);
  localStorage.setItem("accessories", JSON.stringify(accs));
  displayAccessories();
}


let editPartIndex = null;
let editAccessoryIndex = null;

function editPart(index) {
  const parts = JSON.parse(localStorage.getItem("parts") || "[]");
  const part = parts[index];
  document.getElementById("partName").value = part.name;
  document.getElementById("partNumber").value = part.partNumber;
  document.getElementById("partPrice").value = part.price;
  document.getElementById("partMake").value = part.make;
  document.getElementById("partModel").value = part.model;
  document.getElementById("partYear").value = part.year;
  document.getElementById("partCategory").value = part.category;
  document.getElementById("partSubcategory").value = part.subcategory;
  editPartIndex = index;
  document.getElementById("addPartBtn").textContent = "Update Part";
}

function editAccessory(index) {
  const accs = JSON.parse(localStorage.getItem("accessories") || "[]");
  const acc = accs[index];
  document.getElementById("accName").value = acc.name;
  document.getElementById("accNumber").value = acc.partNumber;
  document.getElementById("accPrice").value = acc.price;
  document.getElementById("accMake").value = acc.make;
  document.getElementById("accModel").value = acc.model;
  document.getElementById("accYear").value = acc.year;
  document.getElementById("accCategory").value = acc.category;
  document.getElementById("accSubcategory").value = acc.subcategory;
  editAccessoryIndex = index;
  document.getElementById("addAccessoryBtn").textContent = "Update Accessory";
}
