import batataB_source from "../../assets/images/project_batata_bit.png";
import frontendM_source from "../../assets/images/project_frontend_master.png";
import simonS_source from "../../assets/images/project_simon_says.png";
import cientifiko_source from "../../assets/images/project_cientifiko_page.png";

class ProjectCard {
  constructor(source, title, href) {
    this.source = source;
    this.title = title;
    this.href = href;
  }
}

const batataPC = new ProjectCard(
  batataB_source,
  "Batata Bit",
  "https://spidysamurai.github.io/Batata-bit/"
);
const frontPC = new ProjectCard(
  frontendM_source,
  "Landing Page",
  "https://spidysamurai.github.io/Landing_page/"
);
const simonSaysPC = new ProjectCard(
  simonS_source,
  "Simon Says",
  "https://spidysamurai.github.io/Simon_says/"
);
const cientifikoPC = new ProjectCard(
  cientifiko_source,
  "Cientifiko",
  "https://spidysamurai.github.io/cientifiko_spa/"
);

const projects = [batataPC, frontPC, simonSaysPC, cientifikoPC];

export { projects };
