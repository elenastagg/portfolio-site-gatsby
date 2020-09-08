import React from "react"
import envelope from "../images/contact/envelop.svg"
import twitter from "../images/contact/twitter.svg"
import linkedin from "../images/contact/linkedin.svg"
import github from "../images/skills/github.svg"

import Layout from "../components/layout"
import SEO from "../components/seo"

const contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h1 className="title">Get in Touch</h1>
    <p className="text">
      If you're interested in my skills and want to have a chat, feel free to
      get in touch.
    </p>
    <div className="contact-grid">
      <div>
        <a href="mailto:elenagracestagg@hotmail.co.uk">
          <img className="contact-grid-item" src={envelope} alt="envelope" />
        </a>
      </div>
      <div>
        <a href="https://github.com/elenastagg">
          <img className="contact-grid-item" src={github} alt="github" />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/elenastagg/">
          <img className="contact-grid-item" src={linkedin} alt="linkedin" />
        </a>
      </div>
      <div>
        <a href="https://twitter.com/ElenaStagg">
          <img className="contact-grid-item" src={twitter} alt="twitter" />
        </a>
      </div>
      <div className="contact-grid-item contact-text">
        elenagracestagg@hotmail.co.uk
      </div>
      <div className="contact-grid-item contact-text">elenastagg</div>
      <div className="contact-grid-item contact-text">elenastagg</div>
      <div className="contact-grid-item contact-text">@elenastagg</div>
    </div>
  </Layout>
)

export default contact
