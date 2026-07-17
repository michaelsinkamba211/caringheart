export const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600&display=swap');

    .fr-root, .fr-root * { font-family: 'Plus Jakarta Sans', sans-serif; }
    .fr-display { font-family: 'Fraunces', serif; }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(14px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @keyframes spin { to { transform: rotate(360deg); } }

    .anim-spin { animation: spin 0.75s linear infinite; }
    .fade-up  { animation: fadeUp 0.42s ease both; }

    .delay-1  { animation-delay: 0.07s; }
    .delay-2  { animation-delay: 0.14s; }
    .delay-3  { animation-delay: 0.21s; }
    .delay-4  { animation-delay: 0.28s; }
  `}</style>
);