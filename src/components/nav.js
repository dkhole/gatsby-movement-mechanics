import React from "react"
import { Link } from "gatsby"

export default function Nav() {
  return (
    <div id="nav">
      <img src="" alt="" />
      <div id="logo-place">Movement Mechanics</div>
      <div id="hamburger">
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <div id="ham-links">
          <Link className="page-link" to="/home/">
            Home
          </Link>
          <Link className="page-link" to="/physiotherapy/">
            Physiotherapy
          </Link>
          <Link className="page-link" to="/chiropractor/">
            Chiropractor
          </Link>
          <Link className="page-link" to="/contact/">
            Contact
          </Link>
        </div>
      </div>

      <div id="nav-links">
        <Link className="page-link" id="link-1" to="/home/">
          Home
        </Link>
        <Link className="page-link" id="link-2" to="/physiotherapy/">
          Physiotherapy
        </Link>
        <Link className="page-link" id="link-3" to="/chiropractor/">
          Chiropractor
        </Link>
        <Link className="page-link" id="link-4" to="/contact/">
          Contact
        </Link>
        <hr />
      </div>
    </div>
  )
}
