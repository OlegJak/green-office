// Home page: catalog grid, plant detail dialog, contact form.

// ---- Catalog ----
// The first card is "featured": it spans 2×2 cells while no filter is applied (1 big + 6 small = 3×3 grid).
// An invisible button covers the whole card and opens the detail dialog;
// the round cart button sits above it and adds/removes the plant directly.
const grid = document.getElementById("plants");
let activeFilter = "all";
let catalogShown = false; // after the first reveal, re-renders (language switch) skip the animation

function renderCatalog() {
  grid.innerHTML = PLANTS.map((p, i) => {
    const tx = pt(p);
    return `
    <article class="plant reveal${catalogShown ? " is-visible" : ""}${i === 0 ? " plant--featured" : ""}" data-tags="${p.tags.join(" ")}" style="background:${p.floor}">
      <img class="plant__img" src="${p.img}" alt="${t("plant.alt", { name: tx.name })}" loading="lazy" width="1122" height="1402">
      ${p.badge ? `<span class="plant__tag">${t("badge." + p.badge)}</span>` : ""}
      <span class="plant__more" aria-hidden="true">${t("card.more")}</span>
      <div class="plant__body">
        <div>
          <h3>${tx.name}</h3>
          <small>${p.latin}</small>
          <div class="plant__price">${formatPrice(p.price)}</div>
        </div>
        <button class="plant__add${cartQty(p.id) ? " is-added" : ""}" type="button" data-id="${p.id}" aria-label="${t("card.add", { name: tx.name })}">${CART_ICON}</button>
      </div>
      <button class="plant__open" type="button" data-index="${i}" aria-label="${t("card.open", { name: tx.name })}"></button>
    </article>`;
  }).join("");
  applyFilter();
  if (!catalogShown) {
    observeReveal(grid);
    catalogShown = true;
  }
}

function applyFilter() {
  grid.classList.toggle("is-filtered", activeFilter !== "all");
  grid.querySelectorAll(".plant").forEach((card) => {
    card.classList.toggle("is-hidden", activeFilter !== "all" && !card.dataset.tags.split(" ").includes(activeFilter));
  });
}

document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((c) => c.classList.toggle("is-active", c === chip));
    activeFilter = chip.dataset.filter;
    applyFilter();
  });
});

grid.addEventListener("click", (e) => {
  const add = e.target.closest(".plant__add");
  if (add) {
    const p = plantById(add.dataset.id);
    const had = cartQty(p.id) > 0;
    cartSet(p.id, had ? 0 : 1);
    showToast(t(had ? "toast.removed" : "toast.added", { name: pt(p).name }));
    return;
  }
  const open = e.target.closest(".plant__open");
  if (open) openPlant(Number(open.dataset.index));
});

function syncCardButtons() {
  grid.querySelectorAll(".plant__add").forEach((b) => b.classList.toggle("is-added", cartQty(b.dataset.id) > 0));
}

// ---- Plant detail dialog ----
const dlg = document.getElementById("plantDialog");
let current = 0;
let qty = 1;

function renderDialog() {
  const p = PLANTS[current];
  const tx = pt(p);
  const inCart = cartQty(p.id);
  dlg.querySelector(".pd__media").style.background = p.floor;
  const img = dlg.querySelector(".pd__img");
  img.src = p.img;
  img.alt = t("plant.alt", { name: tx.name });
  const tag = dlg.querySelector(".pd__tag");
  tag.textContent = p.badge ? t("badge." + p.badge) : "";
  tag.hidden = !p.badge;
  dlg.querySelector(".pd__title").textContent = tx.name;
  dlg.querySelector(".pd__latin").textContent = p.latin;
  dlg.querySelector(".pd__about").textContent = tx.about;
  dlg.querySelector('[data-care="light"]').textContent = tx.light;
  dlg.querySelector('[data-care="water"]').textContent = tx.water;
  dlg.querySelector('[data-care="height"]').textContent = `${p.height} ${t("unit.cm")}`;
  dlg.querySelector('[data-care="level"]').textContent = tx.level;
  dlg.querySelector(".pd__price").textContent = formatPrice(p.price);
  dlg.querySelector("[data-qty]").textContent = qty;
  dlg.querySelector("[data-minus]").disabled = qty <= 1;
  dlg.querySelector("[data-buy]").innerHTML = `${CART_ICON}<span>${t(inCart ? "pd.update" : "pd.buy")} · ${formatPrice(p.price * qty)}</span>`;
  dlg.querySelector("[data-remove]").hidden = !inCart;
  dlg.querySelector(".pd__incart").textContent = inCart ? t("pd.inCart", { n: inCart }) : "";
  dlg.querySelector(".pd__counter").textContent = `${current + 1} / ${PLANTS.length}`;
}

function openPlant(i) {
  current = i;
  qty = cartQty(PLANTS[i].id) || 1;
  renderDialog();
  if (!dlg.open) {
    dlg.showModal();
    document.body.classList.add("no-scroll");
  }
}

const step = (dir) => openPlant((current + dir + PLANTS.length) % PLANTS.length);

dlg.addEventListener("click", (e) => {
  if (e.target === dlg) return dlg.close(); // click on the dimmed backdrop
  const b = e.target.closest("button");
  if (!b) return;
  const p = PLANTS[current];
  if (b.matches("[data-close]")) dlg.close();
  else if (b.matches("[data-prev]")) step(-1);
  else if (b.matches("[data-next]")) step(1);
  else if (b.matches("[data-minus]")) { qty = Math.max(1, qty - 1); renderDialog(); }
  else if (b.matches("[data-plus]")) { qty = Math.min(20, qty + 1); renderDialog(); }
  else if (b.matches("[data-buy]")) {
    cartSet(p.id, qty);
    showToast(t("toast.qty", { name: pt(p).name, n: qty }));
  } else if (b.matches("[data-remove]")) {
    cartSet(p.id, 0);
    qty = 1;
    showToast(t("toast.removed", { name: pt(p).name }));
  } else if (b.matches("[data-order]")) {
    if (!cartQty(p.id)) cartSet(p.id, qty);
    location.href = "cart.html";
  }
});

dlg.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") step(-1);
  if (e.key === "ArrowRight") step(1);
});

dlg.addEventListener("close", () => {
  document.body.classList.remove("no-scroll");
  grid.querySelector(`.plant__open[data-index="${current}"]`).focus({ preventScroll: true });
});

// ---- Contact section: short cart summary + form ----
const summary = document.getElementById("cartSummary");

function renderSummary() {
  const entries = cartEntries();
  summary.hidden = entries.length === 0;
  summary.innerHTML =
    entries.map(([p, q]) => `<li><span>${pt(p).name}${q > 1 ? ` × ${q}` : ""}</span><span>${formatPrice(p.price * q)}</span></li>`).join("") +
    `<li class="is-total"><span>${t("summary.total")}</span><span>${formatPrice(cartTotal())}</span></li>` +
    `<li class="cart-summary__link"><a href="cart.html">${t("contact.toCart")}</a></li>`;
}

const form = document.getElementById("form");
attachPhoneMask(form.elements.phone);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const status = form.querySelector(".form__status");
  const nameOk = form.elements.name.value.trim().length >= 2;
  const phoneOk = isPhoneValid(form.elements.phone.value);
  form.elements.name.classList.toggle("is-invalid", !nameOk);
  form.elements.phone.classList.toggle("is-invalid", !phoneOk);
  status.classList.toggle("is-error", !nameOk || !phoneOk);
  status.textContent = t(nameOk && phoneOk ? "form.ok" : "form.error");
  if (nameOk && phoneOk) form.reset();
});

document.querySelector(".video__play").addEventListener("click", () => showToast(t("toast.video")));

// ---- Wiring ----
document.addEventListener("cartchange", () => {
  syncCardButtons();
  renderSummary();
  if (dlg.open) renderDialog();
});

document.addEventListener("langchange", () => {
  renderCatalog();
  renderSummary();
  if (dlg.open) renderDialog();
  form.querySelector(".form__status").textContent = "";
});

renderCatalog();
renderSummary();
