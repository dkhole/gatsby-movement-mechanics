import React from "react"
import { Link } from "gatsby"

export default function Nav() {
  function mouseEnter(e) {
    for (let i = 0; i < 4; i++) {
      if (e.target.parentNode.children[i].id !== e.target.id) {
        e.target.parentNode.children[i].style.color = "black"
      }
    }
  }

  function mouseLeave(e) {
    for (let i = 0; i < 4; i++) {
      if (e.target.parentNode.children[i].id !== e.target.id) {
        e.target.parentNode.children[i].style.color = "white"
      }
    }
  }

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
        <Link
          className="page-link"
          id="link-1"
          to="/home/"
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          Home
        </Link>
        <Link
          className="page-link"
          id="link-2"
          to="/physiotherapy/"
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          Physiotherapy
        </Link>
        <Link
          className="page-link"
          id="link-3"
          to="/chiropractor/"
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          Chiropractor
        </Link>
        <Link
          className="page-link"
          id="link-4"
          to="/contact/"
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          Contact
        </Link>
        <hr />
      </div>
    </div>
  )
}
