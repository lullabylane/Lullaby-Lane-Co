// Lullaby Lane & Co. product catalog
// To change a product later, edit its name or price below and save the file.
const products = [
  {
    "id": 1,
    "name": "Mama’s Bestie Bow Bubble",
    "price": 21.99,
    "category": "girls",
    "image": "product-01.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 2,
    "name": "Pink Bow Zip Romper",
    "price": 22.99,
    "category": "girls",
    "image": "product-02.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 3,
    "name": "Gray Camo Zip Romper",
    "price": 22.99,
    "category": "boys",
    "image": "product-03.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 4,
    "name": "Blue Duck Bubble",
    "price": 21.99,
    "category": "boys",
    "image": "product-04.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 5,
    "name": "Camo Call Bubble",
    "price": 21.99,
    "category": "boys",
    "image": "product-05.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 6,
    "name": "Camo Zip Romper",
    "price": 22.99,
    "category": "boys",
    "image": "product-06.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 7,
    "name": "Wildlife Ruffle Bubble",
    "price": 21.99,
    "category": "girls",
    "image": "product-07.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 8,
    "name": "Green Gingham Duck Bubble",
    "price": 21.99,
    "category": "boys",
    "image": "product-08.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 9,
    "name": "Striped Duck Romper",
    "price": 22.99,
    "category": "boys",
    "image": "product-09.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 10,
    "name": "Mama’s Girl Red Bubble",
    "price": 21.99,
    "category": "girls",
    "image": "product-10.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 11,
    "name": "Pink Paisley Bubble",
    "price": 21.99,
    "category": "girls",
    "image": "product-11.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 12,
    "name": "Woodland Camo Bubble",
    "price": 21.99,
    "category": "boys",
    "image": "product-12.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 13,
    "name": "Blue Duck Bubble",
    "price": 21.99,
    "category": "boys",
    "image": "product-13.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 14,
    "name": "Dad Blue Gingham Bubble",
    "price": 21.99,
    "category": "boys",
    "image": "product-14.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 15,
    "name": "Pink Tractor Bubble",
    "price": 21.99,
    "category": "girls",
    "image": "product-15.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 16,
    "name": "Mama’s Girl Floral Bubble",
    "price": 21.99,
    "category": "girls",
    "image": "product-16.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 17,
    "name": "Woodland Camo Romper",
    "price": 22.99,
    "category": "boys",
    "image": "product-17.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 18,
    "name": "God’s Country Green Bubble",
    "price": 21.99,
    "category": "boys",
    "image": "product-18.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 19,
    "name": "Bee Bubble",
    "price": 21.99,
    "category": "girls",
    "image": "product-19.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 20,
    "name": "Bee Bubble",
    "price": 21.99,
    "category": "girls",
    "image": "product-20.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 21,
    "name": "American Flag Romper",
    "price": 22.99,
    "category": "boys",
    "image": "product-21.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 22,
    "name": "Camo Duck Ruffle Bubble",
    "price": 21.99,
    "category": "girls",
    "image": "product-22.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 23,
    "name": "Green Tractor Romper",
    "price": 22.99,
    "category": "boys",
    "image": "product-23.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 24,
    "name": "Mama’s Boy Camo Bubble",
    "price": 21.99,
    "category": "boys",
    "image": "product-24.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 25,
    "name": "Outdoor Print Zip Romper",
    "price": 22.99,
    "category": "boys",
    "image": "product-25.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 26,
    "name": "Blue Outdoor Zip Romper",
    "price": 22.99,
    "category": "boys",
    "image": "product-26.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 27,
    "name": "Camo Pocket Romper",
    "price": 22.99,
    "category": "boys",
    "image": "product-27.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 28,
    "name": "Hunting Patch Romper",
    "price": 22.99,
    "category": "boys",
    "image": "product-28.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 29,
    "name": "Mama’s Boy Woodland Bubble",
    "price": 21.99,
    "category": "boys",
    "image": "product-29.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 30,
    "name": "Tan Dog Bubble",
    "price": 21.99,
    "category": "boys",
    "image": "product-30.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 31,
    "name": "Hunting Dog Bubble",
    "price": 21.99,
    "category": "boys",
    "image": "product-31.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 32,
    "name": "Outdoor Zip Romper",
    "price": 22.99,
    "category": "boys",
    "image": "product-32.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 33,
    "name": "Patriotic Bow Bubble",
    "price": 21.99,
    "category": "girls",
    "image": "product-33.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 34,
    "name": "Mama’s Bestie Pink Bubble",
    "price": 21.99,
    "category": "girls",
    "image": "product-34.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 35,
    "name": "Blue Bow Bubble",
    "price": 21.99,
    "category": "girls",
    "image": "product-35.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 36,
    "name": "Western Polo Romper",
    "price": 22.99,
    "category": "boys",
    "image": "product-36.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 37,
    "name": "Striped Duck Romper",
    "price": 22.99,
    "category": "boys",
    "image": "product-37.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 38,
    "name": "Gray Duck Camo Set",
    "price": 25.99,
    "category": "boys",
    "image": "product-38.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 39,
    "name": "Duck Gingham Set",
    "price": 25.99,
    "category": "boys",
    "image": "product-39.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 40,
    "name": "Monster Truck Set",
    "price": 25.99,
    "category": "boys",
    "image": "product-40.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 41,
    "name": "Daddy’s Boy Duck Set",
    "price": 25.99,
    "category": "boys",
    "image": "product-41.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 42,
    "name": "Camo Duck Set",
    "price": 25.99,
    "category": "boys",
    "image": "product-42.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 43,
    "name": "Camo Pajama Set",
    "price": 25.99,
    "category": "boys",
    "image": "product-43.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 44,
    "name": "Leopard Bow Set",
    "price": 25.99,
    "category": "girls",
    "image": "product-44.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 45,
    "name": "Camo Call Set",
    "price": 25.99,
    "category": "boys",
    "image": "product-45.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 46,
    "name": "God’s Country Pink Set",
    "price": 25.99,
    "category": "girls",
    "image": "product-46.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 47,
    "name": "Tan Dog Camo Set",
    "price": 25.99,
    "category": "boys",
    "image": "product-47.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  },
  {
    "id": 48,
    "name": "Mama’s Boy Camo Set",
    "price": 25.99,
    "category": "boys",
    "image": "product-48.jpg",
    "sizes": [
      "0–3",
      "3–6",
      "6–12",
      "12–18",
      "2T"
    ]
  }
];

const bag = [];
const bagCount = document.getElementById("bagCount");
const bagItems = document.getElementById("bagItems");
const subtotal = document.getElementById("subtotal");
const shippingEl = document.getElementById("shipping");
const estimatedTotal = document.getElementById("estimatedTotal");
const shippingProgress = document.getElementById("shippingProgress");
const drawer = document.getElementById("drawer");
const productsEl = document.getElementById("products");

function money(n){ return "$" + n.toFixed(2); }
function renderProducts(list = products){
  productsEl.innerHTML = list.map(p => `
    <article class="product-card" data-category="${p.category}" data-name="${p.name.toLowerCase()}">
      <div class="product-image real"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
      <div class="product-info"><div><h3>${p.name}</h3><p>Sizes 0–3M through 2T</p></div><strong>${money(p.price)}</strong></div>
      <label class="size-label">Size <select class="size-select">${p.sizes.map(s=>`<option value="${s}">${s}</option>`).join("")}</select></label>
      <button class="add-btn" data-id="${p.id}">Add to bag</button>
    </article>`).join("");
}
function renderBag(){
  bagCount.textContent = bag.length;
  const sub = bag.reduce((sum,item)=>sum+item.price,0);
  const shipping = sub >= 75 || sub === 0 ? 0 : 6.99;
  subtotal.textContent = money(sub);
  shippingEl.textContent = sub === 0 ? "$6.99" : (shipping===0 ? "FREE" : money(shipping));
  estimatedTotal.textContent = money(sub+shipping);
  if(sub>=75) shippingProgress.textContent="You unlocked FREE shipping! 🤍";
  else shippingProgress.textContent=`Add ${money(75-sub)} more for free shipping.`;
  if(!bag.length){ bagItems.innerHTML='<p class="empty">Your bag is waiting for something sweet.</p>'; return; }
  bagItems.innerHTML=bag.map((item,i)=>`<div class="bag-row"><div class="bag-row-main"><span>${item.name}</span><small>Size ${item.size} · ${money(item.price)}</small></div><button onclick="removeItem(${i})" style="border:0;background:none;cursor:pointer">×</button></div>`).join("");
}
function removeItem(i){ bag.splice(i,1); renderBag(); }
productsEl.addEventListener("click",e=>{
  const btn=e.target.closest(".add-btn"); if(!btn)return;
  const card=btn.closest(".product-card"); const p=products.find(x=>x.id===Number(btn.dataset.id));
  const size=card.querySelector(".size-select").value; bag.push({name:p.name,price:p.price,size}); renderBag(); drawer.classList.add("open");
});
document.getElementById("bagBtn").onclick=()=>drawer.classList.add("open");
document.getElementById("closeBag").onclick=()=>drawer.classList.remove("open");
drawer.addEventListener("click",e=>{if(e.target===drawer)drawer.classList.remove("open")});
function applyFilter(value){
 document.querySelectorAll(".filter").forEach(f=>f.classList.toggle("active",f.dataset.filter===value));
 document.querySelectorAll(".product-card").forEach(card=>{card.style.display=value==="all"||card.dataset.category===value||value==="baby"?"":"none";});
}
document.querySelectorAll(".filter").forEach(f=>f.addEventListener("click",()=>applyFilter(f.dataset.filter)));
document.querySelectorAll("[data-jump-filter]").forEach(link=>link.addEventListener("click",()=>setTimeout(()=>applyFilter(link.dataset.jumpFilter),50)));
const mobileMenu=document.getElementById("mobileMenu");
document.getElementById("menuBtn").onclick=()=>{mobileMenu.style.display=mobileMenu.style.display==="flex"?"none":"flex"};
mobileMenu.querySelectorAll("a").forEach(a=>a.onclick=()=>mobileMenu.style.display="none");
const searchOverlay=document.getElementById("searchOverlay");
document.getElementById("searchBtn").onclick=()=>{searchOverlay.classList.add("open");setTimeout(()=>document.getElementById("searchInput").focus(),100)};
document.getElementById("closeSearch").onclick=()=>searchOverlay.classList.remove("open");
document.getElementById("searchInput").addEventListener("input",e=>{const q=e.target.value.toLowerCase().trim();document.querySelectorAll(".product-card").forEach(card=>{card.style.display=!q||card.dataset.name.includes(q)?"":"none"})});
document.getElementById("newsletterForm").addEventListener("submit",e=>{e.preventDefault();document.getElementById("formMessage").textContent="You're on the list — welcome to Lullaby Lane. ♡";e.target.reset()});
document.getElementById("checkoutBtn").onclick=()=>alert("Your catalog and cart are ready. The next step is connecting a real payment/checkout provider.");
renderProducts(); renderBag();
