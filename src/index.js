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
import node from "./assets/images/logos_node_js.svg";

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
let allKnowledgeCurrentlyLogos = [vue, node];
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
  contactGrid.append(...allContactLogos);
};

movingImagesLogo();
