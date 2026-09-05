const bag = [];
const bagCount = document.getElementById("bagCount");
const bagItems = document.getElementById("bagItems");
const subtotal = document.getElementById("subtotal");
const shippingEl = document.getElementById("shipping");
const estimatedTotal = document.getElementById("estimatedTotal");
const shippingProgress = document.getElementById("shippingProgress");
const drawer = document.getElementById("drawer");

function money(n){ return "$" + n.toFixed(2); }

function renderBag() {
  bagCount.textContent = bag.length;
  const sub = bag.reduce((sum, item) => sum + item.price, 0);
  const shipping = sub >= 75 || sub === 0 ? 0 : 6.99;
  subtotal.textContent = money(sub);
  shippingEl.textContent = sub === 0 ? "$6.99" : (shipping === 0 ? "FREE" : money(shipping));
  estimatedTotal.textContent = money(sub + shipping);

  if (sub >= 75) shippingProgress.textContent = "You unlocked FREE shipping! 🤍";
  else shippingProgress.textContent = `Add ${money(75 - sub)} more for free shipping.`;

  if (!bag.length) {
    bagItems.innerHTML = '<p class="empty">Your bag is waiting for something sweet.</p>';
    return;
  }
  bagItems.innerHTML = bag.map((item, i) =>
    `<div class="bag-row"><div class="bag-row-main"><span>${item.name}</span><small>Size ${item.size} · ${money(item.price)}</small></div><button onclick="removeItem(${i})" style="border:0;background:none;cursor:pointer">×</button></div>`
  ).join("");
}
function removeItem(i){ bag.splice(i,1); renderBag(); }

document.querySelectorAll(".add-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".product-card");
    const size = card.querySelector(".size-select").value;
    bag.push({name: btn.dataset.name, price: Number(btn.dataset.price), size});
    renderBag();
    drawer.classList.add("open");
  });
});
document.getElementById("bagBtn").onclick = () => drawer.classList.add("open");
document.getElementById("closeBag").onclick = () => drawer.classList.remove("open");
drawer.addEventListener("click", e => { if(e.target === drawer) drawer.classList.remove("open"); });

function applyFilter(value){
  document.querySelectorAll(".filter").forEach(f => f.classList.toggle("active", f.dataset.filter === value));
  document.querySelectorAll(".product-card").forEach(card => {
    card.style.display = value === "all" || card.dataset.category === value || (value==="baby" && ["baby","girls","boys"].includes(card.dataset.category) && card.querySelector(".product-info p").textContent.includes("0–3M")) ? "" : "none";
  });
}
document.querySelectorAll(".filter").forEach(filter => filter.addEventListener("click", () => applyFilter(filter.dataset.filter)));
document.querySelectorAll("[data-jump-filter]").forEach(link => link.addEventListener("click", () => setTimeout(() => applyFilter(link.dataset.jumpFilter),50)));

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
document.getElementById("searchInput").addEventListener("input", e => {
  const q = e.target.value.toLowerCase().trim();
  document.querySelectorAll(".product-card").forEach(card => {
    card.style.display = !q || card.dataset.name.includes(q) ? "" : "none";
  });
});

document.getElementById("newsletterForm").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("formMessage").textContent = "You're on the list — welcome to Lullaby Lane. ♡";
  e.target.reset();
});
document.getElementById("checkoutBtn").onclick = () => {
  alert("Your catalog and cart are ready. The next step is connecting a real payment/checkout provider.");
};
renderBag();
