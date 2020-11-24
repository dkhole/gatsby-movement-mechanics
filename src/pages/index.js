import React, { useEffect } from "react"
import Nav from "../components/nav"
import Landing from "../components/landing"
import SectionA from "../components/sectionA"
import SectionB from "../components/sectionB"
import SectionC from "../components/sectionC"
import SectionD from "../components/sectionD"
import Footer from "../components/footer"
//import { useBreakpoint } from 'gatsby-plugin-breakpoints';

export default function Home() {
  //const breakpoints = useBreakpoint();

  useEffect(() => {
    const snap = document.getElementById("snap-overlay")

    function onScroll() {
      if (snap.scrollTop === 0) {
        //scroll window to 0
        const scrollToTop = () => {
          const c = document.documentElement.scrollTop
          if (c > 0) {
            window.requestAnimationFrame(scrollToTop)
            window.scrollTo(0, c - c / 8)
          }
        }
        scrollToTop()
      }
    }

    snap.addEventListener("scroll", onScroll)
  }, [])

  if (true) {
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
  } else {
    return (
      <div id="home-wrap">
        <Nav />
        <Landing />
        <SectionA />
        <SectionB />
        <SectionC />
        <SectionD />
        <Footer />
      </div>
    )
  }
}
