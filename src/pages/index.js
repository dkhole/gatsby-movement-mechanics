import React, { useEffect } from "react"
import Nav from "../components/nav"
import Landing from "../components/landing"
import SectionA from "../components/sectionA"
import SectionB from "../components/sectionB"
import SectionC from "../components/sectionC"
import SectionD from "../components/sectionD"
import Footer from "../components/footer"

export default function Home() {
  /*useEffect(() => {
    const nav = document.getElementById("nav")
    const logo = document.getElementById("logo-place")
    const hamburger = document.getElementById("hamburger")

    function onScroll() {
      if (document.documentElement.scrollTop > 50) {
        nav.style.boxShadow = "0px 1px 10px black"
        nav.style.height = "60px"
        nav.style.lineHeight = "60px"
        logo.style.top = "15px"
        hamburger.style.paddingTop = "20px"
        hamburger.children[0].top = "7px"
      } else {
        nav.style.boxShadow = ""
        nav.style.height = "80px"
        nav.style.lineHeight = "80px"
        logo.style.top = "27px"
        hamburger.style.paddingTop = "30px"
        hamburger.children[0].top = "21px"
      }
    }

    window.addEventListener("scroll", onScroll)
  }, [])*/

  return (
    <div id="home-wrap">
      <Nav />
      <div id="snap-overlay">
        <Landing />
        <SectionA />
      </div>
      <SectionB />
      <SectionC />
      <SectionD />
      <Footer />
    </div>
  )
}
