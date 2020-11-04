import React from "react"

export default function SectionB() {
  return (
    <section id="section-b" className="grid">
      <div className="physio">
        <div className="physio-image"></div>

        <h1 className="section-b-title">Physiotherapy</h1>
        <p className="section-b-subtitle">
          with <span className="section-b-name">vegetable yu</span>
        </p>
        <p className="section-b-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
          consequuntur nostrum atque libero corrupti ipsum doloremque fugiat
          itaque iure.
        </p>
        <a id="physio-btn" href="#section-b">
          Book Now
        </a>
      </div>
      <div className="chiro">
        <div className="chiro-image"></div>
        <h1 className="section-b-title">Chiropractor</h1>
        <p className="section-b-subtitle">
          with <span className="section-b-name">minty fresh</span>
        </p>
        <p className="section-b-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fugit
          quas modi aliquam aspernatur inventore at magnam ullam tempore nam?
        </p>
        <a id="chiro-btn" href="#section-b">
          Book Now
        </a>
      </div>
    </section>
  )
}
