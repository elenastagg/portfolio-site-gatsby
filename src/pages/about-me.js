import React from "react"
import css3 from "../images/skills/css3.svg"
import expo from "../images/skills/expo.svg"
import github from "../images/skills/github.svg"
import html5 from "../images/skills/html5.svg"
import js from "../images/skills/javascript.svg"
import mysqlLogo from "../images/skills/mysql.svg"
import heroku from "../images/skills/heroku.svg"
import reactLogo from "../images/skills/react.svg"
import ruby from "../images/skills/ruby.svg"

import Layout from "../components/layout"
import SEO from "../components/seo"

const aboutMe = () => (
  <Layout>
    <SEO title="About me" />
    <h1 className="title">Software Engineer</h1>
    <p className="text">
      Hi. My name is Elena and I am a software engineer based in Manchester UK
      looking for a dev role. I learnt to code at{" "}
      <a href="https://manchestercodes.com/" style={{ color: `#39393a78` }}>
        Manchester Codes
      </a>{" "}
      (a part-time coding bootcamp) and have projects demonstrating both
      front-end and backend skills but I am most confident with front-end
      technologies like React, HTML & CSS.
    </p>
    <h2 className="second-title">Skills</h2>
    <div>
      <img className="skill" src={js} alt="js" />
      <img className="skill" src={reactLogo} alt="reactLogo" />
      <img className="skill" src={css3} alt="css3" />
      <img className="skill" src={html5} alt="html5" />
      <img className="skill" src={github} alt="github" />
      <img className="skill" src={heroku} alt="heroku" />
      <img className="skill" src={mysqlLogo} alt="mysqlLogo" />
      <img className="skill" src={ruby} alt="ruby" />
      <img className="skill" src={expo} alt="expo" />
    </div>
    <h3 className="third-title">The role I'm looking for</h3>
    <p className="text">
      I love learning and taking on challenges so mentorship and development
      opportunities are important to me in a role. I'm a team player and love
      working with a vibrant, sociable team but I'm also happy working
      autonomously - I'm an adventurer at heart (I spent the last year or so
      travelling the world) so a remote or part-remote opportunity appeals too.
    </p>
    <h3 className="third-title">My interests</h3>
    <p className="text">
      I like to spend my days playing with code but in my spare time I love
      learning spanish, hiking/going on adventures, yoga, watching films, and
      cooking for friends.
    </p>
  </Layout>
)

export default aboutMe
