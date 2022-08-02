import dndcms from "../../assets/dndcms.gif";
import apiSvg from "../../assets/projectApi.svg";
// import revComm from "../../assets/revComm.svg";
import npmPkg from "../../assets/npmPkg.svg";
import pim from "../../assets/pim.png";

export const projectData = [
  {
    imageSrc: dndcms,
    imgLg: true,
    content: {
      type: "Feature",
      title: "Drag-and-drop CMS",
      summary:
        "A drag-and-drop page builder that provides a no-code solution for building out content pages, blog post, and career pages. See what you are doing, when you're doing it, and publish in minutes not hours.",
      link: "https://revcommerce.com/",
      technologies: [
        "Next.js (SSR React)",
        "Typescript",
        "CSS/SCSS",
        "HTML D&D API",
        "Merce Shared Frontend Components",
      ],
    },
  },
  {
    imageSrc: apiSvg,
    content: {
      type: "Microservice / API",
      title: "Product Data Import Microservice",
      summary:
        "An API for importing product data into Rev/commerce. This API can be interacted with manually, via the Rev/commerce PIM importer UI, or it can be scheduled as part of a product information feed. With the legacy importer MS, product imports would take hours. After a re-archtecture of the service, tens of thousands of products can be add/updated within minutes.",
      link: "https://revcommerce.com/",
      technologies: ["Typescript", "Node.js", "Express.js", "MongoDB"],
    },
  },
  {
    imageSrc: pim,
    imgLg: true,
    alt: "Rev/commerce product",
    content: {
      type: "Feature",
      title: "Product Information Management System",
      summary:
        "A headless e-commerce solution that provides a drag-and-drop CMS, customizable PIM system, cart management & more. Geared towards enterprise-level e-commerce businesses with complex business requirements.",
      link: "https://revcommerce.com/",
      technologies: [
        "Next.js (SSR React)",
        "Typescript",
        "CSS/SCSS",
        "Node.js",
        "Express.js",
        "Strapi",
        "GraphQL",
        "MongoDB",
      ],
    },
  },

  {
    imageSrc: npmPkg,
    content: {
      type: "NPM Package",
      title: "Merce Shared Frontend Components",
      summary:
        "A library of customizable web frontend components. This package is shared between the Rev/commerce and the corresponding web frontends, allowing the frontends to seemlessly integrate with CMS.",
      link: "https://revcommerce.com/",
      technologies: ["React", "CSS/SCSS", "Rollup"],
    },
  },
  {
    imageSrc: apiSvg,
    content: {
      type: "Microservice / API",
      title: "My Account API",
      summary:
        'An API that provides all of the necessary endpoints for frontend developers to build out a customer dashboard (i.e. "My Account") experience. Some of those endpoints include: signup, login, get profile, update profile, set addresses (billing & shipping), verify email, forgot password, etc.',
      link: "https://revcommerce.com/",
      technologies: [
        "Typescript",
        "Node.js",
        "Fastify.js",
        "Firebase Auth",
        "Strapi",
        "MongoDB",
        "Jest",
      ],
    },
  },
];
