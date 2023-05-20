export class ThemeSwitcher {
  constructor() {
    const themeButton = document.createElement('button');
    themeButton.onclick = toggleTheme;
    themeButton.innerHTML = 'Change theme';
    themeButton.className = 'button';
    document.getElementById('nav').append(themeButton);
  }
}

function toggleTheme() {
  const links = document.body.classList.toggle('theme_dark');
}
