"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Imdb from "@/public/imdb.png"
import Colck from "@/public/clock.png"
import "swiper/css"
import "swiper/css/navigation"

interface Acotors {
    image_url: string
    part: string
    name: string
}

function Actors() {
    const [actorsImage, setActorsImage] = useState<Acotors[]>([])
    const swiperRef = useRef<any>(null)

    useEffect(() => {
        fetch("http://localhost:3001/actors")
            .then((res) => res.json())
            .then((data) => {
                setActorsImage(data.actorsimg)
            })
    }, [])

    const chunckSize = 5
    const slides = []
    for (let i = 0; i < actorsImage.length; i += chunckSize) {
        slides.push(actorsImage.slice(i, i + chunckSize))
    }

    const handlePrev = () => {
        if (swiperRef.current) swiperRef.current.slidePrev()
    }

    const handleNext = () => {
        if (swiperRef.current) swiperRef.current.slideNext()
    }

    if (actorsImage.length === 0) {
        return <div className="text-center py-8">در حال بارگذاری...</div>
    }

    return (
        <section className="mt-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-4 sm:px-10 lg:px-40">
                <h2 className="text-xl sm:text-2xl md:text-3xl">
                    بازیگران
                </h2>

                <div className="flex gap-3">
                    <button
                        onClick={handlePrev}
                        className="text-red-600 text-3xl sm:text-4xl rounded-full border border-black bg-black w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
                    >
                        ‹
                    </button>
                    <button
                        onClick={handleNext}
                        className="text-red-600 text-3xl sm:text-4xl rounded-full border border-black bg-black w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
                    >
                        ›
                    </button>
                </div>
            </div>

            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                loop={true}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper
                }}
            >
                {slides.map((group, slidesIndex) => (
                    <SwiperSlide className="w-full mx-auto py-8" key={slidesIndex}>
                        <div className="px-4 sm:px-10 lg:px-40 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
                            {group.map((suggece, index) => (
                                <div
                                    className="relative group flex flex-col items-center"
                                    key={index}
                                >
                                    <div className="overflow-hidden relative w-full rounded-lg">
                                        <div className="px-3 py-3 sm:px-4 sm:py-4 bg-black/50 rounded-2xl h-full flex flex-col">
                                            <img
                                                src={suggece.image_url}
                                                className="w-full h-full object-cover rounded-lg  duration-300"
                                            />

                                            <p className="flex justify-center mt-4 text-sm sm:text-base">
                                                {suggece.name}
                                            </p>
                                            <p className="flex justify-center font-medium text-xs sm:text-sm text-gray-400/85">
                                                {suggece.part}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        
            <div className="mt-6">
                <button className="px-4 py-2 flex items-center mx-auto border border-sky-500 rounded-lg text-sky-500 text-sm sm:text-base">
                    <p>مشاهده بیشتر</p>
                    <span className="text-2xl sm:text-3xl mr-2">›</span>
                </button>
            </div>
        </section>
    )
}

export default Actors
