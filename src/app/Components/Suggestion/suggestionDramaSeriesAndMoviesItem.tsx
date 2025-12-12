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
}

function SuggestionDramaSeriesAndMoviesItem() {
    const [seriesImage, setSeriesImage] = useState<IHomeSuggestion[]>([])
                const swiperRef = useRef<any>(null)
            
                useEffect(() => {
                    fetch("http://localhost:3001/genres")
                        .then((res) => res.json())
                        .then((data) => {
                            setSeriesImage(data.drama)
                        })
                }, [])
            
                const chunckSize = 5
                const slides = []
                for (let i = 0; i < seriesImage.length; i += chunckSize) {
                    slides.push(seriesImage.slice(i, i + chunckSize))
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
            
                if (seriesImage.length === 0) {
                    return <div className="text-center py-8">در حال بارگذاری...</div>}
  return (
         <section className='mt-10'>
                        <div className='flex justify-between items-center '>
                            <h2 className='mr-36 text-3xl'> فیلم و سریال های درام </h2>
                            <div className='ml-40 space-x-4'>
                                <button onClick={handlePrev}
                                    className=' text-red-600 text-5xl rounded-full border border-black bg-black w-15 h-15'> ‹ </button>
                                <button onClick={handleNext}
                                    className='next-btn text-red-600 text-5xl rounded-full border  border-black bg-black w-15 h-15'> ›  </button>
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
                                <img
                                  src={suggece.image_url}
                                  className='object-cover w-full h-full transition-transform duration-300 group-hover:scale-100'
                                  />
                                    <div className='absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 
                                    transition-opacity duration-300 flex flex-col justify-between p-4' >
            
                                        <h3><span className='text-xl text-red-600'> خلاصه داستان<br/></span> {suggece.plot_summary} </h3>
                                            <h4 className='mt-5'> <span className='text-lg text-red-600'>  رده سنی<br/></span> {suggece.age_rating} </h4>
                                            <h4 className='mb-20'> <span className='text-lg text-red-600'>  ژانر<br/></span> {suggece.genre} </h4>
                                    </div>
                                            </div>
                                        <div className='flex bg-neutral-800 px-20 py-1 rounded-lg'>
                                            <p className='ml-2'> {suggece.runtime} </p>
                                            <img src="/clock.png" width={10} height={10} />
            
                                            <p className='ml-2 mr-2' > {suggece.imdb_rating} </p>
                                            <img src="/imdb.png" width={10} height={10} />
            
                                        </div>
                                        <h2 className='mt-3'> {suggece.title} </h2>
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

export default SuggestionDramaSeriesAndMoviesItem