const navbar = document.querySelector(".navbar");
const content = document.querySelector(".main-content-services");
// const foot = document.querySelector(".footer");

content.style.marginTop = `${navbar.offsetHeight}px`;
// content.style.marginBottom = `${foot.offsetHeight}px`;

const faqData = [
  {
    title: "What services do you offer?",
    content:
      "We provide a wide range of home and garden care solutions, including planting, garden design, fence installation, and equipment rental.",
  },
  {
    title: "Can you help with garden design?",
    content:
      "Yes, our experienced designers can create bespoke outdoor gardens tailored to your preferences and the specific conditions of your space.",
  },
  {
    title: "What plants will thrive in my garden?",
    content:
      "Our planting services include expert advice to help you choose plants best suited to your garden's climate and soil conditions.",
  },
  {
    title: "Do you install fences?",
    content:
      "Absolutely! We offer expert fence installation services to enhance your garden's privacy, safety, and overall aesthetic appeal.",
  },
  {
    title: "Can I rent equipment for my garden projects?",
    content:
      "Yes, our garden cart rental service provides reliable equipment for heavy-lifting tasks, making your gardening projects easier and more efficient.",
  },
];

const fagList = document.querySelector("#faq-list");

faqData.map((item, index) => {
  const faqItem = document.createElement("div");
  faqItem.className = "faq-item";

  const faqTitle = document.createElement("div");
  faqTitle.className = "faq-title";
  faqTitle.textContent = item.title;
  const faqArrow = document.createElement("div");
  faqArrow.className = "faq-arrow";
  faqArrow.addEventListener("click", (event) => toggleFaq(event, index));

  const faqTitleContainer = document.createElement("div");
  faqTitleContainer.className = "faq-title-container";

  const faqContent = document.createElement("div");
  faqContent.className = "faq-content";
  faqContent.textContent = item.content;

  faqTitleContainer.appendChild(faqTitle);
  faqTitleContainer.appendChild(faqArrow);

  faqItem.appendChild(faqTitleContainer);
  faqItem.appendChild(faqContent);
  fagList.appendChild(faqItem);
});

function toggleFaq(event, index) {
  event.preventDefault();
  const element = event.target;
  element.classList.toggle("faq-arrow-active");
  const faqContent = document.querySelectorAll(".faq-content")[index];
  faqContent.classList.toggle("faq-content-active");

  const faqItem = document.querySelectorAll(".faq-item")[index];
  faqItem.classList.toggle("faq-item-active");
}
