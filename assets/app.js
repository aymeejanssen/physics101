function bootFieldCanvas(canvas) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let width = 0;
  let height = 0;
  let points = [];

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    points = Array.from({ length: Math.min(110, Math.floor(width / 12)) }, (_, index) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - .5) * .18,
      vy: (Math.random() - .5) * .18,
      phase: index * .29
    }));
  }

  function draw(time = 0) {
    ctx.clearRect(0, 0, width, height);
    const t = time * .001;

    const background = ctx.createLinearGradient(0, 0, width, height);
    background.addColorStop(0, "#080b11");
    background.addColorStop(.42, "#10212b");
    background.addColorStop(1, "#17101e");
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < 9; i += 1) {
      ctx.beginPath();
      const radius = 80 + i * 35 + Math.sin(t + i) * 9;
      ctx.ellipse(width * .68, height * .46, radius * 1.6, radius * .42, i * .23 + t * .08, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${i % 3 === 0 ? "45,212,191" : i % 3 === 1 ? "243,201,105" : "155,140,255"}, ${.18 - i * .011})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    points.forEach((point) => {
      point.x += point.vx;
      point.y += point.vy;
      if (point.x < -10) point.x = width + 10;
      if (point.x > width + 10) point.x = -10;
      if (point.y < -10) point.y = height + 10;
      if (point.y > height + 10) point.y = -10;
      const pulse = .6 + Math.sin(t * 2 + point.phase) * .4;
      ctx.beginPath();
      ctx.arc(point.x, point.y, 1.2 + pulse * 1.8, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(247,244,234,${.24 + pulse * .28})`;
      ctx.fill();
    });

    points.forEach((a, index) => {
      for (let j = index + 1; j < points.length; j += 1) {
        const b = points[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 118) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(99,179,255,${(1 - distance / 118) * .15})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    });

    if (!prefersReduced) requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener("resize", resize);
}

function bootTabs() {
  document.querySelectorAll("[data-panel-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.closest("[data-panel-group]");
      if (!group) return;
      group.querySelectorAll("[data-panel-target]").forEach((item) => item.classList.remove("active"));
      group.querySelectorAll("[data-panel]").forEach((panel) => panel.hidden = true);
      button.classList.add("active");
      const panel = group.querySelector(`[data-panel="${button.dataset.panelTarget}"]`);
      if (panel) panel.hidden = false;
    });
  });
}

function bootCopyButtons() {
  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const target = document.querySelector(button.dataset.copy);
      if (!target) return;
      try {
        await navigator.clipboard.writeText(target.textContent.trim());
        const original = button.textContent;
        button.textContent = "Copied";
        setTimeout(() => { button.textContent = original; }, 1200);
      } catch {
        button.textContent = "Select text";
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  bootFieldCanvas(document.querySelector(".field-canvas"));
  bootTabs();
  bootCopyButtons();
});
