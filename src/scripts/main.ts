import { initCursor } from "./cursor";
import { initReveal } from "./reveal";

// nav gets a blurred backdrop past the fold
function initNav() {
  const nav = document.querySelector<HTMLElement>(".nav");
  if (!nav) return;
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 32);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initLoader() {
  setTimeout(() => document.getElementById("loader")?.classList.add("is-out"), 700);
}

initNav();
initCursor();
initReveal();
initLoader();
