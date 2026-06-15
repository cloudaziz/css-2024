const lightModeBtn = document.querySelector(`[data-set-theme='light']`);
const darkModeBtn = document.querySelector(`[data-set-theme='dark']`);
const autoModeBtn = document.querySelector(`[data-set-theme='auto']`);
const html = document.documentElement;

const inputBtns = document.querySelectorAll('input');
// console.log(inputBtns);
// inputBtns.forEach((inputBtn) => {
//   console.log(inputBtn);
// });

inputBtns.forEach((inputBtn) => {
  inputBtn.addEventListener('click', (e) => {
    inputBtns.forEach((inputBtn) => {
      console.log(inputBtn.removeAttribute('checked'));
    });

    e.target.setAttribute('checked', 'checked');
  });
});

/*
const setTheme = (theme) => {
  // Clear all custom classes and attributes
  document.documentElement.removeAttribute('data-theme');

  if (theme === 'dark') {
    html.setAttribute('data-theme', 'dark');
  }

  localStorage.setItem('theme', theme);
};

const loadTheme = () => {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    setTheme(savedTheme);
  }
};

// Event listeners for theme buttons
lightModeBtn.addEventListener('click', () => setTheme('light'));
darkModeBtn.addEventListener('click', () => setTheme('dark'));
autoModeBtn.addEventListener('click', () => setTheme('auto'));
// darkModeBtn.addEventListener('click', () => setTheme('auto'));

// Load the theme when the page loads
// loadTheme();

// Source: https://codepen.io/sunkanmii-the-styleful/pen/MYgWyPr?editors=1010
