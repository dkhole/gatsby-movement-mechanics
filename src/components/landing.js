import React from "react"
import { Controller, Scene } from "react-scrollmagic"
import { useMediaQuery } from "react-responsive"

export default function Landing() {
  const isMobileOrComp = useMediaQuery({
    query: "(min-width: 1000px)",
  })

  if (!isMobileOrComp) {
    return (
      <header id="landing" className="grid">
        <Controller>
          <Scene pin duration={100} triggerHook="onLeave">
            <div className="bg-image"></div>
          </Scene>
        </Controller>
        <div className="land-overlay"></div>
        <div className="content-wrap">
          <h1 className="title">Taking the focus away from pain</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            optio.
          </p>
          <a href="https://www.google.com/" className="btn">
            Book Now
          </a>
        </div>
      </header>
    )
  } else {
    return (
      <header id="landing" className="grid">
        <div className="bg-image"></div>
        <div className="land-overlay"></div>
        <div className="content-wrap">
          <h1 className="title">Taking the focus away from pain</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            optio.
          </p>
          <a href="https://www.google.com/" className="btn">
            Book Now
          </a>
        </div>
      </header>
    )
  }
}
