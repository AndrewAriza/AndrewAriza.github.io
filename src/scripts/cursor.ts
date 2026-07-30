// Custom cursor: small dot + lerped ring; ring grows on hoverable elements.
const HOVERABLE = "a, button, [data-cursor='hover'], .lang-toggle";

export function initCursor() {
  const dot = document.querySelector<HTMLElement>(".cursor-dot");
  const ring = document.querySelector<HTMLElement>(".cursor-ring");
  if (!dot || !ring || window.matchMedia("(hover: none)").matches) return;

  const s = { x: -100, y: -100, rx: -100, ry: -100, hover: false, text: false };

  const onMove = (e: MouseEvent) => {
    s.x = e.clientX;
    s.y = e.clientY;
    const t = e.target;
    if (!(t instanceof Element)) return;
    s.hover = !!t.closest(HOVERABLE);
    s.text = !!t.closest("[data-cursor='text']");
  };

  const tick = () => {
    s.rx += (s.x - s.rx) * 0.18;
    s.ry += (s.y - s.ry) * 0.18;
    dot.style.transform = `translate(${s.x}px, ${s.y}px) translate(-50%, -50%)`;
    ring.style.transform = `translate(${s.rx}px, ${s.ry}px) translate(-50%, -50%)`;
    ring.classList.toggle("is-hover", s.hover && !s.text);
    ring.classList.toggle("is-text", s.text);
    requestAnimationFrame(tick);
  };

  window.addEventListener("mousemove", onMove);
  requestAnimationFrame(tick);
}
