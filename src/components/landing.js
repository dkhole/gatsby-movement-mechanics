import React from "react"
import { Controller, Scene } from "react-scrollmagic"
//import { useBreakpoint } from 'gatsby-plugin-breakpoints';

export default function Landing() {
  //const breakpoints = useBreakpoint();

  if (true) {
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
