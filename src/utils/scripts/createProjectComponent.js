import { projects } from "./projectData";

const createProjectCards = (containerName, projects) => {
  const containerPrincipal = document.querySelector(`.${containerName}`);
  const projectCards = [];
  projects.forEach((element) => {
    const projectContainer = document.createElement("div");
    projectContainer.className = "card__container";

    const projectImg = document.createElement("img");
    projectImg.src = element.source;
    projectImg.alt = `${element.title} Image`;
    const projectTitle = document.createElement("h3");
    projectTitle.textContent = element.title;

    projectContainer.append(projectImg, projectTitle);
    projectCards.push(projectContainer);
  });

  containerPrincipal.append(...projectCards);
};

createProjectCards("projects__container", projects);
