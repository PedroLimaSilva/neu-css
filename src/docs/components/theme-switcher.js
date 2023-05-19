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
  const links = document.getElementsByClassName('theme');
  // TODO: Stop assuming there are only 2 kids
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    const isDisabled = link.getAttribute('disabled') !== null;
    if (isDisabled) {
      link.removeAttribute('disabled');
    } else {
      link.setAttribute('disabled', '');
    }
  }
}
