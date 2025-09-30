                                  /*   UTILS  */
const $ = sel => document.querySelector(sel);
const $$ = sel => [...document.querySelectorAll(sel)];

                                    /*     DARK/LIGHT THEME TOGGLE  */
(() => {
  const STORAGE_KEY = 'portfolio-theme';
  const btn = $('.theme-toggle');          
  const html = document.documentElement;

  function systemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function getTheme() {
    return localStorage.getItem(STORAGE_KEY) || systemTheme();
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  applyTheme(getTheme());

  btn.addEventListener('click', () => {
    const current = getTheme();
    const newTheme = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, newTheme);
    applyTheme(newTheme);
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem(STORAGE_KEY)) applyTheme(e.matches ? 'dark' : 'light');
  });
})();


                             /* AUTO-TYPE BANNER   */
(() => {
  const target = document.querySelector('#type-text');
  if (!target) return;

  const lines = [
    'Electronics & Computer Science Graduate',
    'Java • Python • Web-Developer • Spring Boot9 • SQL • NoSQL • Docker • Git • Linux • REST APIs • Agile • OOP • Data Structures & Algorithms • Problem Solving',
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let current = '';
  let isErasing = false;

  function loop() {
    const line = lines[lineIndex];

    if (!isErasing && charIndex < line.length) {
      // typing
      current += line[charIndex++];
      target.textContent = current;
      setTimeout(loop, 90);

    } else if (!isErasing && charIndex === line.length) {
      // pause at full line
      isErasing = true;
      setTimeout(loop, 1800);

    } else if (isErasing && charIndex > 0) {
      // erasing
      current = current.slice(0, -1);
      charIndex--;
      target.textContent = current;
      setTimeout(loop, 40);

    } else if (isErasing && charIndex === 0) {
      // finished erasing, move to next line
      isErasing = false;
      lineIndex = (lineIndex + 1) % lines.length;
      setTimeout(loop, 300);
    }
  }

  loop();
})();


                                     /* SCROLL-TO-TOP BUTTON   */
(() => {
  const btn = $('#scrollTop');            
  if (!btn) return;

  const show = () => btn.classList.toggle('visible', scrollY > 300);
  addEventListener('scroll', show);
  btn.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));
})();

                                      /* SMOOTH-SCROLL FOR Link*/
(() => {
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();

                                      /* ACTIVE NAV HIGHLIGHT  */
(() => {
  const sections = $$('section[id]');
  const navLinks = $$('nav a[href^="#"]');   

  const highlight = () => {
    let cur = '';
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top <= 80) cur = sec.id;
    });
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${cur}`));
  };
  addEventListener('scroll', highlight);
  highlight();
})();

                                    /* COPY-EMAIL TOAST   */
(() => {
  const mailLink = $('a[href^="mailto:"]');
  if (!mailLink) return;
  mailLink.addEventListener('click', async e => {
    e.preventDefault();                                   
    const email = mailLink.href.replace('mailto:', '');
    try {
      await navigator.clipboard.writeText(email);
      toast('📧 Email copied to clipboard!');
    } catch (_) {
      toast('⚠️ Could not copy email');
    }
  });
})();

                                      /* TOAST NOTIFIER   */
function toast(msg) {
  const container = $('#toast');
  if (!container) return;
  container.textContent = msg;
  container.classList.add('show');
  setTimeout(() => container.classList.remove('show'), 2000);
}

                                    /* CONSOLE SIGNATURE  */
console.log(
  '%c👋 Hi there!%c\nBuilt with ❤️ by Bilal Ahmad Shaikh\nGitHub: https://github.com/bilal-ahmad-shaikh ',
  'font-size:1.5rem;color:#0066ff;font-weight:bold;',
  'font-size:1rem;color:inherit;'
);


// Anti-Inspect basic 
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
  if (e.key === "F12" || 
     (e.ctrlKey && e.shiftKey && ["I","C","J"].includes(e.key.toUpperCase())) ||
     (e.ctrlKey && e.key.toUpperCase() === "U")) {
    e.preventDefault();
  }
});