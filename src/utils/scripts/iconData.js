import repositoryBlueSecondary from "../../assets/images/logos_github_secondary.svg";
import linkedinPresentation from "../../assets/images/logos_linkedin_secondary.svg";
import whatsappPresentation from "../../assets/images/logos_whatsapp_preview.svg";

import view from "../../assets/images/logos_view_card.svg";
import repositoryDarkPrimary from "../../assets/images/logos_github_card.svg";

import css from "../../assets/images/logos_css-3.svg";
import html from "../../assets/images/logos_html-5.svg";
import js from "../../assets/images/logos_javascript.svg";
import git from "../../assets/images/logos_git-icon.svg";
import github from "../../assets/images/logos_github.svg";
import sass from "../../assets/images/logos_sass.svg";
import figma from "../../assets/images/logos_figma.svg";
import webpack from "../../assets/images/logos_webpack.svg";
import travis from "../../assets/images/logos_travis-ci.svg";

import vue from "../../assets/images/logos_vue.svg";
import mongoDB from "../../assets/images/logos_mongoDB.svg";
import expresJS from "../../assets/images/logos_expressJS.svg";
import react from "../../assets/images/logos_react.svg";
import node_js from "../../assets/images/logos_node_js.svg";

import fb from "../../assets/images/logos_facebook.svg";
import linkedin from "../../assets/images/logos_linkedin-icon.svg";

import javiWhiteLogo from "../../assets/images/javi_white_logo.svg";

import mxFlag from "../../assets/images/logos_mx.svg";

class Icon {
  constructor(source, alt, href) {
    this.source = source;
    this.alt = alt;
    this.href = href;
  }
}

const repoSecondary = new Icon(
  repositoryBlueSecondary,
  "Github Blue Logo",
  "https://github.com/SpidySamurai"
);
const linkedinPres = new Icon(
  linkedinPresentation,
  "Linkedin Logo",
  "https://www.linkedin.com/in/javier-fernando-chi-ortiz/"
);
const whatsappPres = new Icon(
  whatsappPresentation,
  "Whatsapp Logo",
  "#"
);

let presentationIcons = [repoSecondary, linkedinPres, whatsappPres];

const viewIcon = new Icon(view, "View Icon");
const repositoryIcon = new Icon(
  repositoryDarkPrimary,
  "Github Repository Icon"
);

let repositoryAndViewIcon = [repositoryIcon, viewIcon];

const mxIcon = new Icon(mxFlag, "Circle Mexican Flag");
const jIcon = new Icon(javiWhiteLogo, "Javier's Logo");
const css3Icon = new Icon(css, "CSS 3 Logo");
const html5Icon = new Icon(html, "HTML 5 Logo");
const jsIcon = new Icon(js, "JavaScript Logo");
const gitIcon = new Icon(git, "Git Logo");
const githubIcon = new Icon(
  github,
  "Github Logo",
  "https://github.com/SpidySamurai"
);
const sassIcon = new Icon(sass, "Sass Logo");
const figmaIcon = new Icon(figma, "Figma Logo");
const webpackIcon = new Icon(webpack, "Webpack Logo");
const travisIcon = new Icon(travis, "Travis Logo");

let allKnowledgeLogos = [
  html5Icon,
  css3Icon,
  sassIcon,
  jsIcon,
  figmaIcon,
  gitIcon,
  githubIcon,
  webpackIcon,
  travisIcon,
];

const mongoIcon = new Icon(mongoDB);
const expressIcon = new Icon(expresJS);
const reactIcon = new Icon(react);
const nodeIcon = new Icon(node_js, "Node Logo");
const vueIcon = new Icon(vue, "VUE Logo");

let allKnowledgeCurrentlyLogos = [mongoIcon, expressIcon, reactIcon, nodeIcon];

const fbIcon = new Icon(
  fb,
  "Facebook Logo",
  "#"
);
const linkedinIcon = new Icon(
  linkedin,
  "LinkedIn Logo",
  "https://www.linkedin.com/in/javier-fernando-chi-ortiz/"
);

let contactLogos = [fbIcon, linkedinIcon, githubIcon];


export {
  presentationIcons,
  repositoryAndViewIcon,
  allKnowledgeLogos,
  allKnowledgeCurrentlyLogos,
  contactLogos,
  jIcon,
  mxIcon,
};
