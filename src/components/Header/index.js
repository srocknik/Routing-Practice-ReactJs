// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <ul className="list-container">
    <li className="logo-list-item-container">
      <img
        className="logo-image"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
        alt="wave"
      />
      <p className="tab-text">Wave</p>
    </li>
    <li className="info-container">
      <Link className="tab-text" to="/">
        Home
      </Link>
      <Link className="tab-text" to="/about">
        About
      </Link>
      <Link className="tab-text" to="contact">
        Contact
      </Link>
    </li>
  </ul>
)

export default Header
