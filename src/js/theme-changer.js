
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  
  const refs = {
    button: document.querySelector('.js-theme-switch'),
    body: document.querySelector('body'),
  };
  console.log(refs.checkBox);

  const makeDark = () => {
    localStorage.setItem('Theme', Theme.DARK);
    refs.body.classList.add(Theme.DARK) & refs.body.classList.remove(Theme.LIGHT);
}

  const makeLight = () => {
    localStorage.setItem('Theme', Theme.LIGHT);
    refs.body.classList.add(Theme.LIGHT) & refs.body.classList.remove(Theme.DARK);
  }


const themeChanger = function ()  { 
    if (this.checked)  {
        makeDark()
    } else {
        makeLight();
    } };

    refs.button.addEventListener('change', themeChanger);

    
    const theme = localStorage.getItem('Theme');

    if ( theme.includes(Theme.DARK)) {
        refs.button.setAttribute('checked', 'true'); 
        makeDark()
    }