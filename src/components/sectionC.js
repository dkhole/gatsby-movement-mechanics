import React from "react"
import card1 from "../img/card1.jpg"
import card2 from "../img/card2.jpg"
import card3 from "../img/card3.jpg"

export default function SectionC() {
  return (
    <section id="section-c" className="grid">
      <ul>
        <li>
          <div className="card">
            <img src={card1} alt="" />
            <div className="card-content">
              <h3 className="card-title">Old people</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
                repellendus hic culpa nesciunt, laboriosam cum esse soluta
                delectus reprehenderit ab!
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="card">
            <img src={card2} alt="" />
            <div className="card-content">
              <h3 className="card-title">White people</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
                repellendus hic culpa nesciunt, laboriosam cum esse soluta
                delectus reprehenderit ab!
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="card">
            <img src={card3} alt="" />
            <div className="card-content">
              <h3 className="card-title">Elbows</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
                repellendus hic culpa nesciunt, laboriosam cum esse soluta
                delectus reprehenderit ab!
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}
