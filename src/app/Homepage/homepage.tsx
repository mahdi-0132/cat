"use client"
import { useEffect, useRef, useState } from 'react'
import Imdb from "@/public/imdb.webp"
import Colck from "@/public/icons8-clock-24.png"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation ,Autoplay } from 'swiper/modules'
import "swiper/css"

interface IHome {
    title: string
    imdb_rating: number
    runtime: string
    genre: string
    image_url: string
    plot_summary: string
    age_rating: string
}

function Homepage() {

    const [data, setData] = useState<IHome[]>([]);
    const swipwerRef = useRef<any>(null);
    const [activeIndext , setActiveIndext] = useState(0);


    useEffect(() => {
        fetch("http://localhost:3001/sliders")
            .then((res) => res.json())
            .then((d) => setData(d.slider_1_new_releases)
            )
    }, []);

    if (!data.length) return <p className='font-bold text-white'> درحال بارگذاری...</p>

    return (
        <div className=' relative w-full h-[800px] overflow-hidden'>
            <Swiper
                    modules={[Navigation , Autoplay]}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay : 3000,
                        disableOnInteraction:false
                    }}
                    onSwiper={(swiper)=>(swipwerRef.current = swiper)}
                    onSlideChange={(swiper)=>
                        setActiveIndext(swiper.realIndex)
                    }
                    className= "w-full h-full"
            >
                {data?.map((movie, index) => (

                    <SwiperSlide key={index}>

                        <div
                        className='bg-cover bg-center w-full h-full'
                            key={index}
                            style={{ backgroundImage: `url(${movie?.image_url})` }}
                        >

                            <div className=' absolute top-0 left-0 w-full h-full bg-black/40 flex items-center px-20'>
                                <div className='  text-white max-w-xl'>
                                    <h1 className='font-bold text-5xl'> {movie.title} </h1>
                                    <p className='mb-5 mt-4'> <span className='font-bold'>خلاصه داستان <br /></span> {movie.plot_summary} </p>
                                    <p className='mb-5 mt-5'> <span className='font-bold'> ژانر<br /></span> {movie.genre} </p>
                                    <div className='flex mr-10'>
                                        <span className='mr-3 '> {movie.runtime}</span>
                                        <img src="/icons8-clock-24.png" width={24} height={24} />
                                        <span className='mr-3 ml-3 '> {movie.imdb_rating} </span>
                                        <img src="/imdb.webp" width={24} height={24} />
                                    </div>


                                    <button className="bg-red-500 px-14 py-3 rounded-xl text-white font-bold mt-10"> مشاهده و دانلود باتمام کیفیت ها</button>


                                </div>

                            </div>

                            <div className=" absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4">
                                <button onClick={()=> swipwerRef.current.slidePrev()} 
                                className="w-10 h-10 bg-black/60 rounded-full text-5xl text-red-500 flex items-center justify-center  ">
                                    ‹ </button>

                                <div className="flex items-center gap-2">
                                    {data.map((_,i) => (
                                        <div
                                            onClick={()=> swipwerRef.current.slideToLoop(i)}
                                            key={i}
                                            className={`w-3 h-3 rounded-full ${activeIndext === i ? "bg-red-600 scale-110" : "bg-red-500/40"}`}>

                                        </div>
                                    ))}
                                    <button onClick={()=> swipwerRef.current.slideNext()}
                                     className="w-10 h-10 bg-black/60 rounded-full text-5xl text-red-500 flex items-center justify-center  ">
                                         › </button>
                                </div>

                            </div>

                        </div>


                    </SwiperSlide>
                ))}


            </Swiper>

        </div>
    )
}

export default Homepage