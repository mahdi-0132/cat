"use client"
import { Apple, BookmarkCheck, Calendar, CheckCircle, Clapperboard, Clock, Film, Globe2, PlayCircle, ShieldAlert, ThumbsDown, ThumbsUp, Tv, Users2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Imdb from "@/public/imdb.png"
import Colck from "@/public/clock.png"
import Actors from './Actors'

interface IPageDownload {
    title: string
    imdb_rating: number
    runtime: string
    genre: string
    image_url: string
    plot_summary: string
    age_rating: string
}


function DownloadTop() {
       const [data, setData] = useState<IPageDownload[]>([])
        const [bgIndex, setBgIndex] = useState(0)
        useEffect(() => {
            fetch("http://localhost:3001/sliders")
                .then(res => res.json())
                .then(d => {
                    setData(d.slider_2_highly_rated)
                    setBgIndex(Math.floor(Math.random() * d.slider_2_highly_rated))
                })
        }, [])
    
        useEffect(() => {
            if (data.length === 0) return
    
            const interval = setInterval(() => {
                setBgIndex(prev =>
                    prev === data.length - 1
                        ? Math.floor(Math.random() * data.length)
                        : Math.floor(Math.random() * data.length)
                )
            }, 5000)
    
            return () => clearInterval(interval)
        }, [data])
    
    
        const [data1, setData1] = useState<IPageDownload[]>([])
        const [bgIndex1, setBgIndex1] = useState(0)
        useEffect(() => {
            fetch("http://localhost:3001/suggestions")
                .then(res => res.json())
                .then(d => {
                    setData1(d.movies)
                    setBgIndex1(Math.floor(Math.random() * d.movies))
                })
        }, [])
    
        useEffect(() => {
            if (data1.length === 0) return
    
            const interval1 = setInterval(() => {
                setBgIndex1(prev =>
                    prev === data1.length - 1
                        ? Math.floor(Math.random() * data1.length)
                        : Math.floor(Math.random() * data1.length)
                )
            }, 5000)
    
            return () => clearInterval(interval1)
        }, [data1])
  return (
     <section className='w-full h-[980px] overflow-hidden mt-20'>
    
                <div className="w-full min-h-screen bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${data[bgIndex]?.image_url})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}>
                    <div className='absolute w-full bg-black/85 flex justify-between'>
                        <div className='mr-20 flex justify-between'>
                            <div className='relative'>
                                <img
                                    src={data1[bgIndex1]?.image_url}
                                    className='h-[930px] w-[500px] mt-10 border-4 border-red-500 rounded-4xl'
                                />
                                <button className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center bg-black/10 gap-2 py-2 px-6 rounded-lg mb-10" >
                                    <span className='font-bold text-3xl'> مشاهده تریلر</span> <span className=""><PlayCircle size={75} color='red' /></span></button>
    
                            </div>
                            <div className='flex-col'>
                                <div className='flex justify-between mt-14 mr-20 max-w-[1000px]'>
                                    <h2 className='font-bold text-5xl'> دانلود فیلم
                                        <span className="font-bold text-5xl"> {data1[bgIndex1]?.title} </span> </h2>
                                    <BookmarkCheck className=''
                                        size={50} color='red' />
                                </div>
                                <div className='grid grid-cols-1 sm:grid-cols-3 gap-20 mt-16 mr-10'>
                                    <div>
                                        <h3 className='flex items-center space-x-3 mr-4'>
                                            <img src="/imdb.png" width={40} height={40} />
                                            10/<span className="text-2xl font-bold text-yellow-400">{data1[bgIndex1]?.imdb_rating}</span>
                                        </h3>
                                        <p className='border-2 w-32 mr-4 mt-3 border-yellow-600'></p>
                                        <p className='text-yellow-400 mt-3 mr-8'>608K <span className='text-white'>Votes</span></p>
                                    </div>
                                    <div>
                                        <h3 className='flex items-center space-x-3 mr-4'>
                                            <Apple size={40} color='red' />
                                            <span className="text-2xl font-bold text-yellow-400">93%</span></h3>
                                        <p className='border-2 w-32 mr-4 mt-3 border-red-600'></p>
                                        <p className='text-red-600 mt-3 mr-8'>260K <span className='text-white'>Votes</span></p>
                                    </div>
    
                                    <div>
                                        <h3 className='flex items-center space-x-3 mr-4'>
                                            <p className="p-2 bg-gray-400/40 rounded-full text-red-600">web</p>
                                            5/<span className="text-2xl font-bold text-red-600">4.6</span></h3>
                                        <p className='border-2 w-32 mr-4 mt-3 border-red-600'></p>
                                        <p className='text-white mt-3 mr-8'> امتیاز <span className='text-red-600'>کاربران ما</span></p>
                                    </div>
                                    <div className='space-y-5'>
                                        <h3 className='flex items-center'> <Clapperboard size={30} color='red' />
                                            <span className='font-bold text-xl mr-3 '> کیفیت :</span> <span className="mr-2">تمام کیفیت ها </span>  </h3>
    
                                        <h3 className='flex items-center'> <Globe2 size={30} color='red' />
                                            <span className='font-bold text-xl mr-3 '> کشور :</span> <span className="mr-2"> US , Uk</span>  </h3>
    
                                        <h3 className='flex items-center'> <Tv size={30} color='red' />
                                            <span className='font-bold text-xl mr-3 '> خالق :</span> <span className="mr-2"> unKnown</span>  </h3>
    
                                        <h3 className='flex items-center'> <ShieldAlert size={30} color='red' />
                                            <span className='font-bold text-xl mr-3 '> رده سنی:</span> <span className="mr-2"> {data1[bgIndex1]?.age_rating} </span>  </h3>
                                    </div>
    
    
                                    <div className='space-y-5'>
                                        <h3 className='flex items-center'> <Users2 size={30} color='red' />
                                            <span className='font-bold text-xl mr-3 '>  ستارگان:</span> <span className="mr-2"> unKnown</span>  </h3>
    
                                        <h3 className='flex items-center'> <Film size={30} color='red' />
                                            <span className='font-bold text-xl mr-3 '> ژانر:</span> <span className="mr-2"> {data1[bgIndex1]?.genre} </span>  </h3>
    
                                        <h3 className='flex items-center'> <Calendar size={30} color='red' />
                                            <span className='font-bold text-xl mr-3 '> سال پخش:</span> <span className="mr-2"> unknown </span>  </h3>
    
                                        <h3 className='flex items-center'> <Clock size={30} color='red' />
                                            <span className='font-bold text-xl mr-3 '> زمان:</span> <span className="mr-2"> {data[bgIndex]?.runtime} </span>  </h3>
                                    </div>
                                </div>
    
                                <div className='mt-28 max-w-full mr-8'>
                                    <h3 className='flex items-center'>
                                        <span className='font-bold text-3xl mr-3 '> خلاصه داستان:</span> <span className="mr-2 text-gray-200/85"> {data1[bgIndex1]?.plot_summary} </span>  </h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
                                    <h3 className='bg-red-600 flex items-center justify-center py-3 rounded-xl mr-10'><span className=''>وضعیت :</span> <span className="">unknown</span></h3>
    
                                    <button className='border-4 border-red-600 flex items-center justify-center py-3 rounded-xl mr-10'>
                                        <span className=''>این سریال را دوست داشتم</span> <span className="mr-5 text-sky-500">(23999)</span><ThumbsUp /></button>
    
                                    <button className='border-4 border-red-600 flex items-center justify-center py-3 rounded-xl mr-10'>
                                        <span className=''>این سریال را دوست نداشتم</span> <span className="mr-5 text-sky-500">(2999)</span><ThumbsDown /></button>
                                </div>
    
                                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-12 mr-10">
                                    <button className='bg-red-600 flex items-center justify-center py-3 rounded-xl '>
                                        <span className=''>دانلود </span></button>
                                    <button className='border-4 border-red-600 flex items-center justify-center py-3 rounded-xl'>
                                        <span className='text-red-600'>تماشای انلاین</span></button>
    
                                    <p className="flex space-x-5"> <span className="">بدون سانسور</span> <CheckCircle color='red' /></p>
                                    <p className="flex space-x-5"> <span className="">زیرنویس</span> <CheckCircle color='red' /></p>
                                    <p className="flex space-x-5"> <span className="">دوبله</span> <CheckCircle color='red' /></p>
    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default DownloadTop