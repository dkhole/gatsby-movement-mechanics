import React from "react"
import { Controller, Scene } from "react-scrollmagic"
import { useMediaQuery } from "react-responsive"

export default function SectionA() {
  const isMobileOrComp = useMediaQuery({
    query: "(min-width: 1000px)",
  })

  if (!isMobileOrComp) {
    //mobile
    return (
      <section id="section-a" className="grid">
        <div className="content-wrap">
          <Controller>
            <Scene triggerElement="#section-a" offset="-200px">
              <div id="scene-wrap">
                <h2 className="content-title">Our Goal</h2>
                <div className="content-text">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                    consectetur illo sunt dolore est incidunt voluptatibus
                    inventore sit accusamus numquam adipisci corporis impedit
                    laboriosam deserunt, atque sed tempore velit eaque. Neque
                    eveniet ea impedit error quisquam. Excepturi sunt dolorum
                    officiis?
                  </p>
                </div>
              </div>
            </Scene>
          </Controller>
        </div>
      </section>
    )
  } else {
    //comp
    return (
      <section id="section-a" className="grid">
        <div className="content-wrap">
          <div id="scene-wrap">
            <h2 className="content-title">Our Goal</h2>
            <div className="content-text">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                consectetur illo sunt dolore est incidunt voluptatibus inventore
                sit accusamus numquam adipisci corporis impedit laboriosam
                deserunt, atque sed tempore velit eaque. Neque eveniet ea
                impedit error quisquam. Excepturi sunt dolorum officiis?
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
