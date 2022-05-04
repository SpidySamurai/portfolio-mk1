import batataB_source from "../../assets/images/project_batata_bit.png";
import frontendM_source from "../../assets/images/project_frontend_master.png";
import simonS_source from "../../assets/images/project_simon_says.png";
import cientifiko_source from "../../assets/images/project_cientifiko_page.png";
import diseno_source from "../../assets/images/project_diseno.png";
import todoMachine_source from "../../assets/images/project_todomachine.png";
import pokemon_source from "../../assets/images/project_pokemon.png";

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

const batataPC = new ProjectCard(
  batataB_source,
  "Batata Bit",
  "https://spidysamurai.github.io/Batata-bit/",
  "https://github.com/SpidySamurai/Batata-bit",
  "CryptoCurrency Landing Page",
  repositoryAndViewIcon,
  [allKnowledgeLogos[0], allKnowledgeLogos[1]]
);
const frontPC = new ProjectCard(
  frontendM_source,
  "FrontEnd Mentor",
  "https://spidysamurai.github.io/Landing_page/",
  "https://github.com/SpidySamurai/Landing_page",
  "Landing page design",
  repositoryAndViewIcon,
  [allKnowledgeLogos[0], allKnowledgeLogos[1]]
);
const disenoPC = new ProjectCard(
  diseno_source,
  "Huddle",
  "https://spidysamurai.github.io/diseno_web/",
  "https://github.com/SpidySamurai/diseno_web",
  "Landing Page",
  repositoryAndViewIcon,
  [allKnowledgeLogos[0], allKnowledgeLogos[1]]
);
const simonSaysPC = new ProjectCard(
  simonS_source,
  "Simon Says",
  "https://spidysamurai.github.io/Simon_says/",
  "https://github.com/SpidySamurai/Simon_says",
  "Simon Says game made in JS Vanilla",
  repositoryAndViewIcon,
  [allKnowledgeLogos[0], allKnowledgeLogos[1], allKnowledgeLogos[3]]
);
const cientifikoPC = new ProjectCard(
  cientifiko_source,
  "100tifiko",
  "https://spidysamurai.github.io/cientifiko_spa/",
  "https://github.com/SpidySamurai/cientifiko_spa",
  "Single Page Application using Rick and Morty API",
  repositoryAndViewIcon,
  [allKnowledgeLogos[0], allKnowledgeLogos[1], allKnowledgeLogos[3]]
);
const todoMachine = new ProjectCard(
  todoMachine_source,
  "TODO List",
  "https://spidysamurai.github.io/react-to-do/",
  "https://github.com/SpidySamurai/react-to-do",
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
  "Pokedex using an Pokemon API, putting in practice React technical knowledge and API consume",
  repositoryAndViewIcon,
  [
    allKnowledgeLogos[0],
    allKnowledgeLogos[1],
    allKnowledgeLogos[3],
    allKnowledgeCurrentlyLogos[2],
  ]
);

const projects = [
  batataPC,
  frontPC,
  disenoPC,
  simonSaysPC,
  cientifikoPC,
  todoMachine,
  pokemonAPI,
];

export { projects };
