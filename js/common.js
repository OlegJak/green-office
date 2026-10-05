// Shared by every page: cart store, header (language switch + cart badge), toast,
// Estonian phone mask, scroll reveal and stat counters.

// ---- Cart store: { plantId: quantity } persisted in localStorage ----
const CART_KEY = "greenoffice.cart";
let cartState = loadCart();

function loadCart() {
  try {
    const raw = JSON.parse(localStorage.getItem(CART_KEY)) || {};
    // drop ids that are no longer in the catalog
    return Object.fromEntries(Object.entries(raw).filter(([id, q]) => plantById(id) && q > 0));
  } catch {
    return {};
  }
}

function saveCart() {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cartState)); } catch {}
  document.dispatchEvent(new CustomEvent("cartchange"));
}

const cartQty = (id) => cartState[id] || 0;
const cartEntries = () => Object.entries(cartState).map(([id, q]) => [plantById(id), q]);
const cartCount = () => Object.values(cartState).reduce((s, q) => s + q, 0);
const cartTotal = () => cartEntries().reduce((s, [p, q]) => s + p.price * q, 0);

function cartSet(id, q) {
  q = Math.max(0, Math.min(99, q));
  if (q > 0) cartState[id] = q;
  else delete cartState[id];
  saveCart();
}

function cartClear() {
  cartState = {};
  saveCart();
}

// keep several open tabs in sync
window.addEventListener("storage", (e) => {
  if (e.key !== CART_KEY) return;
  cartState = loadCart();
  document.dispatchEvent(new CustomEvent("cartchange"));
});

const CART_ICON = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 9.5h19l-1.9 9.1a2 2 0 0 1-2 1.6H6.4a2 2 0 0 1-2-1.6L2.5 9.5Z"/><path d="M7.5 9.5 11 4M16.5 9.5 13 4"/></svg>`;

// ---- Mobile menu ----
// Full-screen glass sheet for phones, built from the header's own links and language switch,
// so each page keeps a single source of truth for its navigation.
const burger = document.querySelector(".burger");
const mnav = document.createElement("dialog");
mnav.className = "mnav";
mnav.id = "mnav";
mnav.innerHTML = `
  <div class="mnav__panel">
    <div class="mnav__top">
      ${document.querySelector(".brand").outerHTML}
      <button class="mnav__close" type="button" data-i18n-attr="aria-label:menu.close">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>
      </button>
    </div>
    <nav class="mnav__links">
      ${[...document.querySelectorAll(".header .nav a")].map((a) => `
        <a href="${a.getAttribute("href")}"><span data-i18n="${a.dataset.i18n}">${a.textContent}</span>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8.5 7H17v8.5"/></svg>
        </a>`).join("")}
    </nav>
    <div class="mnav__bottom">
      <a class="mnav__cart" href="cart.html">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 9.5h19l-1.9 9.1a2 2 0 0 1-2 1.6H6.4a2 2 0 0 1-2-1.6L2.5 9.5Z"/><path d="M7.5 9.5 11 4M16.5 9.5 13 4"/></svg>
        <span data-i18n="header.cart"></span>
        <span class="mnav__count"></span>
      </a>
      <div class="mnav__row">
        ${document.querySelector(".header .lang").outerHTML}
        <span class="mnav__region">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>
          <span data-i18n="header.region"></span>
        </span>
      </div>
    </div>
  </div>`;
document.body.append(mnav);

function closeMenu() {
  if (mnav.open) mnav.close();
}

burger.addEventListener("click", () => {
  mnav.showModal();
  burger.setAttribute("aria-expanded", "true");
  document.body.classList.add("no-scroll");
});

mnav.addEventListener("click", (e) => {
  if (e.target.closest(".mnav__close") || e.target.closest("a")) closeMenu();
});

mnav.addEventListener("close", () => {
  burger.setAttribute("aria-expanded", "false");
  document.body.classList.remove("no-scroll");
});

// the sheet is phone-only: close it if the window grows past the breakpoint
matchMedia("(min-width: 721px)").addEventListener("change", (e) => { if (e.matches) closeMenu(); });

// ---- Header ----
const cartLink = document.querySelector(".cart");
const cartBadge = document.querySelector(".cart__count");
const menuCount = mnav.querySelector(".mnav__count");

function renderCartBadge(bump) {
  const n = cartCount();
  cartBadge.textContent = n;
  cartBadge.hidden = n === 0;
  menuCount.textContent = n;
  menuCount.hidden = n === 0;
  if (bump) {
    cartLink.classList.remove("bump");
    void cartLink.offsetWidth;
    cartLink.classList.add("bump");
  }
}

document.addEventListener("cartchange", () => renderCartBadge(true));
document.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
document.querySelector(".city").addEventListener("click", () => showToast(t("toast.region")));

// ---- Toast ----
const toast = document.getElementById("toast");
let toastTimer;
function showToast(text) {
  toast.textContent = text;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

// ---- Estonian phone: +372 and 7–8 local digits, shown as "+372 5123 4567" ----
function attachPhoneMask(input) {
  input.addEventListener("input", () => {
    let d = input.value.replace(/\D/g, "");
    if (!d) { input.value = ""; return; }
    if (d.startsWith("372")) d = d.slice(3);
    d = d.slice(0, 8);
    input.value = "+372" + (d ? " " + d.slice(0, 4) : "") + (d.length > 4 ? " " + d.slice(4) : "");
  });
}

function isPhoneValid(value) {
  const local = value.replace(/\D/g, "").slice(3);
  return local.length >= 7 && local.length <= 8;
}

// ---- Reveal on scroll + counters ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    entry.target.querySelectorAll("[data-count]").forEach(countUp);
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.15 });

function observeReveal(root = document) {
  root.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => revealObserver.observe(el));
}

function countUp(el) {
  const target = Number(el.dataset.count);
  const start = performance.now();
  const dur = 1400;
  const tick = (now) => {
    const k = Math.min((now - start) / dur, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
    if (k < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

// ---- Boot ----
applyI18n();
renderCartBadge(false);
observeReveal();
