"use client"
import Fotter from '@/app/Components/Fotter/fotter'
import { AlertTriangle, Reply, ReplyAll, ThumbsDown, ThumbsUp, UserCircle, UserCircle2 } from 'lucide-react'
import React, { useState } from 'react'

function Comments() {
    const [active, setActive] = useState(false)
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)
    const [active5, setActive5] = useState(false)
    
    return (
        <section className='w-full min-h-screen mt-8 sm:mt-12 md:mt-16 lg:mt-20 px-2 sm:px-4 md:px-6 lg:px-8'>
            <div className='w-full h-16 sm:h-20 md:h-24 lg:h-32 flex items-center justify-center lg:justify-start'>
                <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center lg:text-right lg:mr-20 xl:mr-40'>
                    نظرات کاربران
                </h1>
            </div>
            
            {/* Login/Signup Alert */}
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mt-6 sm:mt-8'>
                <h3 className='font-bold flex items-center text-sm sm:text-base md:text-lg text-center sm:text-right'>
                    <span className="text-red-600 ml-1 sm:ml-3">
                        <AlertTriangle size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
                    </span>
                    کاربر گرامی برای ثبت نظر خود باید وارد سامانه ما شده باشید.
                </h3>
                <div className="flex gap-3 sm:gap-4">
                    <button
                        onClick={() => {
                            setActive(!active)
                            if (active1) setActive1(false)
                        }}
                        className={`
                            flex items-center justify-center gap-2 px-4 sm:px-5 md:px-6 lg:px-7 
                            py-1.5 sm:py-2 rounded-lg text-sm sm:text-base
                            transition-all duration-300
                            ${active
                                ? 'bg-red-600 text-white'
                                : 'border border-red-600 sm:border-2 text-gray-300 hover:bg-red-500/75 hover:text-white'}  
                        `}>
                        <span className='font-bold'>ورود</span>
                    </button>

                    <button
                        onClick={() => {
                            setActive1(!active1)
                            if (active) setActive(false)
                        }}
                        className={`
                            flex items-center justify-center gap-2 px-4 sm:px-5 md:px-6 lg:px-7 
                            py-1.5 sm:py-2 rounded-lg text-sm sm:text-base
                            transition-all duration-300
                            ${active1
                                ? 'bg-red-600 text-white'
                                : 'border border-red-600 sm:border-2 text-gray-300 hover:bg-red-500/75 hover:text-white'}  
                        `}>
                        <span className='font-bold'>ثبت نام</span>
                    </button>
                </div>
            </div>

            {/* Comment Input */}
            <div className='w-full max-w-6xl mx-auto h-12 sm:h-14 md:h-16 flex items-center justify-between rounded-xl sm:rounded-2xl bg-black/50 mt-6 sm:mt-8 md:mt-10 px-3 sm:px-4 md:px-6'>
                <input 
                    type='text' 
                    placeholder='دیدگاهتان را بنویسید ...' 
                    className='w-full bg-transparent outline-none px-3 sm:px-4 md:px-6 py-2 text-sm sm:text-base'
                />
                <button onClick={() => setActive2(!active2)}
                    className={`
                        flex items-center justify-center gap-2 px-4 sm:px-5 md:px-6 lg:px-7 
                        py-1.5 sm:py-2 rounded-lg text-sm sm:text-base ml-2 sm:ml-4
                        transition-all duration-300 whitespace-nowrap
                        ${active2
                            ? 'bg-sky-600 text-white'
                            : 'border border-sky-600 sm:border-2 text-sky-300 hover:bg-sky-500/75 hover:text-white'}  
                    `}>
                    <span>انتشار</span>
                </button>
            </div>

            {/* Sort Buttons */}
            <div className='mt-6 sm:mt-8 md:mt-10 px-2 sm:px-4'>
                <div className='w-full max-w-6xl mx-auto flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5'>
                    <h3 className='font-bold text-sm sm:text-base md:text-lg'>مرتب سازی:</h3>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        <button onClick={() => {
                            setActive3(!active3)
                            if (active4) setActive4(false)
                            if (active5) setActive5(false)
                        }}
                            className={`
                                flex items-center justify-center gap-2 px-4 sm:px-5 md:px-6 lg:px-7 
                                py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm md:text-base
                                transition-all duration-300
                                ${active3
                                    ? 'bg-red-600 text-white'
                                    : 'border border-red-600 sm:border-2 text-gray-300 hover:bg-red-500/75 hover:text-white'}  
                            `}>
                            <span>جدیدترین</span>
                        </button>

                        <button onClick={() => {
                            setActive4(!active4)
                            if (active3) setActive3(false)
                            if (active5) setActive5(false)
                        }}
                            className={`
                                flex items-center justify-center gap-2 px-4 sm:px-5 md:px-6 lg:px-7 
                                py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm md:text-base
                                transition-all duration-300
                                ${active4
                                    ? 'bg-red-600 text-white'
                                    : 'border border-red-600 sm:border-2 text-gray-300 hover:bg-red-500/75 hover:text-white'}  
                            `}>
                            <span>قدیمی ترین</span>
                        </button>

                        <button onClick={() => {
                            setActive5(!active5)
                            if (active3) setActive3(false)
                            if (active4) setActive4(false)
                        }}
                            className={`
                                flex items-center justify-center gap-2 px-4 sm:px-5 md:px-6 lg:px-7 
                                py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm md:text-base
                                transition-all duration-300
                                ${active5
                                    ? 'bg-red-600 text-white'
                                    : 'border border-red-600 sm:border-2 text-gray-300 hover:bg-red-500/75 hover:text-white'}  
                            `}>
                            <span>بیشترین واکنش</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Comments List */}
            <div className="mt-6 sm:mt-8 md:mt-10 space-y-4 sm:space-y-6 px-2 sm:px-4">
                {/* Comment 1 */}
                <div className="w-full max-w-6xl mx-auto h-auto min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[200px] bg-black/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <UserCircle2 size={30} className="sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
                            <h2 className='font-bold text-red-500 text-base sm:text-lg md:text-xl'>Aminpa</h2>
                        </div>
                        <span className="text-gray-400 text-xs sm:text-sm">3 روز قبل</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 sm:mt-4 gap-4 sm:gap-0">
                        <p className='text-sm sm:text-base md:text-lg text-right flex-1'>
                            بدون شک یکی از بهترین سریال های عمرم بود. داستانی جذاب و پایانی بینظیر.
                        </p>
                        <div className="flex items-center gap-2 sm:gap-3 self-end sm:self-center">
                            <span className="border rounded-full rounded-br-none bg-sky-500 border-sky-500 p-1 sm:p-2">
                                <Reply size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
                            </span>
                            <div className="flex gap-2">
                                <span className="px-2 sm:px-3 py-1 sm:py-2 border border-red-500 rounded-xl sm:rounded-2xl flex flex-col items-center">
                                    <ThumbsDown size={14} className="sm:w-4 sm:h-4" />
                                    <span className="text-xs sm:text-sm mt-1">0</span>
                                </span>
                                <span className="px-2 sm:px-3 py-1 sm:py-2 border border-red-500 rounded-xl sm:rounded-2xl flex flex-col items-center">
                                    <ThumbsUp size={14} className="sm:w-4 sm:h-4" />
                                    <span className="text-green-500 text-xs sm:text-sm mt-1">4</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comment 2 */}
                <div className="w-full max-w-6xl mx-auto h-auto min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[200px] bg-black/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <UserCircle2 size={30} className="sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
                            <h2 className='font-bold text-red-500 text-base sm:text-lg md:text-xl'>Hashemy</h2>
                        </div>
                        <span className="text-gray-400 text-xs sm:text-sm">5 روز قبل</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 sm:mt-4 gap-4 sm:gap-0">
                        <p className='text-sm sm:text-base md:text-lg text-right flex-1'>
                            دیشب برای بار صدهزارم چندتا قسمتشو نگاه کردم و هنوزم از دیالوگ های قوی و بازی عالی بازیگراش به وجد میام … واقعا صد از صد
                        </p>
                        <div className="flex items-center gap-2 sm:gap-3 self-end sm:self-center">
                            <span className="border rounded-full rounded-br-none bg-sky-500 border-sky-500 p-1 sm:p-2">
                                <Reply size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
                            </span>
                            <div className="flex gap-2">
                                <span className="px-2 sm:px-3 py-1 sm:py-2 border border-red-500 rounded-xl sm:rounded-2xl flex flex-col items-center">
                                    <ThumbsDown size={14} className="sm:w-4 sm:h-4" />
                                    <span className="text-xs sm:text-sm mt-1">7</span>
                                </span>
                                <span className="px-2 sm:px-3 py-1 sm:py-2 border border-red-500 rounded-xl sm:rounded-2xl flex flex-col items-center">
                                    <ThumbsUp size={14} className="sm:w-4 sm:h-4" />
                                    <span className="text-green-500 text-xs sm:text-sm mt-1">9</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comment 3 */}
                <div className="w-full max-w-6xl mx-auto h-auto min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[200px] bg-black/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <UserCircle2 size={30} className="sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
                            <h2 className='font-bold text-red-500 text-base sm:text-lg md:text-xl'>Tromp</h2>
                        </div>
                        <span className="text-gray-400 text-xs sm:text-sm">7 روز قبل</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 sm:mt-4 gap-4 sm:gap-0">
                        <p className='text-sm sm:text-base md:text-lg text-right flex-1'>
                            چی میشه گفت اخه چی میشه گفت بی نظیر مهشر ، حسی ک میده به مخاطب به راحتی میبرتت کوچه پس کوچه های بیرمنگام تو اون سالها ، بازیه کیلین مورفی قشنگ نشسته نقش به شخصیت ، فیلمبرداری و و و همش تو این سریال پیدا میشه بعدش مثلا سریال هتل کنتینانتالو با ی قاب این چنینی اومدن درارن ولی کار جمع نشد مثل این
                        </p>
                        <div className="flex items-center gap-2 sm:gap-3 self-end sm:self-center">
                            <span className="border rounded-full rounded-br-none bg-sky-500 border-sky-500 p-1 sm:p-2">
                                <Reply size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
                            </span>
                            <div className="flex gap-2">
                                <span className="px-2 sm:px-3 py-1 sm:py-2 border border-red-500 rounded-xl sm:rounded-2xl flex flex-col items-center">
                                    <ThumbsDown size={14} className="sm:w-4 sm:h-4" />
                                    <span className="text-xs sm:text-sm mt-1">7</span>
                                </span>
                                <span className="px-2 sm:px-3 py-1 sm:py-2 border border-red-500 rounded-xl sm:rounded-2xl flex flex-col items-center">
                                    <ThumbsUp size={14} className="sm:w-4 sm:h-4" />
                                    <span className="text-green-500 text-xs sm:text-sm mt-1">9</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comment 4 */}
                <div className="w-full max-w-6xl mx-auto h-auto min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[200px] bg-black/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <UserCircle2 size={30} className="sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
                            <h2 className='font-bold text-red-500 text-base sm:text-lg md:text-xl'>Pottin</h2>
                        </div>
                        <span className="text-gray-400 text-xs sm:text-sm">5 روز قبل</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 sm:mt-4 gap-4 sm:gap-0">
                        <p className='text-sm sm:text-base md:text-lg text-right flex-1'>
                            من فصل اولشو يك سال پيش ديده بودم و زياد خوشم نيومده بود، يك هفته قبل مشتاق شدم بقيشو ببينم، در واقع دو سه فصل اولش خيلي جذاب نيست، اما بعد از اون بشدت منو جذب كرد و همه قسمتهاشو پشت سر هم ديدم.. خيلي سريال قشنگيه فوق العاده س.. موسيقي و آهنگاشم جذاب بود.. حيف كه تموم شد.. من عاشق كاركتراي تامي شلبي، آرتور و پالي بودم..
                        </p>
                        <div className="flex items-center gap-2 sm:gap-3 self-end sm:self-center">
                            <span className="border rounded-full rounded-br-none bg-sky-500 border-sky-500 p-1 sm:p-2">
                                <Reply size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
                            </span>
                            <div className="flex gap-2">
                                <span className="px-2 sm:px-3 py-1 sm:py-2 border border-red-500 rounded-xl sm:rounded-2xl flex flex-col items-center">
                                    <ThumbsDown size={14} className="sm:w-4 sm:h-4" />
                                    <span className="text-xs sm:text-sm mt-1">7</span>
                                </span>
                                <span className="px-2 sm:px-3 py-1 sm:py-2 border border-red-500 rounded-xl sm:rounded-2xl flex flex-col items-center">
                                    <ThumbsUp size={14} className="sm:w-4 sm:h-4" />
                                    <span className="text-green-500 text-xs sm:text-sm mt-1">9</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Nested Comment */}
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-0 mt-6 sm:mt-8 mr-12 md:mr-32' >
                    <div className="flex justify-center lg:justify-end lg:w-1/6">
                        <span className="border rounded-full rounded-br-none bg-sky-500 border-sky-500 p-2 sm:p-3 ">
                            <Reply size={24} className="sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                        </span>
                    </div>
                    
                    <div className="w-full lg:w-5/6 h-auto min-h-[120px] sm:min-h-[140px]  bg-black/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 mr-7 md:mr-10">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                            <div className="flex items-center gap-2 sm:gap-3">
                                <UserCircle2 size={30} className="sm:w-10 sm:h-10 md:w-12 md:h-12" />
                                <h2 className='font-bold text-red-500 text-base sm:text-lg md:text-xl'>Jacky Chon</h2>
                            </div>
                            <span className="text-gray-400 text-xs sm:text-sm">5 روز قبل</span>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 sm:mt-4 gap-4 sm:gap-0">
                            <p className='text-sm sm:text-base md:text-lg text-right flex-1'>
                                حيف كه پالي توي فصل آخر نبود، خيلي تعجب كردم وفتي فصل آخر شروع شد و متوجه شدم پالي مرده، چون مرگش توي صحنه نقشه مرگ موزلي خيلي مبهم بود.. تا اينكه متوجه شدم بازيگر اين نقش در سال ٢٠٢١ در اثر كنسر فوت شده و احتمالا اينطور نقششو جم و جور كردن..
                            </p>
                            <div className="flex items-center gap-2 sm:gap-3 self-end sm:self-center">
                                <div className="flex gap-2">
                                    <span className="px-2 sm:px-3 py-1 sm:py-2 border border-red-500 rounded-xl sm:rounded-2xl flex flex-col items-center">
                                        <ThumbsDown size={14} className="sm:w-4 sm:h-4" />
                                        <span className="text-xs sm:text-sm mt-1">7</span>
                                    </span>
                                    <span className="px-2 sm:px-3 py-1 sm:py-2 border border-red-500 rounded-xl sm:rounded-2xl flex flex-col items-center">
                                        <ThumbsUp size={14} className="sm:w-4 sm:h-4" />
                                        <span className="text-green-500 text-xs sm:text-sm mt-1">9</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Load More Button */}
            <button className='flex justify-center mx-auto mt-8 sm:mt-10 rounded-xl sm:rounded-2xl px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-2.5 md:py-3 bg-red-500 hover:bg-red-600 transition-colors duration-300 text-sm sm:text-base md:text-lg'>
                مشاهده کامنت های بیشتر
            </button>
            
            <div className='mt-10 sm:mt-12 md:mt-14'>
                <Fotter/>
            </div>
        </section>
    )
}
export default Comments