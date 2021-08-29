/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Navbar from "../Navbar"
import Footer from "../Footer"

import "./index.css"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'tippy.js/dist/tippy.css'; // optional
//import "../css/main.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout