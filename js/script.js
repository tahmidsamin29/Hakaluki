const products = [
  {
    id: 1,
    name: "Thermoflask",
    price: 43.85,
    category: "promotion",
    image: "resources/thermoflask.png",
    description: "Reusable drinkware for a greener lifestyle.",
  },
  {
    id: 2,
    name: "Cookware",
    price: 78.35,
    category: "new",
    image: "resources/cookware.png",
    description: "Non-toxic cookware for sustainable cooking.",
  },
  {
    id: 3,
    name: "Kettle",
    price: 143.85,
    category: "customer favourite",
    image: "resources/kettle.png",
    description: "Kettle and Toaster for eco-friendly meals.",
  },
  {
    id: 4,
    name: "Utensil-Holder",
    price: 26.85,
    category: "new",
    image: "resources/untensilholder.png",
    description: "Bamboo made utensil holder.",
  },
  {
    id: 5,
    name: "Toaster",
    price: 43.85,
    category: "promotion",
    image: "resources/toaster.png",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    id: 6,
    name: "Cooking-Pot",
    price: 43.85,
    category: "promotion",
    image: "resources/cookingpot.png",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
];

const category = [
  "Cookware",
  "Tableware & Dinnerware",
  "Food Storage",
  "Utensils & Tools",
  " Drinkware",
  "Cleaning & Dish Care",
  "Zero-Waste Essentials",
  "Small Appliances",
  "Gifts & Sets",
  "Sale & New Arrivals",
];

const productCards = document.querySelector(".product-cards");

const productCards_HTML = products
  .map((product) => {
    return `
  <div class="product-card">

                    <div class="product-card-image-container">
                        <span class="product-card-badge">
                            ${product.category}
                        </span>
                        <img src=${product.image} alt=${product.name} title=${product.name} width="3168"
                            height="4584" loading="lazy">
                    </div>
                    <div class="product-card-content">
                        <p>${product.description}</p>
                        <div class="product-card-content-action">
                            <p class="product-price">
                                <b>$${product.price}</b>
                            </p>
                            <span class="shopping-bag material-symbols-outlined">shopping_bag</span>
                            <button class="Add-to-cart">+ Cart</button>
                        </div>
                    </div>
                </div>`;
  })
  .join(" ");

productCards.innerHTML = productCards_HTML;

const navbarInput = document.getElementById("nav-search");
const searchResults = document.querySelector(".result-box");
const searchBox = document.querySelector(".search");

const navbarInputTablet = document.getElementById("nav-search-tablet");

document.addEventListener("click", (e) => {
  if (!e.target.closest(".search")) {
    searchResults.innerHTML = "";
    const searchBox = document.querySelector(".search");
    searchBox.classList.remove("open");
  }
});

function renderList(list) {
  if (list.length === 0) {
    searchResults.innerHTML = "";
    searchBox.classList.remove("open");
    return;
  }

  const items = list
    .map((item) => {
      return `
    <li>  <a href="">
      <span class="search-icon material-symbols-outlined"
      >search</span
      >${item.name}</a>
    </li>
    `;
    })
    .join(" ");

  searchResults.innerHTML = "<ul>" + items + "</ul>";
  searchBox.classList.add("open");
}

function updatedList() {
  const query = (navbarInput || navbarInputTablet).value.toLowerCase().trim();
  const list =
    query === ""
      ? products
      : products.filter((product) =>
          product.name.toLowerCase().includes(query),
        );
  renderList(list);
}

navbarInput.addEventListener("click", updatedList);
navbarInput.addEventListener("input", updatedList);
navbarInputTablet.addEventListener("click", updatedList);
navbarInputTablet.addEventListener("input", updatedList);
