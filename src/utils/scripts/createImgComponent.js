import {
  allKnowledgeLogos,
  allKnowledgeCurrentlyLogos,
  contactLogos,
  javiPhoto,
} from "./iconData";

const javiPhotoContainer = document.querySelector(".about__content__img");
javiPhotoContainer.src = javiPhoto.source;
javiPhotoContainer.alt = javiPhoto.alt;

const createImageComponent = (containerName, arrayComponent) => {
  const container = document.querySelector(`.${containerName}`);
  const logos = [];
  arrayComponent.forEach((element) => {
    const imgIcon = document.createElement("img");
    imgIcon.src = element.source;
    imgIcon.alt = element.alt;
    imgIcon.width = "50";
    imgIcon.height = "50";
    logos.push(imgIcon);
  });
  container.append(...logos);
};

const createImageComponentWLink = (containerName, arrayComponent) => {
  const container = document.querySelector(`.${containerName}`);
  const logos = [];
  arrayComponent.forEach((element) => {
    const containerLink = document.createElement("a");
    containerLink.href = element.href;
    const imgIcon = document.createElement("img");
    imgIcon.src = element.source;
    imgIcon.alt = element.alt;
    imgIcon.width = "50";
    imgIcon.height = "50";
    containerLink.appendChild(imgIcon);
    logos.push(containerLink);
  });
  container.append(...logos);
};

createImageComponent(
  "about__knowledge__container__section__one__grid",
  allKnowledgeLogos
);
createImageComponent(
  "about__knowledge__container__section__two__grid",
  allKnowledgeCurrentlyLogos
);
createImageComponentWLink(
  "footer__contact__content__column__two__grid",
  contactLogos
);
