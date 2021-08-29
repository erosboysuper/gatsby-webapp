import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Tippy from "@tippyjs/react"
import "tippy.js/themes/light.css"
import "tippy.js/animations/shift-away.css"
import "tippy.js/animations/scale-subtle.css"
// styles is a custom name and it represents a javascript object
import styles from "./index.module.css"
import { FaAlignRight } from "react-icons/fa"
import links from "../../constants/links"
import logo from "../../images/awa-logo_secondary.svg"
// import { GoThreeBars } from "react-icons/go"

const Navbar = () => {
  const [isOpen, setNav] = useState()
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <AniLink to="/">
            <img src={logo} alt="anablock logo" />
          </AniLink>
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={`${isOpen
            ? `${styles.navLinks} ${styles.showNav}`
            : `${styles.navLinks}`
            }`}
        >
          {links.map((item, index) => {
            return item.submenus ? (
              <Tippy
                key={index}
                content={item.submenus?.map(menu => (
                  <AniLink key={menu.menu} to={menu.path} className={styles.tippyLink}>
                    <img src={`${menu.icon}`} />
                    {menu.menu}
                  </AniLink>
                ))}
                animation="scale-subtle"
                arrow={true}
                interactive={true}
                allowHTML={true}
                hideOnClick={true}
                theme="light"
                maxWidth={500}
              >
                <li className={styles.navLink}>
                  <AniLink fade to={item.path}>
                    {item.menu}
                  </AniLink>
                </li>
              </Tippy>
            ) : (
              <li
                key={index} className={styles.navLink}>
                <AniLink fade to={item.path}>
                  {item.menu}
                </AniLink>
              </li>
            )
          })}
          <li className={`${styles.navLink} ${styles.navLinkRegister}`}>
            <a
              href="https://anablock.force.com/customersupport/s/login/SelfRegister?locale=uk"
              className=""
            >
              Get Started
            </a>
          </li>
          <li className={styles.navLinkLast}>
            <a
              href="https://anablock.force.com/customersupport/s/"
              className="btn-primary--small"
            >
              Log in
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
