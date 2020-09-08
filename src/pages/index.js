import React from "react"
import digiDino from "../images/projects/digi-dino.png"
import signUp from "../images/projects/sign-up.png"
import top100 from "../images/projects/top-100-movies.png"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="title">Elena Stagg</h1>
    <p className="text">
      Welcome to my portfolio website. Please take a look at my projects and get
      in touch
    </p>

    <div className="portfolio-grid">
      <img className="portfolio-item" src={digiDino} alt="digiDino" />
      <img className="portfolio-item" src={signUp} alt="signUp" />
      <img className="portfolio-item" src={top100} alt="top100" />
      {/*<div>
        <a
          className="portfolio-links"
          target="blank"
          href="https://www.youtube.com/watch?v=T7HiXr8PJTY&feature=youtu.be"
        >
          DEMO VID
        </a>
        {"  "}/{" "}
        <a
          className="portfolio-links"
          target="blank"
          href="https://github.com/elenastagg/digi-dino"
        >
          CODE
        </a>
      </div>
      <div>
        <a
          className="portfolio-links"
          target="blank"
          href="https://frontend-mentor-signup-form-challenge.now.sh/"
        >
          LIVE
        </a>
        {"  "}/{" "}
        <a
          className="portfolio-links"
          target="blank"
          href="https://github.com/elenastagg/frontend-mentor-challenges/tree/master/intro-component-with-signup-form-master"
        >
          CODE
        </a>
      </div>
      <div>
        <a
          className="portfolio-links"
          target="blank"
          href="https://top-100-movies-app.now.sh/#/signup"
        >
          LIVE
        </a>
        {"  "}/{" "}
        <a
          className="portfolio-links"
          href="https://github.com/elenastagg/movies-api"
        >
          API CODE
        </a>
        {"  "}/{" "}
        <a
          className="portfolio-links"
          target="blank"
          href="https://github.com/elenastagg/top-100-movies-app"
        >
          FRONT-END CODE
        </a>
      </div>*/}
    </div>
  </Layout>
)

export default IndexPage
