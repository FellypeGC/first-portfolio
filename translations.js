const translations = {
  en: {
    aboutLink: "About",
    skillsLink: "Skills",
    projectsLink: "Projects",
    contactLink: "Contact",
    homeTitle: "Front-End Developer",
    aboutTitle: "About Me",
    skillsTitle: "My skills",
    projectsTitle: "Projects",
    contactTitle: "Contact / GitHub",
    homeP1: "Hello, World! I'm Fellype.",
    homeP2: "As a Front-End Developer, I focus on learning and building software for Web Systems with responsive, intuitive, visually appealing user interfaces.",
    aboutP1: "Currently in Front-End applications development, planning to become a Full-Stack with a international career creating high-performance and efficient softwares for each platform.",
    aboutP2: "Highly interested in expanding my knowledge and working across a range of technologies including Desktop, Front-End, Back-End, Mobile and even Games, to solve complex problems continuously improving my skills.",
    aboutP3: "I'm also enrolled in a Technical Program in Systems Analysis and Development.",
    skillsP: "Technologies that I know and have also used",
    description1: "Landing page developed as a clone of the Reserva brand website, using HTML, CSS/SASS, and JavaScript. The project simulates sections such as product showcases, categories, and promotional highlights. Designed to replicate the visual and interactive experience of a fashion e-commerce site.",
    description2: "Responsive landing page for the Overmatch English course (Now, it's Phenom Idiomas), using HTML, CSS, and JavaScript. Includes sections such as registration form, testimonials, and location. Designed to promote private online and in-person classes in an accessible and modern way.",
    description3: "Landing page developed for the fictional pizzeria PizzaHash, using HTML, CSS, and JavaScript. The site features sections such as menu, promotions, and reviews. Designed to simulate a real gastronomic e-commerce experience.",
  },
  ptBr: {
    aboutLink: "Sobre",
    skillsLink: "Skills",
    projectsLink: "Projetos",
    contactLink: "Contato",
    homeTitle: "Desenvolvedor <br> Front-End",
    aboutTitle: "Sobre Mim",
    skillsTitle: "Minhas skills",
    projectsTitle: "Projetos",
    contactTitle: "Contato / GitHub",
    homeP1: "Olá, mundo! Eu sou o Fellype.",
    homeP2: "Como desenvolvedor Front-End, concentro-me em aprender e desenvolver software para Sistemas Web com interfaces de usuário responsivas, intuitivas e visualmente atraentes. ",
    aboutP1: "Atualmente atuando no desenvolvimento de aplicações Front-End, com planos de me tornar Full-Stack e seguir uma carreira internacional, criando softwares de alto desempenho e eficiência para cada plataforma.",
    aboutP2: "Tenho grande interesse em expandir meus conhecimentos e atuar em diversas tecnologias, incluindo Desktop, Front-End, Back-End, Dispositivos Móveis e até Jogos, buscando solucionar problemas complexos e aprimorar continuamente minhas habilidades.",
    aboutP3: "Além disso, estou cursando Análise e Desenvolvimento de Sistemas.",
    skillsP: "Tecnologias que eu tenho conhecimento e já usei",
    description1: "Landing page desenvolvida como clone do site da marca Reserva, utilizando HTML, CSS/SASS e JavaScript. O projeto simula seções como vitrines de produtos, categorias e destaques promocionais. Criado para reproduzir a experiência visual e interativa de um e-commerce de moda.",
    description2: "Landing page responsiva para o curso de inglês Overmatch (Agora, Phenom Idiomas), utilizando HTML, CSS e JavaScript. Inclui seções como formulário de inscrição, depoimentos e localização. Projetada para promover aulas particulares online e presenciais de forma acessível e moderna.",
    description3: "Landing page desenvolvida para a pizzaria fictícia PizzaHash, utilizando HTML, CSS e JavaScript. O site apresenta seções como menu, promoções e avaliações. Projetado para simular uma experiência real de e-commerce gastronômico.",
  }
}

const aboutLink = document.querySelector(".about-link");
const skillsLink = document.querySelector(".skills-link");
const projectsLink = document.querySelector(".projects-link");
const contactLink = document.querySelector(".contact-link");
const homeTitle = document.querySelector(".home-title");
const aboutTitle = document.querySelector(".about-title");
const skillsTitle = document.querySelector(".skills-title");
const projectsTitle = document.querySelector(".projects-title");
const contactTitle = document.querySelector(".contact-title");
const homeP1 = document.querySelector(".home-p1");
const homeP2 = document.querySelector(".home-p2");
const aboutP1 = document.querySelector(".about-p1");
const aboutP2 = document.querySelector(".about-p2");
const aboutP3 = document.querySelector(".about-p3");
const skillsP = document.querySelector(".skills-p");
const description1 = document.querySelector(".description1");
const description2 = document.querySelector(".description2");
const description3 = document.querySelector(".description3");
const languageSelector = document.querySelector("select");

languageSelector.addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

const setLanguage = (language) => {
  if (language == "en") {
    aboutLink.innerText = translations.en.aboutLink;
    skillsLink.innerText = translations.en.skillsLink;
    projectsLink.innerText = translations.en.projectsLink;
    contactLink.innerText = translations.en.contactLink;
    homeTitle.innerText = translations.en.homeTitle;
    aboutTitle.innerText = translations.en.aboutTitle;
    skillsTitle.innerText = translations.en.skillsTitle;
    projectsTitle.innerText = translations.en.projectsTitle;
    contactTitle.innerText = translations.en.contactTitle;
    homeP1.innerText = translations.en.homeP1;
    homeP2.innerText = translations.en.homeP2;
    aboutP1.innerText = translations.en.aboutP1;
    aboutP2.innerText = translations.en.aboutP2;
    aboutP3.innerText = translations.en.aboutP3;
    skillsP.innerText = translations.en.skillsP;
    description1.innerText = translations.en.description1;
    description2.innerText = translations.en.description2;
    description3.innerText = translations.en.description3;
  } else if (language == "pt-br") {
    aboutLink.innerText = translations.ptBr.aboutLink;
    skillsLink.innerText = translations.ptBr.skillsLink;
    projectsLink.innerText = translations.ptBr.projectsLink;
    contactLink.innerText = translations.ptBr.contactLink;
    homeTitle.innerHTML = translations.ptBr.homeTitle;
    aboutTitle.innerText = translations.ptBr.aboutTitle;
    skillsTitle.innerText = translations.ptBr.skillsTitle;
    projectsTitle.innerText = translations.ptBr.projectsTitle;
    contactTitle.innerText = translations.ptBr.contactTitle;
    homeP1.innerText = translations.ptBr.homeP1;
    homeP2.innerText = translations.ptBr.homeP2;
    aboutP1.innerText = translations.ptBr.aboutP1;
    aboutP2.innerText = translations.ptBr.aboutP2;
    aboutP3.innerText = translations.ptBr.aboutP3;
    skillsP.innerText = translations.ptBr.skillsP;
    description1.innerText = translations.ptBr.description1;
    description2.innerText = translations.ptBr.description2;
    description3.innerText = translations.ptBr.description3;
  }
}