import React from "react"
import { Link } from "gatsby"

const Header = () => {
  console.log('>>>>> CALLED');
  return (
    <header>
      <h1>Abishek G</h1>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;