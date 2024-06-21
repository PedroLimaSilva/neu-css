function toggleTheme() {
  document.body.classList.toggle('theme_dark');
  document.body.classList.toggle('theme_light');
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (e.matches) {
    document.body.classList.add('theme_dark');
    document.body.classList.remove('theme_light');
  } else {
    document.body.classList.add('theme_light');
    document.body.classList.remove('theme_dark');
  }
});

export function ThemeSwitcher() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('theme_dark');
  } else {
    document.body.classList.add('theme_light');
  }
  const themeButton = document.createElement('button');
  themeButton.onclick = toggleTheme;
  themeButton.innerHTML = 'Change theme';
  themeButton.className = 'button';
  return themeButton;
}
