// Cart page: line items with quantity controls, totals, checkout form, suggestions.
// There is no backend yet: placing an order shows a confirmation and clears the cart.

const list = document.getElementById("cartList");
const full = document.getElementById("cartFull");
const empty = document.getElementById("cartEmpty");
const done = document.getElementById("cartDone");
const suggest = document.getElementById("suggest");
const suggestGrid = document.getElementById("suggestGrid");
const countLabel = document.getElementById("cartCountLabel");
const orderForm = document.getElementById("orderForm");

let orderNo = null; // set after a successful checkout

function render() {
  const entries = cartEntries();
  const hasItems = entries.length > 0;

  done.hidden = orderNo === null;
  full.hidden = !hasItems || orderNo !== null;
  empty.hidden = hasItems || orderNo !== null;
  countLabel.textContent = hasItems ? t("cart.count", { n: cartCount() }) : "";
  if (orderNo !== null) document.getElementById("doneText").textContent = t("cart.done.text", { n: orderNo });

  list.innerHTML = entries.map(([p, q]) => {
    const tx = pt(p);
    return `
    <li class="cart-item glass">
      <div class="cart-item__img" style="background:${p.floor}">
        <img src="${p.img}" alt="${t("plant.alt", { name: tx.name })}" width="1122" height="1402">
      </div>
      <div class="cart-item__info">
        <h3>${tx.name}</h3>
        <small>${p.latin}</small>
        <span class="cart-item__each">${t("cart.each", { price: formatPrice(p.price) })}</span>
      </div>
      <div class="qty" role="group" aria-label="${t("qty.label")}">
        <button type="button" data-act="minus" data-id="${p.id}" aria-label="${t("qty.less")}" ${q <= 1 ? "disabled" : ""}>−</button>
        <output>${q}</output>
        <button type="button" data-act="plus" data-id="${p.id}" aria-label="${t("qty.more")}">+</button>
      </div>
      <div class="cart-item__sum">${formatPrice(p.price * q)}</div>
      <button class="cart-item__remove" type="button" data-act="remove" data-id="${p.id}" aria-label="${t("cart.remove", { name: tx.name })}">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>
      </button>
    </li>`;
  }).join("");

  // catalog prices include VAT: show the net amount and the 24% VAT that make up the total
  const { net, vat, gross } = vatSplit(cartTotal());
  document.getElementById("net").textContent = formatMoney(net);
  document.getElementById("vat").textContent = formatMoney(vat);
  document.getElementById("total").textContent = formatMoney(gross);

  // up to 4 plants that are not in the cart yet, styled like the catalog cards
  const ideas = PLANTS.filter((p) => !cartQty(p.id)).slice(0, 4);
  suggest.hidden = ideas.length === 0 || orderNo !== null;
  suggestGrid.innerHTML = ideas.map((p) => {
    const tx = pt(p);
    return `
    <article class="mini" style="background:${p.floor}">
      <img class="mini__img" src="${p.img}" alt="${t("plant.alt", { name: tx.name })}" loading="lazy" width="1122" height="1402">
      <div class="mini__body">
        <div>
          <h3>${tx.name}</h3>
          <span>${formatPrice(p.price)}</span>
        </div>
        <button class="mini__add" type="button" data-act="add" data-id="${p.id}" aria-label="${t("card.add", { name: tx.name })}">${CART_ICON}</button>
      </div>
    </article>`;
  }).join("");
}

function onAction(e) {
  const b = e.target.closest("[data-act]");
  if (!b) return;
  const p = plantById(b.dataset.id);
  const q = cartQty(p.id);
  if (b.dataset.act === "minus") cartSet(p.id, Math.max(1, q - 1));
  if (b.dataset.act === "plus") cartSet(p.id, q + 1);
  if (b.dataset.act === "remove") {
    cartSet(p.id, 0);
    showToast(t("toast.removed", { name: pt(p).name }));
  }
  if (b.dataset.act === "add") {
    cartSet(p.id, 1);
    showToast(t("toast.added", { name: pt(p).name }));
  }
}

list.addEventListener("click", onAction);
suggestGrid.addEventListener("click", onAction);

// ---- Checkout ----
attachPhoneMask(orderForm.elements.phone);

orderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const f = orderForm.elements;
  const status = orderForm.querySelector(".form__status");
  const checks = {
    name: f.name.value.trim().length >= 2,
    phone: isPhoneValid(f.phone.value),
    address: f.address.value.trim().length >= 5,
    email: !f.email.value.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.value.trim()),
  };
  Object.entries(checks).forEach(([name, ok]) => f[name].classList.toggle("is-invalid", !ok));
  const requiredOk = checks.name && checks.phone && checks.address;
  if (!requiredOk || !checks.email) {
    status.classList.add("is-error");
    status.textContent = t(requiredOk ? "cart.emailError" : "cart.error");
    return;
  }
  status.textContent = "";
  orderNo = String(Math.floor(100000 + Math.random() * 900000));
  orderForm.reset();
  cartClear();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("cartchange", render);
document.addEventListener("langchange", () => {
  orderForm.querySelector(".form__status").textContent = "";
  render();
});

render();
