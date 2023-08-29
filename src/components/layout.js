import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Header from './header'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
  } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div className={container}>
          <nav>
            <Header/>
            <ul className={navLinks}>
              <li className={navLinkItem}>
                <Link to="/" className={navLinkText}>
                  Home
                </Link>
              </li>
              <li className={navLinkItem}>
                <Link to="/my-component" className={navLinkText}>
                  About
                </Link>
              </li>
              <li className={navLinkItem}>
                <Link to="/gallery" className={navLinkText}>
                  Gallery
                </Link>
              </li>
              <li className={navLinkItem}>
                <Link to="/blog" className={navLinkText}>
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
          <main>
            <h1 className={heading}>{pageTitle}</h1>
            <h2>Site Title: {data.site.siteMetadata.title}</h2>
            {children}
          </main>
        </div>
      )
}

export default Layout