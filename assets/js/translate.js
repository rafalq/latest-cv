// translate button
const translateButton = document.querySelector('.translate-button');
const switchTooltiptext = document.querySelector('.__lang__tooltip-text');

/*
  HTML ELEMNTS CONTAINS TEXT TO TRANSLATE
*/

// navbar
const linkTextAboutMe = document.querySelector('.__lang__link-text-about-me');
const linkTextResume = document.querySelector('.__lang__link-text-resume');
const linkTextSkills = document.querySelector('.__lang__link-text-skills');
const linkTextGithub = document.querySelector('.__lang__link-text-github');
const linkTextContact = document.querySelector('.__lang__link-text-contact');
const linkTextDownloadCV = document.querySelector(
  '.__lang__link-text-download-cv'
);
const linkTextCertificates = document.querySelector(
  '.__lang__link-text-certificates'
);
const linkTextThemify = document.querySelector('.__lang__link-text-themify');

// header
const myTitle = document.querySelector('.__lang__my-title');

// about me section
const sectionHeadingAboutMe = document.querySelector(
  '.__lang__section-heading-about-me'
);
const whatDoIDo = document.querySelector('.__lang__what-do-i-do');
const whatDoIDoContent = document.querySelector(
  '.__lang__what-do-i-do-content'
);
const howDoIDoIt = document.querySelector('.__lang__how-do-i-do-it');
const howDoIDoItContent = document.querySelector(
  '.__lang__how-do-i-do-it-content'
);
const whyHireMe = document.querySelector('.__lang__why-hire-me');
const whyHireMeContent = document.querySelector('.__lang__why-hire-me-content');

const interestsTitle = document.querySelector('.__lang__interests-title');
const literature = document.querySelector('.__lang__literature');
const literatureContent = document.querySelector('.__lang_literature-content');
const coding = document.querySelector('.__lang__coding');
const codingContent = document.querySelector('.__lang__coding-content');
const music = document.querySelector('.__lang__music');
const musicContent = document.querySelector('.__lang__music-content');
const crossfit = document.querySelector('.__lang__crossfit');
const crossfitContent = document.querySelector('.__lang__crossfit-content');

// resume section
const sectionHeadingResume = document.querySelector(
  '.__lang__section-heading-resume'
);
const education = document.querySelector('.__lang__education');
const politicalScience = document.querySelector('.__lang__political-science');
const politicalScienceContent = document.querySelector(
  '.__lang__political-science-content'
);
const philosophy = document.querySelector('.__lang__philosophy');
const philosophyContent = document.querySelector('.__lang__philosophy-content');
const javaDev = document.querySelector('.__lang__java-dev');
const javaDevContent = document.querySelector('.__lang__java-dev-content');
const fullstackWebDev = document.querySelector('.__lang__fullstack-web-dev');
const fullstackWebDevContent = document.querySelector(
  '.__lang__fullstack-web-dev-content'
);
const udemy = document.querySelector('.__lang__udemy');
const udemyContent = document.querySelector('.__lang__udemy-content');
const workHistory = document.querySelector('.__lang__work-history');
const radioBoss = document.querySelector('.__lang__radio-boss');
const radioBossContent = document.querySelector('.__lang__radio-boss-content');
const medtronic = document.querySelector('.__lang__medtronic');
const medtronicContent = document.querySelector('.__lang__medtronic-content');
const sectionHeadingSkills = document.querySelector(
  '.__lang__section-heading-skills'
);

const myGithub = document.querySelector('.__lang__my-github');
const myGithubContent1 = document.querySelector('.__lang__my-github-content-1');
const myGithubContent2 = document.querySelector('.__lang__my-github-content-2');

const sectionHeadingContact = document.querySelector(
  '.__lang__section-heading-contact'
);
const projectInMind = document.querySelector('.__lang__project-in-mind');
const projectInMindContent = document.querySelector(
  '.__lang__project-in-mind-content'
);
const sendReqButton = document.querySelector('.__lang__send-req');

const sectionHeadingCertificates = document.querySelector(
  '.__lang__section-heading-certificates'
);
const reactRedux = document.querySelector('.__lang__react-redux');
const go = document.querySelector('.__lang__go');
const goPractical = document.querySelector('.__lang__go-practical');
const mysqlBootcamp = document.querySelector('.__lang__mysql-bootcamp');
const java = document.querySelector('.__lang__java');
const softwareDev = document.querySelector('.__lang__software-dev');

/*
    DATA TO TRANSLATE
*/

const toTranslate = [
  // certificates
  {
    el: softwareDev,
    textPL: 'Dyplom programisty komputerowego',
    textENG: 'Software Developer Diploma',
  },

  { el: java, textPL: 'Podstawy Java', textENG: 'Java Foundations' },
  {
    el: mysqlBootcamp,
    textPL: 'Kurs MySql',
    textENG: 'MySql Bootcamp',
  },
  {
    el: goPractical,
    textPL: 'Golang Praktyczny Przewodnik',
    textENG: 'Golang The Practical Guide',
  },
  {
    el: go,
    textPL: 'Golang dla początkujących',
    textENG: 'Golang for Beginners',
  },
  {
    el: reactRedux,
    textPL: 'Współczesny React i Redux',
    textENG: 'Modern React and Redux',
  },

  {
    el: sectionHeadingCertificates,
    textPL: 'Certyfikaty',
    textENG: 'Certificates',
  },
  // contact
  {
    el: sendReqButton,
    textPL: 'Wyślij Pytanie',
    textENG: 'Send Project Request',
  },
  {
    el: projectInMindContent,
    textPL: 'Zróbmy to razem!',
    textENG: "Let's work together!",
  },
  {
    el: projectInMind,
    textPL: 'Zastanawiasz się nad jakimś projektem?',
    textENG: 'Got a project in mind?',
  },
  { el: sectionHeadingContact, textPL: 'Kontakt', textENG: 'Contact' },
  // github
  {
    el: myGithubContent2,
    textPL: 'Możesz także przejrzeć profile innych użytkowników ',
    textENG: 'You can also search on other user profiles',
  },
  {
    el: myGithubContent1,
    textPL: "Obejrzyj moje projekty na Github'ie",
    textENG: 'View My GitHub Projects',
  },
  // resume
  { el: myGithub, textPL: 'Mój Github', textENG: 'My Github' },
  { el: sectionHeadingSkills, textPL: 'Umiejętności', textENG: 'Skills' },
  {
    el: medtronicContent,
    textPL: 'Pracownik ogólny',
    textENG: 'General Operative',
  },
  {
    el: medtronic,
    textPL: 'Medtronic CardioVascular, Irlandia',
    textENG: 'Medtronic CardioVascular, Ireland',
  },
  {
    el: radioBossContent,
    textPL: 'Asystent dziennikarza radiowego',
    textENG: 'Radio Journalist Assistant',
  },
  {
    el: radioBoss,
    textPL: 'Radio "Boss", Płock',
    textENG: 'Radio "Boss", Poland',
  },
  {
    el: workHistory,
    textPL: 'Doświadczenie',
    textENG: 'Work History',
  },
  {
    el: udemyContent,
    textPL: 'Udemy, zdalnie',
    textENG: 'Udemy, online',
  },
  {
    el: udemy,
    textPL: 'Frontend | Backend | Linux | Github',
    textENG: 'Frontend | Backend | Linux | Github',
  },
  {
    el: fullstackWebDevContent,
    textPL: 'Code Institute, Irlandia',
    textENG: 'Code Institute, Ireland',
  },
  {
    el: fullstackWebDev,
    textPL: 'Programista Full Stack',
    textENG: 'Full Stack Web Developer',
  },
  {
    el: javaDevContent,
    textPL: 'ecollege, Irlandia',
    textENG: 'ecollege, Ireland',
  },
  {
    el: javaDev,
    textPL: 'Java Associate Developer SE 8',
    textENG: 'Java Associate Developer SE 8',
  },
  {
    el: philosophyContent,
    textPL: 'Uniwersytet im. Adama Mickiewicza, Poznań',
    textENG: 'Poznan University, Poland',
  },
  {
    el: philosophy,
    textPL: 'Filozofia',
    textENG: 'Philosophy',
  },
  {
    el: politicalScienceContent,
    textPL: 'Wyższa Szkoła im. Pawła Włodkowica, Płock',
    textENG: 'Pawel Wlodkowic College, Poland',
  },
  {
    el: politicalScience,
    textPL: 'Politologia',
    textENG: 'Political Science',
  },
  {
    el: education,
    textPL: 'Edukacja',
    textENG: 'Education',
  },
  {
    el: sectionHeadingResume,
    textPL: 'Życiorys',
    textENG: 'Resume',
  },
  // about me
  {
    el: crossfitContent,
    textPL: 'Od sztuk walki do odwożników kulowych.',
    textENG: 'From martial arts to kettlebells.',
  },
  {
    el: crossfit,
    textPL: 'Crossfit',
    textENG: 'Crossfit',
  },
  {
    el: musicContent,
    textPL:
      'Gdybym urodził się w innych okolicznościach byłbym profesjonalnym muzykiem.',
    textENG:
      'If I had been born under different circumstances, I would have been professional musician.',
  },
  {
    el: music,
    textPL: 'Muzyka',
    textENG: 'Music',
  },
  {
    el: codingContent,
    textPL:
      '80% mojego czasu spędzam na kodowaniu lub uczeniu się nowych rzeczy o programowaniu.',
    textENG:
      '80% of my time is spent coding or learning new things about programming.',
  },
  {
    el: coding,
    textPL: 'Kodowanie',
    textENG: 'Coding',
  },
  {
    el: literatureContent,
    textPL:
      'Kiedy tylko mam trochę wolnego czasu, lubię czytać filozofię. Kiedyś lubiłem książki fantasy i sf. W sumie nadal lubię.',
    textENG:
      'Whenever I have some free time, I like to read philosophy. I used to like fantasy and sf books. All in all, I still do.',
  },
  {
    el: literature,
    textPL: 'Literatura',
    textENG: 'Literature',
  },
  {
    el: interestsTitle,
    textPL: 'Zainteresowania',
    textENG: 'Interests',
  },
  {
    el: whyHireMeContent,
    textPL:
      'Jestem zawsze efektywny w tym, co robię. Lubię pracować w grupie i dobrze się czuję w entuzjastycznie nastawionych zespołach. Jestem też samoukiem i nie mam nic przeciwko pracy solo.',
    textENG:
      "I work effectively in getting things. I'm a keen team player who thrives in bright and enthusiastic teams and I'm also a self starter when working solo.",
  },
  {
    el: whyHireMe,
    textPL: 'Dlaczego mnie zatrudnić?',
    textENG: 'Why hire me?',
  },
  {
    el: howDoIDoItContent,
    textPL:
      'Kieruję się zarówno formą, jak i funkcjonalnością. Wiem, że estetyka efektywnego dizajn, połączonego z szybkością aplikacji, bezpieczeństwem i niezawodnością tworzą świetne wrażenia dla użytkownika.',
    textENG:
      'I follow form as well as function. I know that the aesthetics of effective design combined with application speed, security and reliability combine to create a great user experience.',
  },
  {
    el: howDoIDoIt,
    textPL: 'Jak to robię?',
    textENG: 'How do I do it?',
  },
  {
    el: whatDoIDoContent,
    textPL:
      'Jestem Programistą Full Stack z różnorodnymi zainteresowaniami i wielkim entuzjazmem, który wnoszę do każdego projektu.',
    textENG:
      "I'm a Full Stack Developer with diverse interests and great enthusiasm that I bring to every project.",
  },
  {
    el: whatDoIDo,
    textPL: 'Co robię?',
    textENG: 'What do I do?',
  },
  {
    el: sectionHeadingAboutMe,
    textPL: 'O Mnie',
    textENG: 'About Me',
  },
  // header
  {
    el: myTitle,
    textPL: 'Programista Full Stack',
    textENG: 'Full Stack Web Developer',
  },
  // navbar
  {
    el: linkTextCertificates,
    textPL: 'Certyfikaty',
    textENG: 'Certificates',
  },
  {
    el: linkTextAboutMe,
    textPL: 'O Mnie',
    textENG: 'About Me',
  },
  {
    el: linkTextResume,
    textPL: 'Źyciorys',
    textENG: 'Resume',
  },
  {
    el: linkTextSkills,
    textPL: 'Umiejętności',
    textENG: 'Skills',
  },
  {
    el: linkTextGithub,
    textPL: 'Github',
    textENG: 'Github',
  },
  {
    el: linkTextContact,
    textPL: 'Kontakt',
    textENG: 'Contact',
  },
  {
    el: linkTextDownloadCV,
    textPL: 'Pobierz CV',
    textENG: 'Download CV',
  },
  {
    el: linkTextThemify,
    textPL: 'Zmiana Tła',
    textENG: 'Themify',
  },
  // lang switch
  {
    el: switchTooltiptext,
    textPL: 'Przetłumacz na angielski',
    textENG: 'Translate into Polish',
  },
];

/*
    SET / TOGGLE LANGUAGES
*/

const defaultLang = 'pl';
const secondLang = 'eng';

const cvLink = document.getElementById('nav-link-cv');
const defaultLangCV = `assets/cv/cv-${defaultLang}.pdf`;
const secondLangCV = `assets/cv/cv-${secondLang}.pdf`;

if (!localStorage.getItem('lang')) {
  localStorage.setItem('lang', defaultLang);
}

if (localStorage.getItem('lang') === 'pl') {
  translateButton.click();
  changeLang('lang', 'pl', 'eng');
}

translateButton.addEventListener('click', () => {
  toggleLang('lang', 'pl', 'eng');
  changeLang('lang', 'pl', 'eng');
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
  const defaultLangObjKey = `text${defaultLang.toUpperCase()}`;
  const secondLangObjKey = `text${secondLang.toUpperCase()}`;

  if (lang === secondLang) {
    cvLink.setAttribute('href', secondLangCV);
    toTranslate.forEach(
      (item) => (item.el.textContent = item[secondLangObjKey])
    );
  } else if (lang === defaultLang) {
    cvLink.setAttribute('href', defaultLangCV);
    toTranslate.forEach((item) => {
      item.el.textContent = item[defaultLangObjKey];
    });
  }
}
