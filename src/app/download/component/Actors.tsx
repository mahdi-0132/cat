"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Imdb from "@/public/imdb.png"
import Colck from "@/public/clock.png"
import "swiper/css"
import "swiper/css/navigation"


interface IHomeSuggestion {
    title: string
    imdb_rating: number
    runtime: string
    genre: string
    image_url: string
    plot_summary: string
    age_rating: string
    part : string
}

function Actors() {
    const [actorsImage, setActorsImage] = useState<IHomeSuggestion[]>([])
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
        if (swiperRef.current) {
            swiperRef.current.slidePrev()
        }
    }

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext()
        }
    }

    if (actorsImage.length === 0) {
        return <div className="text-center py-8">در حال بارگذاری...</div>
    }
    return (
        <section className='mt-10'>
            <div className='flex justify-between items-center '>
                <h2 className='mr-40 text-3xl'> فیلم و سریال های اکشن </h2>
                <div className='ml-40 space-x-4'>
                    <button onClick={handlePrev}
                        className=' text-red-600 text-5xl rounded-full border border-black bg-black w-15 h-15'> ‹ </button>
                    <button onClick={handleNext}
                        className='text-red-600 text-5xl rounded-full border border-black bg-black w-15 h-15'> ›  </button>
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
                    <SwiperSlide className='w-full mx-auto py-8' key={slidesIndex}>
                        <div className='px-40 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10'>
                            {group.map((suggece, index) => (
                                <div className='relative group flex flex-col items-center' key={index}>
                                    <div className='overflow-hidden relative w-full h-96 rounded-lg'>
                                        <div className='px-4 py-4 bg-black/50 rounded-2xl'>
                                            <img
                                                src={suggece.image_url}
                                                className='object-cover w-[700px] transition-transform duration-300 group-hover:scale-100'
                                            />
                                                <p className='flex justify-center mt-5'> {suggece.title} </p>
                                                <p className='flex justify-center font-medium text-sm text-gray-400/85'> {suggece.part} </p>
                                        </div>

                                    </div>


                                </div>
                            ))}
                        </div>

                    </SwiperSlide>

                ))}


            </Swiper>


            <div className=''>
                <button
                    className='px-4 py-1 flex items-center mx-auto border border-sky-500 rounded-lg text-sky-500 '>
                    <p>مشاهده بیشتر</p>
                    <span className='text-4xl mr-3'>›</span>
                </button>
            </div>

        </section>
    )
}

export default Actors