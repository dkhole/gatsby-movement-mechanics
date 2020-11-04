import React from "react"
import { Controller, Scene } from "react-scrollmagic"

export default function Landing() {
  return (
    <header id="landing" className="grid">
      <Controller>
        <Scene pin duration={250} triggerHook="onLeave">
          <div className="bg-image"></div>
        </Scene>
      </Controller>
      <div className="land-overlay"></div>
      <div className="content-wrap">
        <h1 className="title">Taking the focus away from pain</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, optio.
        </p>
        <a href="#section-a" className="btn">
          Read More
        </a>
      </div>
    </header>
  )
}
