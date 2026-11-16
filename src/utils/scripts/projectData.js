import batataB_source from "../../assets/images/project_batata_bit.png";
import frontendM_source from "../../assets/images/project_frontend_master.png";
import simonS_source from "../../assets/images/project_simon_says.png";
import cientifiko_source from "../../assets/images/project_cientifiko_page.png";
import diseno_source from "../../assets/images/project_diseno.png";
import todoMachine_source from "../../assets/images/project_todomachine.png";
import pokemon_source from "../../assets/images/project_pokemon.png";
import cat_source from "../../assets/images/project_cats_api_consume.png";

import {
  repositoryAndViewIcon,
  allKnowledgeLogos,
  allKnowledgeCurrentlyLogos,
} from "./iconData";
class ProjectCard {
  constructor(
    sourceImg,
    title,
    hrefToPreview,
    hrefToRepository,
    description,
    repoAndView,
    technologies
  ) {
    this.source = sourceImg;
    this.title = title;
    this.hrefToPreview = hrefToPreview;
    this.hrefToRepository = hrefToRepository;
    this.description = description;
    this.repoAndView = repoAndView;
    this.technologies = technologies;

    repositoryAndViewIcon[0].href = hrefToRepository;
    repositoryAndViewIcon[1].href = hrefToPreview;
  }
}

const frontPC = new ProjectCard(
  frontendM_source,
  "FrontEnd Mentor",
  "https://spidysamurai.github.io/Landing_page/",
  "https://github.com/SpidySamurai/Landing_page",
  "FrontEnd Mentor landing page made with HTML, CSS putting in practice semantic layout and basic css knowledge with flex and classes.",
  repositoryAndViewIcon,
  [allKnowledgeLogos[0], allKnowledgeLogos[1]]
);

const disenoPC = new ProjectCard(
  diseno_source,
  "Huddle",
  "https://spidysamurai.github.io/Huddle_Landing_Page_Excercise/",
  "https://github.com/SpidySamurai/Huddle_Landing_Page_Excercise",
  "Huddle Landing page made in collaboration with partners from BrightCoders Academy, putting in practice semantinc layout, intermediate CSS.",
  repositoryAndViewIcon,
  [allKnowledgeLogos[0], allKnowledgeLogos[1]]
);
const batataPC = new ProjectCard(
  batataB_source,
  "Batata Bit",
  "https://spidysamurai.github.io/Batata-bit/",
  "https://github.com/SpidySamurai/Batata-bit",
  "CryptoCurrency Landing Page made with HTML, CSS, from the professional HTML/CSS course from Platzi reinforcing basic and intermediate knowledge as FrontEnd.",
  repositoryAndViewIcon,
  [allKnowledgeLogos[0], allKnowledgeLogos[1]]
);
const simonSaysPC = new ProjectCard(
  simonS_source,
  "Simon Says",
  "https://spidysamurai.github.io/Simon_says/",
  "https://github.com/SpidySamurai/Simon_says",
  "The famous Simon say game made with JS Vanilla with the JavaScript course from Platzi, improving the basic understanding of scripting and sequences.",
  repositoryAndViewIcon,
  [allKnowledgeLogos[0], allKnowledgeLogos[1], allKnowledgeLogos[3]]
);
const cientifikoPC = new ProjectCard(
  cientifiko_source,
  "Rick and Morty SPA",
  "https://spidysamurai.github.io/SPA_rick_and_morty/",
  "https://github.com/SpidySamurai/SPA_rick_and_morty",
  "Single Page Application using Rick and Morty API, consuming the public API an generating dynamic routes with JS Vanilla.",
  repositoryAndViewIcon,
  [allKnowledgeLogos[0], allKnowledgeLogos[1], allKnowledgeLogos[3]]
);
const todoMachine = new ProjectCard(
  todoMachine_source,
  "TODO List",
  "https://spidysamurai.github.io/React-To-Do/",
  "https://github.com/SpidySamurai/React-To-Do",
  "TODO List App using React putting into practice knowledge such as managing state, effects, and context, applying render patterns and component composition.",
  repositoryAndViewIcon,
  [
    allKnowledgeLogos[0],
    allKnowledgeLogos[1],
    allKnowledgeLogos[3],
    allKnowledgeCurrentlyLogos[2],
  ]
);

const pokemonAPI = new ProjectCard(
  pokemon_source,
  "Pokedex with Pokeapi.co",
  "https://spidysamurai.github.io/react-cura-deuda/",
  "https://github.com/SpidySamurai/react-cura-deuda",
  "Pokedex using an Pokemon API, putting in practice React technical as States/Effect applytin render pattern with componen composition and API consume",
  repositoryAndViewIcon,
  [
    allKnowledgeLogos[0],
    allKnowledgeLogos[1],
    allKnowledgeLogos[3],
    allKnowledgeCurrentlyLogos[2],
  ]
);

const catAPIConsume = new ProjectCard(
  cat_source,
  "Cat API Consume",
  "https://spidysamurai.github.io/Kittys_api_consuming/",
  "https://github.com/SpidySamurai/Kittys_api_consuming",
  "This is a small project using fetch with async await to get some random cats ando our favorite ones, also the possibility to mark them as favorites, delete them and upload a cat photo using POST method",
  repositoryAndViewIcon,
  [allKnowledgeLogos[0], allKnowledgeLogos[1], allKnowledgeLogos[3]]
);

const projects = [
  frontPC,
  disenoPC,
  batataPC,
  simonSaysPC,
  cientifikoPC,
  catAPIConsume,
  todoMachine,
  pokemonAPI,
];

export { projects };
