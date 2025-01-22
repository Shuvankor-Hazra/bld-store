"use client"
import React from "react"
import { MutableRefObject } from "react"
import {
    useKeenSlider,
    KeenSliderPlugin,
    KeenSliderInstance,
} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import slider1 from "../../assets/slide1.png";
import slider2 from "../../assets/slide2.jpg";
import slider3 from "../../assets/slide3.jpg";
import slider4 from "../../assets/slide4.jpg";
import slider5 from "../../assets/slide5.jpg";
import slider6 from "../../assets/slide6.jpg";
import slider7 from "../../assets/slide7.png";
import slider8 from "../../assets/slide8.jpg";
import Image from "next/image"

function ThumbnailPlugin(
    mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
    return (slider) => {
        function removeActive() {
            slider.slides.forEach((slide) => {
                slide.classList.remove("active")
            })
        }
        function addActive(idx: number) {
            slider.slides[idx].classList.add("active")
        }

        function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
                slide.addEventListener("click", () => {
                    if (mainRef.current) mainRef.current.moveToIdx(idx)
                })
            })
        }

        slider.on("created", () => {
            if (!mainRef.current) return
            addActive(slider.track.details.rel)
            addClickEvents()
            mainRef.current.on("animationStarted", (main) => {
                removeActive()
                const next = main.animator.targetIdx || 0
                addActive(main.track.absToRel(next))
                slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
            })
        })
    }
}

export default function Slider() {
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
    })
    const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
        {
            initial: 0,
            slides: {
                perView: 4,
                spacing: 10,
            },
        },
        [ThumbnailPlugin(instanceRef)]
    )

    return (
        <div className="mx-10">
            <div ref={sliderRef} className="keen-slider mb-3">
                <div className="keen-slider__slide number-slide1">
                    <Image src={slider1} alt="" />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <Image src={slider2} alt="" />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <Image src={slider3} alt="" />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <Image src={slider4} alt="" />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <Image src={slider5} alt="" />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <Image src={slider6} alt="" />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <Image src={slider7} alt="" />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <Image src={slider8} alt="" />
                </div>
            </div>

            <div ref={thumbnailRef} className="keen-slider thumbnail">
                <div className="keen-slider__slide number-slide1">
                    <Image src={slider1} alt="" />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <Image src={slider2} alt="" />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <Image src={slider3} alt="" />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <Image src={slider4} alt="" />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <Image src={slider5} alt="" />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <Image src={slider6} alt="" />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <Image src={slider7} alt="" />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <Image src={slider8} alt="" />
                </div>
            </div>
        </div>
    )
}