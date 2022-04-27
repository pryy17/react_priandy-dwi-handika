import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import CardMenu from "./CardMenu"

export default function CardSlider() {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 1000px)": {
        slides: { perView: 5, spacing: 10 },
      },
    },
    slides: { perView: 5 },
  })

  return (
    <div style={{ width: "90%" }}>
        <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide">
                <CardMenu />
            </div>
            <div className="keen-slider__slide">
                <CardMenu />
            </div>
            <div className="keen-slider__slide">
                <CardMenu />
            </div>
            <div className="keen-slider__slide">
                <CardMenu />
            </div>
            <div className="keen-slider__slide">
                <CardMenu />
            </div>
            <div className="keen-slider__slide">
                <CardMenu />
            </div>
        </div>
    </div>
  )
}
