// import React from "react"
//import { Link } from "gatsby"

import atlas from "../images/icons/atlas.svg";
import billing from "../images/icons/billing.svg";
import climate from "../images/icons/climate.svg";
import connect from "../images/icons/connect.svg";
import invoicing from "../images/icons/invoicing.svg";
import issuing from "../images/icons/issuing.svg";
import product from "../images/icons/product.svg";
import radar from "../images/icons/radar.svg";
import sigma from "../images/icons/sigma.svg";
import terminal from "../images/icons/terminal.svg";

export default [
  {
    path: "/services",
    menu: "services",
    submenus: [{
      menu: "sales cloud",
      path: "/sales-cloud",
      icon: atlas,
    }, {
      menu: "service cloud",
      path: "/service-cloud",
      icon: billing,
    }, {
      menu: "heroku",
      path: "/heroku",
      icon: climate,
    }, {
      menu: "experience cloud",
      path: "/experience-cloud",
      icon: connect,
    }, {
      menu: "marketing cloud",
      path: "/marketing-cloud",
      icon: invoicing,
    }, {
      menu: "system integration",
      path: "/system-integration",
      icon: issuing,
    }]
  },
  {
    path: "/company",
    menu: "company",
    submenus: [{
      menu: "about",
      path: "/about",
      icon: product,
    }, {
      menu: "contact",
      path: "/contact",
      icon: radar,
    }, {
      menu: "careers",
      path: "/careers",
      icon: sigma,
    }, {
      menu: "newsletter",
      path: "/newsletter",
      icon: terminal,
    },]
  },
  {
    path: "/blog",
    menu: "blog",
  },
  // {
  //   path: "/projects",
  //   menu: "projects"
  // },
  {
    path: "/portfolio",
    menu: "portfolio"
  },
  {
    path: "/podcast",
    menu: "podcast"
  },
  {
    path: "/apps",
    menu: "apps"
  },
  {
    path: "/integrators",
    menu: "integrators"
  },
]
