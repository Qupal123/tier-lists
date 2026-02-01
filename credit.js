/* ===============================
   Lapizxx logo — big + gradient
================================ */

document.addEventListener('DOMContentLoaded', () => {
  const tierlist = document.getElementById('tierlist');
  if (!tierlist) return;

  // убрать старые версии
  document.querySelectorAll('#credit, #lapizxx-watermark, #lapizxx-logo')
    .forEach(e => e.remove());

  const logo = document.createElement('div');
  logo.id = 'lapizxx-logo';

  logo.innerHTML = `
    <div class="pixels">
      <span></span><span></span><span></span>
      <span></span><span></span><span></span>
    </div>
    <div class="name">Lapizxx</div>
  `;

  /* === контейнер === */
  Object.assign(logo.style, {
    position: 'absolute',
    top: '10px',
    right: '14px',

    display: 'flex',
    alignItems: 'center',
    gap: '10px',

    padding: '10px 14px',
    borderRadius: '12px',

    background: 'rgba(15,15,22,0.65)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',

    border: '1px solid rgba(255,255,255,0.18)',
    boxShadow: '0 6px 20px rgba(0,0,0,0.45)',

    pointerEvents: 'none',
    userSelect: 'none',
    zIndex: '10'
  });

  /* === пиксели === */
  const pixels = logo.querySelector('.pixels');
  Object.assign(pixels.style, {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 8px)',
    gridTemplateRows: 'repeat(2, 8px)',
    gap: '3px'
  });

  const colors = [
    '#ff7a7a', '#ffb36b', '#ffe066',
    '#8bffb0', '#7fd1ff', '#b28bff'
  ];

  pixels.querySelectorAll('span').forEach((s, i) => {
    Object.assign(s.style, {
      width: '8px',
      height: '8px',
      borderRadius: '3px',
      background: colors[i],
      boxShadow: `0 0 8px ${colors[i]}`
    });
  });

  /* === текст с переливом === */
  const name = logo.querySelector('.name');
  Object.assign(name.style, {
    fontFamily: 'system-ui, -apple-system, Segoe UI, Arial, sans-serif',
    fontSize: '20px',
    fontWeight: '900',
    letterSpacing: '0.06em',

    background:
      'linear-gradient(120deg, #ffffff, #bfa9ff, #7fd1ff, #ffffff)',
    backgroundSize: '300% 300%',

    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',

    animation: 'lapizGradient 4s ease-in-out infinite'
  });

  /* === анимация градиента === */
  const style = document.createElement('style');
  style.textContent = `
    @keyframes lapizGradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `;
  document.head.appendChild(style);

  // чтобы попал в PNG
  if (getComputedStyle(tierlist).position === 'static') {
    tierlist.style.position = 'relative';
  }

  tierlist.appendChild(logo);
});
