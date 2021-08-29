import React from "react"
import styles from "./index.module.css"
import links from "../../constants/links"
import socialIcons from "../../constants/social-icons"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerContent}>
          <div>
            <h4>Anastasia Technology LLC dba Anablock</h4>
            <div className={styles.copyright}>
              <p>
                1990 N. California Blvd <br />
                  Suite 20 <br />
                  Walnut Creek <br />
                  California 94596 <br />
              </p>
                Copyright &copy; {new Date().getFullYear()}, all rights reserved
              </div>

          </div>
          <div className={styles.links}>
            {links.map((item, index) => {
              return (
                <AniLink fade key={index} to={item.path}>
                  {item.text}
                </AniLink>
              )
            })}
          </div>
        </div>

        <div className={styles.icons}>
          {socialIcons.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
