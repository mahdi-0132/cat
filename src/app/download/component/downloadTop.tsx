"use client"
import { Apple, BookmarkCheck, Calendar, CheckCircle, Clapperboard, Clock, Film, Globe2, PlayCircle, ShieldAlert, ThumbsDown, ThumbsUp, Tv, Users2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Imdb from "@/public/imdb.png"
import Colck from "@/public/clock.png"
import Actors from './Actors'
import { useSearchParams } from 'next/navigation'

interface MovieDetails {
      short?: {
    name?: string;
    image?: string;
    description?: string;
    genre?: string[];
    datePublished?: string;
    duration?: string;
    aggregateRating?: {
      ratingValue?: number;
      ratingCount?: number;
    };
      countryOfOrigin?: {
      name?: string;
    }[] | string[];
    contentRating?: string;
    actor?: Array<{ name?: string }>;
    director?: Array<{ name?: string }>;
    trailer?: {
      thumbnailUrl?: string;
      embedUrl?: string;
    };
  };
  imdbId?: string;
  
}

function DownloadTop() {
    const searchParams = useSearchParams()
    const imdbId = searchParams.get("id")
    
    const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        if (!imdbId) return

        const fetchMovieData = async () => {
            try {
                setLoading(true)
                const res = await fetch(
                    `https://imdb.iamidiotareyoutoo.com/search?tt=${imdbId}`
                )
                if (!res.ok) throw new Error("fetch error")
                    
                const data = await res.json()
                setMovieDetails(data)
            } catch (err) {
                setError("خطا در دریافت اطلاعات")
            } finally {
                setLoading(false)
            }
        }

        fetchMovieData()
    }, [imdbId])

    const getCountris = () => {
        const movie = movieDetails?.short
        if (!movie?.countryOfOrigin) return ''

        if (Array.isArray(movie.countryOfOrigin)) {
            return movie.countryOfOrigin
                .map(country => {
                    if (typeof country === 'object' && country.name) {
                        return country.name
                    }
                    return country
                })
                .filter(Boolean)
                .join(', ')
        }
        return ''
    }

    if (!imdbId) return <p className="text-center py-10 px-4">اطلاعات یافت نشد</p>
    if (loading) return <p className="text-center py-20 px-4">در حال جستجو...</p>
    if (error) return <p className="text-center py-20 px-4 text-red-500">{error}</p>

    const movie = movieDetails?.short
    if (!movie) return <p className='text-center py-20 px-4'>فیلم یافت نشد</p>

    const imdbRating = movie.aggregateRating?.ratingValue || 0 
    const ratingCount = movie.aggregateRating?.ratingCount || 0
    const formattedRatingCount = ratingCount > 1000 ? `${((ratingCount/1000).toFixed(0))}k` : ratingCount

    const year = movie.datePublished ? new Date(movie.datePublished).getFullYear() : 'نامعلوم'

    const praseDuration = (duration: string) => {
        if(!duration) return 'نامشخص'

        const hoursMatch = duration.match(/(\d+)H/)
        const minutsMatch = duration.match(/(\d+)M/)

        const hour = hoursMatch ? hoursMatch[1] : '0'
        const minut = minutsMatch ? minutsMatch[1] : '0'

        return `${hour} ساعت, ${minut} دقیقه`
    }

    const duration = praseDuration(movie.duration || '')
    const countries = getCountris()

    return (
        <section className='w-full min-h-screen overflow-hidden mt-4 md:mt-10 lg:mt-20 px-2 sm:px-4'>
            <div className="w-full min-h-screen bg-cover bg-center"
                style={{
                    backgroundImage:`url(${movie?.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}>
                <div className='w-full bg-black/85 flex flex-col lg:flex-row justify-center lg:justify-between p-2 sm:p-4 md:p-6'>
                    <div className='flex flex-col lg:flex-row gap-6 md:gap-10 lg:gap-12 w-full max-w-7xl mx-auto'>
                        
                        {/* Poster Section */}
                        <div className='relative w-full lg:w-auto flex justify-center lg:justify-start md:top-44'>
                            <img
                                src={movie?.image}
                                className='h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:h-[700px] xl:h-[1000px] w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:w-[350px] xl:w-[500px] border-4 border-red-500 rounded-3xl md:rounded-4xl object-cover'
                            />
                            <button 
                                onClick={() => window.open(movie.trailer?.embedUrl, '_blank')} 
                                className="absolute top-72 md:top-96 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 md:gap-2 py-1 md:py-2 px-4 md:px-6 rounded-lg "
                            >
                                <span className='font-bold text-sm md:text-xl lg:text-2xl xl:text-3xl'> مشاهده تریلر</span> 
                                <PlayCircle size={30} className="md:hidden" color='red' />
                                <PlayCircle size={50} className="hidden md:block lg:hidden" color='red' />
                                <PlayCircle size={75} className="hidden lg:block" color='red' />
                            </button>
                        </div>
                        
                        {/* Content Section */}
                        <div className='flex-col flex-1 px-2 sm:px-4 md:px-0'>
                            {/* Header */}
                            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 md:mt-8 lg:mt-14 gap-4 md:gap-0'>
                                <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-right w-full sm:w-auto'>
                                    دانلود فیلم {movie.name}
                                </h2>
                                <BookmarkCheck 
                                    size={30} 
                                    className="sm:hidden"
                                    color='red' 
                                />
                                <BookmarkCheck 
                                    size={40} 
                                    className="hidden sm:block lg:hidden"
                                    color='red' 
                                />
                                <BookmarkCheck 
                                    size={50} 
                                    className="hidden lg:block"
                                    color='red' 
                                />
                            </div>
                            
                            {/* Ratings Grid */}
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-20 mt-8 md:mt-12 lg:mt-16'>
                                {/* IMDb Rating */}
                                <div>
                                    <h3 className='flex items-center gap-2 md:gap-3 mr-2 md:mr-4'>
                                        <img 
                                            src="/imdb.png" 
                                            width={30} 
                                            height={30}
                                            className="w-8 h-8 md:w-10 md:h-10"
                                        />
                                        <span className="text-white text-sm md:text-base">10/</span>
                                        <span className="text-lg md:text-xl lg:text-2xl font-bold text-yellow-400"> {imdbRating.toFixed(1)}</span>
                                    </h3>
                                    <div className='border-2 w-24 md:w-32 mr-2 md:mr-4 mt-2 md:mt-3 border-yellow-600'></div>
                                    <p className='text-yellow-400 mt-2 md:mt-3 mr-2 md:mr-8 text-sm md:text-base'>
                                        <span className='text-white'>Votes</span> {formattedRatingCount}
                                    </p>
                                </div>
                                
                                {/* Apple Rating */}
                                <div>
                                    <h3 className='flex items-center gap-2 md:gap-3 mr-2 md:mr-4'>
                                        <Apple size={30} className="md:w-10 md:h-10" color='red' />
                                        <span className="text-lg md:text-xl lg:text-2xl font-bold text-yellow-400">93%</span>
                                    </h3>
                                    <div className='border-2 w-24 md:w-32 mr-2 md:mr-4 mt-2 md:mt-3 border-red-600'></div>
                                    <p className='text-red-600 mt-2 md:mt-3 mr-2 md:mr-8 text-sm md:text-base'>
                                        <span className='text-white'>Votes</span> {formattedRatingCount}
                                    </p>
                                </div>

                                {/* Web Rating */}
                                <div>
                                    <h3 className='flex items-center gap-2 md:gap-3 mr-2 md:mr-4'>
                                        <p className="p-1 md:p-2 bg-gray-400/40 rounded-full text-red-600 text-xs md:text-sm">web</p>
                                        <span className="text-white text-sm md:text-base">5/</span>
                                        <span className="text-lg md:text-xl lg:text-2xl font-bold text-red-600">4.6</span>
                                    </h3>
                                    <div className='border-2 w-24 md:w-32 mr-2 md:mr-4 mt-2 md:mt-3 border-red-600'></div>
                                    <p className='text-white mt-2 md:mt-3 mr-2 md:mr-8 text-sm md:text-base'>
                                        امتیاز <span className='text-red-600'>کاربران ما</span>
                                    </p>
                                </div>
                                
                                {/* Movie Details */}
                                <div className='space-y-3 md:space-y-4 lg:space-y-5'>
                                    <h3 className='flex items-center'>
                                        <Clapperboard size={20} className="md:w-7 md:h-7 lg:w-8 lg:h-8" color='red' />
                                        <span className='font-bold text-base md:text-lg lg:text-xl mr-2 md:mr-3'> کیفیت:</span>
                                        <span className="mr-1 md:mr-2 text-sm md:text-base">تمام کیفیت‌ها</span>
                                    </h3>

                                    <h3 className='flex items-center'>
                                        <Globe2 size={20} className="md:w-7 md:h-7 lg:w-8 lg:h-8" color='red' />
                                        <span className='font-bold text-base md:text-lg lg:text-xl mr-2 md:mr-3'> کشور:</span>
                                        <span className="mr-1 md:mr-2 text-sm md:text-base">{countries || 'نامشخص'}</span>
                                    </h3>

                                    <h3 className='flex items-center'>
                                        <Tv size={20} className="md:w-7 md:h-7 lg:w-8 lg:h-8" color='red' />
                                        <span className='font-bold text-base md:text-lg lg:text-xl mr-2 md:mr-3'> خالق:</span>
                                        <span className="mr-1 md:mr-2 text-sm md:text-base">{movie.director?.[0]?.name || 'نامشخص'}</span>
                                    </h3>

                                    <h3 className='flex items-center'>
                                        <ShieldAlert size={20} className="md:w-7 md:h-7 lg:w-8 lg:h-8" color='red' />
                                        <span className='font-bold text-base md:text-lg lg:text-xl mr-2 md:mr-3'> رده سنی:</span>
                                        <span className="mr-1 md:mr-2 text-sm md:text-base">{movie.contentRating || 'نامشخص'}</span>
                                    </h3>
                                </div>

                                {/* More Movie Details */}
                                <div className='space-y-3 md:space-y-4 lg:space-y-5'>
                                    <h3 className='flex items-center'>
                                        <Users2 size={20} className="md:w-7 md:h-7 lg:w-8 lg:h-8" color='red' />
                                        <span className='font-bold text-base md:text-lg lg:text-xl mr-2 md:mr-3'> ستارگان:</span>
                                        <span className="mr-1 md:mr-2 text-sm md:text-base">{movie.actor?.[0]?.name || 'نامشخص'}</span>
                                    </h3>

                                    <h3 className='flex items-center'>
                                        <Film size={20} className="md:w-7 md:h-7 lg:w-8 lg:h-8" color='red' />
                                        <span className='font-bold text-base md:text-lg lg:text-xl mr-2 md:mr-3'> ژانر:</span>
                                        <span className="mr-1 md:mr-2 text-sm md:text-base">
                                            {Array.isArray(movie.genre) ? movie.genre.join(', ') : movie.genre || 'نامشخص'}
                                        </span>
                                    </h3>

                                    <h3 className='flex items-center'>
                                        <Calendar size={20} className="md:w-7 md:h-7 lg:w-8 lg:h-8" color='red' />
                                        <span className='font-bold text-base md:text-lg lg:text-xl mr-2 md:mr-3'> سال پخش:</span>
                                        <span className="mr-1 md:mr-2 text-sm md:text-base">{year}</span>
                                    </h3>

                                    <h3 className='flex items-center'>
                                        <Clock size={20} className="md:w-7 md:h-7 lg:w-8 lg:h-8" color='red' />
                                        <span className='font-bold text-base md:text-lg lg:text-xl mr-2 md:mr-3'> زمان:</span>
                                        <span className="mr-1 md:mr-2 text-sm md:text-base">{duration}</span>
                                    </h3>
                                </div>
                            </div>

                            {/* Story Summary */}
                            <div className='mt-8 md:mt-12 lg:mt-20 xl:mt-28 max-w-full'>
                                <h3 className='flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3'>
                                    <span className='font-bold text-xl md:text-2xl lg:text-3xl'>خلاصه داستان:</span>
                                    <span className="text-gray-200/85 text-sm md:text-base lg:text-lg text-right md:text-justify">
                                        {movie.description}
                                    </span>
                                </h3>
                            </div>
                            
                            {/* Status and Reactions */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-8 md:mt-10 lg:mt-12">
                                <div className='bg-red-600 flex items-center justify-center gap-2 py-2 md:py-3 rounded-xl text-sm md:text-base'>
                                    <span>وضعیت:</span>
                                    <span>تکمیل شده</span>
                                </div>

                                <button className='border-2 md:border-4 border-red-600 flex items-center justify-center gap-2 py-2 md:py-3 rounded-xl text-sm md:text-base'>
                                    <span>این سریال را دوست داشتم</span>
                                    <span className="text-sky-500">(23999)</span>
                                    <ThumbsUp size={16} className="md:w-5 md:h-5" />
                                </button>

                                <button className='border-2 md:border-4 border-red-600 flex items-center justify-center gap-2 py-2 md:py-3 rounded-xl text-sm md:text-base'>
                                    <span>این سریال را دوست نداشتم</span>
                                    <span className="text-sky-500">(2999)</span>
                                    <ThumbsDown size={16} className="md:w-5 md:h-5" />
                                </button>
                            </div>

                            {/* Download and Features */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-4 lg:gap-5 mt-8 md:mt-10 lg:mt-12">
                                <button className='bg-red-600 flex items-center justify-center py-2 md:py-3 rounded-xl text-sm md:text-base'>
                                    <span>دانلود</span>
                                </button>
                                
                                <button className='border-2 md:border-4 border-red-600 flex items-center justify-center py-2 md:py-3 rounded-xl text-sm md:text-base'>
                                    <span className='text-red-600'>تماشای آنلاین</span>
                                </button>

                                <div className="flex items-center justify-center gap-2 py-2">
                                    <span className="text-sm md:text-base">بدون سانسور</span>
                                    <CheckCircle size={16} className="md:w-5 md:h-5" color='red' />
                                </div>
                                
                                <div className="flex items-center justify-center gap-2 py-2">
                                    <span className="text-sm md:text-base">زیرنویس</span>
                                    <CheckCircle size={16} className="md:w-5 md:h-5" color='red' />
                                </div>
                                
                                <div className="flex items-center justify-center gap-2 py-2">
                                    <span className="text-sm md:text-base">دوبله</span>
                                    <CheckCircle size={16} className="md:w-5 md:h-5" color='red' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DownloadTop