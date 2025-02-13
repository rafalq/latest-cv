// translate button
const translateButton = document.querySelector('.translate-button');
const switchTooltiptext = document.querySelector('.__lang__tooltip-text');

/*
    SET / TOGGLE LANGUAGES
*/

const DEFAULT_LANG = 'en';
const SECOND_LANG = 'pl';

const cvLinks = document.querySelectorAll('a.nav-link-cv');
console.log('cvLinks', cvLinks)
const defaultLangCV = `assets/cv/cv-${DEFAULT_LANG}.pdf`;
const secondLangCV = `assets/cv/cv-${SECOND_LANG}.pdf`;

const langTagColl = document.getElementsByTagName('lang');

if (!localStorage.getItem('lang')) {
  localStorage.setItem('lang', DEFAULT_LANG);
}

if (localStorage.getItem('lang') === 'pl') {
  translateButton.click();
  changeLang('lang', 'pl', 'en');
}

translateButton.addEventListener('click', () => {
  toggleLang('lang', 'pl', 'en');
  changeLang('lang', 'pl', 'en');
});

function toggleLang(localStorageKey, defaultLang, secondLang) {
  const current = localStorage.getItem(localStorageKey);

  if (current === secondLang) {
    localStorage.setItem(localStorageKey, defaultLang);
    return;
  }
  localStorage.setItem(localStorageKey, secondLang);
  return;
}

function changeLang(localStorageKey, defaultLang, secondLang) {
  let lang = localStorage.getItem(localStorageKey);

  if (lang === secondLang) {
    console.log('secondLang', secondLang)  
    cvLinks.forEach(link => {
        link.setAttribute('href', defaultLangCV)
        console.log('second lang link', link)
    });

    for (let el of langTagColl) {
      for (let obj of data) {
        if (
          el.textContent.replace(/\n|\r|\W/g, '') ===
          obj[defaultLang].replace(/\n|\r|\W/g, '')
        ) {
          el.textContent = obj[secondLang];
        }
      }
    }
  } else if (lang === defaultLang) {

    console.log('defaultLang', defaultLang)
    cvLinks.forEach(link => {
        link.setAttribute('href', secondLangCV)
        console.log('default lang link', link)
    });
    
    for (let el of langTagColl) {
      for (let obj of data) {
        if (
          el.textContent.replace(/\n|\r|\W/g, '') ===
          obj[secondLang].replace(/\n|\r|\W/g, '')
        ) {
          el.textContent = obj[defaultLang];
        }
      }
    }
  }
}
