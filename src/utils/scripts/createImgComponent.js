import {
  presentationIcons,
  allKnowledgeLogos,
  allKnowledgeCurrentlyLogos,
  contactLogos,
  jIcon,
  mxIcon,
} from "./iconData";

const imgMXFlag = document.querySelector(".presentation__container__mx__icon");
imgMXFlag.src = mxIcon.source;
imgMXFlag.alt = mxIcon.alt;

const presentationIconsContainer = document.querySelector(
  ".presentation__social__grid"
);
presentationIcons.forEach((presIcon) => {
  const presLink = document.createElement("a");
  const presImg = document.createElement("img");

  presLink.href = presIcon.href;
  presImg.src = presIcon.source;

  presLink.appendChild(presImg);
  presentationIconsContainer.appendChild(presLink);
});

const javiWhiteLogoContainer = document.querySelector(".header__logo");
javiWhiteLogoContainer.src = jIcon.source;

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

var link = document.querySelector("link[rel~='icon']");
if (!link) {
  link = document.createElement("link");
  link.rel = "icon";
  document.getElementsByTagName("head")[0].appendChild(link);
}
link.href = jIcon.source;

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
