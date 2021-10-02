import batataB_source from "../../assets/images/project_batata_bit.png";
import frontendM_source from "../../assets/images/project_frontend_master.png";
import simonS_source from "../../assets/images/project_simon_says.png";
import cientifiko_source from "../../assets/images/project_cientifiko_page.png";

class ProjectCard {
  constructor(source, title, alt) {
    this.source = source;
    this.title = title;
    // this.alt
  }
}

const batataPC = new ProjectCard(batataB_source, "Batata Bit");
const frontPC = new ProjectCard(frontendM_source, "Landing Page");
const simonSaysPC = new ProjectCard(simonS_source, "Simon Says");
const cientifikoPC = new ProjectCard(cientifiko_source, "Cientifiko");

const projects = [batataPC, frontPC, simonSaysPC, cientifikoPC];

export { projects };
