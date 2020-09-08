import { Link } from "gatsby"
import React from "react"
import logo from "../images/logo.png"

import "./header.css"

const Header = () => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <h1 style={{ textAlign: `center` }}>
      <Link className="nav-item" to={`/about-me/`}>
        ABOUT ME
      </Link>
      <Link className="nav-item" to={`/`}>
        <img
          src={logo}
          alt="Logo"
          style={{ width: `5rem`, verticalAlign: `middle` }}
        />
      </Link>
      <Link className="nav-item" to={`/contact/`}>
        CONTACT
      </Link>
    </h1>
  </header>
)

export default Header
