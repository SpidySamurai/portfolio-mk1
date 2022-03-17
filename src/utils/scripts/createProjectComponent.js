import { projects } from "./projectData";

const createProjectCards = (containerName, projects) => {
  const containerPrincipal = document.querySelector(`.${containerName}`);
  const projectCards = [];
  projects.forEach((project) => {
    const projectContainer = document.createElement("div");
    projectContainer.className = "card__container";

    const projectLink = document.createElement("a");
    projectLink.href = project.hrefToPreview;

    const projectImg = document.createElement("img");
    projectImg.src = project.source;
    projectImg.alt = `${project.title} Image`;

    const projectTitle = document.createElement("h3");
    projectTitle.textContent = project.title;

    const projectParagraph = document.createElement("p");
    projectParagraph.textContent = project.description;

    const projectIconsContainer = document.createElement("div");
    projectIconsContainer.className = "card__container__icons";

    const projectIconsView = document.createElement("div");
    projectIconsView.className = "card__container__icons__view";
    const projectIconsTechnologies = document.createElement("div");
    projectIconsTechnologies.className = "card__container__icons__technologies";

    project.repoAndView.forEach((SourceIcon) => {
      const projectSourceLink = document.createElement("a");
      const projectSourceIcon = document.createElement("img");

      projectSourceLink.href = SourceIcon.href;

      projectSourceIcon.src = SourceIcon.source;
      projectSourceIcon.alt = SourceIcon.alt;

      projectSourceLink.appendChild(projectSourceIcon);
      projectIconsView.appendChild(projectSourceLink);
    });

    project.technologies.forEach((knowledgeIcon) => {
      console.log(knowledgeIcon);
      const projectKnowledgeIcon = document.createElement("img");

      projectKnowledgeIcon.src = knowledgeIcon.source;
      projectKnowledgeIcon.alt = knowledgeIcon.alt;

      projectIconsTechnologies.appendChild(projectKnowledgeIcon);
    });

    projectContainer.appendChild(projectLink);
    projectLink.appendChild(projectImg);

    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(projectParagraph);

    projectContainer.appendChild(projectIconsContainer);
    projectIconsContainer.appendChild(projectIconsView);
    projectIconsContainer.appendChild(projectIconsTechnologies);

    projectCards.push(projectContainer);
  });

  containerPrincipal.append(...projectCards);
};

createProjectCards("projects__container", projects);
