const navbar = document.querySelector(".navbar");
const content = document.querySelector(".main-content-contact");

const checkbox = document.querySelector("#terms");
const submitButton = document.querySelector("#submit");

content.style.marginTop = `${navbar.offsetHeight}px`;

const form = document.querySelector("#contact-form");

const modal = document.querySelector(".modal-respond");
const modalContent = document.querySelector("#person-firstname");
const closeModal = document.querySelector("#close-modal");

const counties = [
  "Dublin",
  "Antrim",
  "Armagh",
  "Carlow",
  "Cavan",
  "Clare",
  "Cork",
  "Derry",
  "Donegal",
  "Down",
  "Fermanagh",
  "Galway",
  "Kerry",
  "Kildare",
  "Kilkenny",
  "Laois",
  "Leitrim",
  "Limerick",
  "Longford",
  "Louth",
  "Mayo",
  "Meath",
  "Monaghan",
  "Offaly",
  "Roscommon",
  "Sligo",
  "Tipperary",
  "Tyrone",
  "Waterford",
  "Westmeath",
  "Wexford",
  "Wicklow",
];

const dropdown = document.getElementById("dropdown-county");

counties.forEach((county) => {
  const option = document.createElement("option");
  option.value = county;
  option.textContent = county;
  if (county === "Dublin") {
    option.selected = true;
  }
  dropdown.append(option);
});

// eslint-disable-next-line no-unused-vars
function toggleCheckbox() {
  submitButton.disabled = !checkbox.checked;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstName = document.querySelector("#firstName").value;

  modalContent.innerHTML = `
    Thank you very much,<span class="highlight">${firstName}</span>!
  `;

  form.reset();
  setTimeout(() => {
    modal.style.display = "flex";
  }, 250);
  form.reset();
});

closeModal.addEventListener("click", (event) => {
  event.preventDefault();
  modal.style.display = "none";
});
