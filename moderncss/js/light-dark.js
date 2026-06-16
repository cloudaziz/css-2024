/*
const lightModeBtn = document.querySelector(`[data-set-theme='light']`);
const darkModeBtn = document.querySelector(`[data-set-theme='dark']`);
const autoModeBtn = document.querySelector(`[data-set-theme='auto']`);
const html = document.documentElement;

const setTheme = (theme) => {
  // Clear all custom classes and attributes
  document.documentElement.removeAttribute('data-theme');

  if (theme === 'light') {
    html.setAttribute('data-theme', 'light');
    lightModeBtn.setAttribute('checked', 'checked');
  }
  if (theme === 'dark') {
    html.setAttribute('data-theme', 'dark');
    darkModeBtn.setAttribute('checked', 'checked');
  }

  if (theme === 'auto') {
    html.setAttribute('data-theme', 'auto');
    autoModeBtn.setAttribute('checked', 'checked');
  }

  localStorage.setItem('theme', theme);
};

const loadTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  console.log(savedTheme);

  if (savedTheme) {
    setTheme(savedTheme);
  }
};

// Event listeners for theme buttons
lightModeBtn.addEventListener('click', (e) => setTheme('light'));
darkModeBtn.addEventListener('click', (e) => setTheme('dark'));
autoModeBtn.addEventListener('click', (e) => setTheme('auto'));

// Load the theme when the page loads
loadTheme();

// Source: https://codepen.io/sunkanmii-the-styleful/pen/MYgWyPr?editors=1010
*/

/** =========== chatgpt code below=========== */
const html = document.documentElement;
const themeButtons = document.querySelectorAll('[data-set-theme]');

const setTheme = (theme) => {
  html.setAttribute('data-theme', theme);

  themeButtons.forEach((button) => {
    button.checked = button.dataset.setTheme === theme;
  });

  localStorage.setItem('theme', theme);
};

const loadTheme = () => {
  const savedTheme = localStorage.getItem('theme') || 'auto';
  setTheme(savedTheme);
};

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setTheme(button.dataset.setTheme);
  });
});

loadTheme();

/* 
Source: https://css-tricks.com/almanac/functions/l/light-dark/
*/
