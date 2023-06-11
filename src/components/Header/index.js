import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <div className="ed-co">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          className="image-icon"
          alt="wave"
        />
        <h1 className="blog-title">wave</h1>
      </div>
      <ul className="nav-menu">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
