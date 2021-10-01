import "./styles/styles.scss";
import "./styles/styles.css";

import css from "./assets/images/logos_css-3.svg";
import html from "./assets/images/logos_html-5.svg";
import js from "./assets/images/logos_javascript.svg";
import git from "./assets/images/logos_git-icon.svg";
import github from "./assets/images/logos_github.svg";
import sass from "./assets/images/logos_sass.svg";
import figma from "./assets/images/logos_figma.svg";
import webpack from "./assets/images/logos_webpack.svg";
import travis from "./assets/images/logos_travis-ci.svg";

import vue from "./assets/images/logos_vue.svg";
import node_js from "./assets/images/logos_node_js.svg";

import fb from "./assets/images/logos_facebook.svg";
import linkedin from "./assets/images/logos_linkedin-icon.svg";

import javiPhoto from "./assets/images/profile_image.jpeg";

let allKnowledgeLogos = [
  css,
  html,
  js,
  git,
  github,
  sass,
  figma,
  webpack,
  travis,
];
let allKnowledgeCurrentlyLogos = [vue, node_js];
let contactLogos = [fb, linkedin, github];

const movingImagesLogo = () => {
  const javiPhotoContainer = document.querySelector(".about__content__img");
  javiPhotoContainer.src = `${javiPhoto}`;

  const knowledgeGrid = document.querySelector(
    ".about__knowledge__container__section__one__grid"
  );
  const allKLogos = [];
  allKnowledgeLogos.forEach((imgSource) => {
    const img = document.createElement("img");
    img.src = `${imgSource}`;
    allKLogos.push(img);
  });
  allKLogos[0].alt = `CSS 3 logo`;
  allKLogos[1].alt = `HTML 5 logo`;
  allKLogos[2].alt = `JavaScript logo`;
  allKLogos[3].alt = `Git logo`;
  allKLogos[4].alt = `Github logo`;
  allKLogos[5].alt = `Sass logo`;
  allKLogos[6].alt = `Figma logo`;
  allKLogos[7].alt = `Webpack logo`;
  allKLogos[8].alt = `TravisCI logo`;

  knowledgeGrid.append(...allKLogos);

  const knowledgeGridCurrently = document.querySelector(
    ".about__knowledge__container__section__two__grid"
  );
  const allKCLogos = [];
  allKnowledgeCurrentlyLogos.forEach((imgSource) => {
    const img = document.createElement("img");
    img.src = `${imgSource}`;
    allKCLogos.push(img);
  });

  allKCLogos[0].alt = `Vue logo`;
  allKCLogos[1].alt = `Node logo`;

  knowledgeGridCurrently.append(...allKCLogos);

  const contactGrid = document.querySelector(
    ".footer__contact__content__column__two__grid"
  );
  const allContactLogos = [];
  contactLogos.forEach((imgSource) => {
    const img = document.createElement("img");
    img.src = `${imgSource}`;
    allContactLogos.push(img);
  });

  allContactLogos[0].alt = `Facebook logo`;
  allContactLogos[1].alt = `Linkedin logo`;
  allContactLogos[2].alt = `Github logo`;

  contactGrid.append(...allContactLogos);
};

movingImagesLogo();
