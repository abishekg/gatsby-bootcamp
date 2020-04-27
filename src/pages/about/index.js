import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return(<div>
    <h1>About</h1>
    <p>Bio for About Page</p>
    <p>Need a developer? <Link to='/contact'>Contact Me</Link> </p>
  </div>)
}

export default AboutPage;