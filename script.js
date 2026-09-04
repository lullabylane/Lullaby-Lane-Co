const bag = [];
const bagCount = document.getElementById("bagCount");
const bagItems = document.getElementById("bagItems");
const subtotal = document.getElementById("subtotal");
const drawer = document.getElementById("drawer");

function renderBag() {
  bagCount.textContent = bag.length;
  if (!bag.length) {
    bagItems.innerHTML = '<p class="empty">Your bag is waiting for something sweet.</p>';
    subtotal.textContent = "$0";
    return;
  }
  bagItems.innerHTML = bag.map((item, i) =>
    `<div class="bag-row"><span>${item}</span><button onclick="removeItem(${i})" style="border:0;background:none;cursor:pointer">×</button></div>`
  ).join("");
  const prices = {
    "Willow Ribbed Onesie": 28,
    "Moonlight Two-Piece Set": 42,
    "Sweet Dreams Gift Set": 54,
    "Sunday Morning Romper": 34
  };
  subtotal.textContent = "$" + bag.reduce((sum, item) => sum + prices[item], 0);
}
function removeItem(i){ bag.splice(i,1); renderBag(); }

document.querySelectorAll(".add-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    bag.push(btn.dataset.name);
    renderBag();
    drawer.classList.add("open");
  });
});
document.getElementById("bagBtn").onclick = () => drawer.classList.add("open");
document.getElementById("closeBag").onclick = () => drawer.classList.remove("open");
drawer.addEventListener("click", e => { if(e.target === drawer) drawer.classList.remove("open"); });

document.querySelectorAll(".filter").forEach(filter => {
  filter.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(f => f.classList.remove("active"));
    filter.classList.add("active");
    const value = filter.dataset.filter;
    document.querySelectorAll(".product-card").forEach(card => {
      card.style.display = value === "all" || card.dataset.category === value ? "" : "none";
    });
  });
});

const mobileMenu = document.getElementById("mobileMenu");
document.getElementById("menuBtn").onclick = () => {
  mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
};
mobileMenu.querySelectorAll("a").forEach(a => a.onclick = () => mobileMenu.style.display = "none");

const searchOverlay = document.getElementById("searchOverlay");
document.getElementById("searchBtn").onclick = () => {
  searchOverlay.classList.add("open");
  setTimeout(() => document.getElementById("searchInput").focus(), 100);
};
document.getElementById("closeSearch").onclick = () => searchOverlay.classList.remove("open");

document.getElementById("newsletterForm").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("formMessage").textContent = "You're on the list — welcome to Lullaby Lane. ♡";
  e.target.reset();
});
document.getElementById("checkoutBtn").onclick = () => {
  alert("Checkout is ready to connect to your payment provider.");
};
renderBag();
