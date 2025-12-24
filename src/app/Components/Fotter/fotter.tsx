import { Facebook, Instagram, MessageCircle, MessageSquare, Twitter } from 'lucide-react'
import React from 'react'

function Fotter() {
  return (
    <footer className=''>
      <div className='flex flex-col lg:flex-row justify-between w-full max-w-[1500px] h-full'>
        
        {/* Left Section */}
        <div className='flex flex-col'>
          <h2 className='px-4 sm:px-8 md:px-16 lg:px-32 xl:px-32 py-4 sm:py-6 md:py-8 lg:py-14 bg-red-600 rounded-bl-lg lg:rounded-bl-full text-xl sm:text-2xl md:text-3xl text-center lg:text-right'>
            <span className='text-sky-600 ml-2 sm:ml-4 lg:ml-6'>logo</span>
            سینما سیتی; رسانه ای برای همه
          </h2>
          
          <p className='mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-justify lg:text-right max-w-3xl'>
            وبسایت +++++ فعالیت خود را از سال 1396 شروع کرده است و به صورت حرفه‌ای به دانلود فیلم و سریال بدون سانسور پرداخته است. در این وبسایت شما میتوانید هر فیلم یا سریال یا انیمیشن مورد علاقه ی خود را به صورت آنلاین مشاهده و دانلود کنید. همچنین زیرنویس ها و دوبله هایی اختصاصی ای برای تمام فیلم و سریال ها تعیین شده است.
          </p>
          
          <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10'>
            <div className='flex gap-3 sm:gap-4 md:gap-5'>
              <MessageCircle className='p-2 sm:p-3 border rounded-lg hover:bg-neutral-600 transition-colors cursor-pointer sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14' size={36}/>
              <Twitter className='p-2 sm:p-3 border rounded-lg hover:bg-neutral-600 transition-colors cursor-pointer sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14' size={36}/>
              <Instagram className='p-2 sm:p-3 border rounded-lg hover:bg-neutral-600 transition-colors cursor-pointer sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14' size={36}/>
              <Facebook className='p-2 sm:p-3 border rounded-lg hover:bg-neutral-600 transition-colors cursor-pointer sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14' size={36}/>
            </div>
            <p className='text-sm sm:text-base md:text-lg mt-2 sm:mt-0'>
              تلفن پشتیبانی: <span className='mr-1 sm:mr-2'>15*****0912</span>
            </p>
          </div>
        </div>

        {/* Right Section - Links Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 py-6 sm:py-8 md:py-10 mr-6 md:mr-12'>
          
          {/* Column 1 */}
          <div className='text-center lg:text-right'>
            <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-center'>قوانین</h3>
            <div className='border-t-4 mx-auto lg:mx-0 mb-3 sm:mb-4 w-32 sm:w-40 md:w-48'></div>
            <ul className='space-y-2 sm:space-y-3 text-center'>
              <li className='text-base sm:text-lg md:text-xl hover:text-neutral-500 cursor-pointer transition-colors'>صفحه اصلی</li>
              <li className='text-base sm:text-lg md:text-xl hover:text-neutral-500 cursor-pointer transition-colors'>درباره ما</li>
              <li className='text-base sm:text-lg md:text-xl hover:text-neutral-500 cursor-pointer transition-colors'>تماس با ما</li>
              <li className='text-base sm:text-lg md:text-xl hover:text-neutral-500 cursor-pointer transition-colors'>همکاری با ما</li>
              <li className='text-base sm:text-lg md:text-xl hover:text-neutral-500 cursor-pointer transition-colors'>سوالات متداول</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className='text-center lg:text-right'>
            <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-center'>سینما سیتی</h3>
            <div className='border-t-4 mx-auto lg:mx-0 mb-3 sm:mb-4 w-32 sm:w-40 md:w-48'></div>
            <ul className='space-y-2 sm:space-y-3 text-center'>
              <li className='text-base sm:text-lg md:text-xl hover:text-neutral-500 cursor-pointer transition-colors'>صفحه اصلی</li>
              <li className='text-base sm:text-lg md:text-xl hover:text-neutral-500 cursor-pointer transition-colors'>درباره ما</li>
              <li className='text-base sm:text-lg md:text-xl hover:text-neutral-500 cursor-pointer transition-colors'>تماس با ما</li>
              <li className='text-base sm:text-lg md:text-xl hover:text-neutral-500 cursor-pointer transition-colors'>همکاری با ما</li>
              <li className='text-base sm:text-lg md:text-xl hover:text-neutral-500 cursor-pointer transition-colors'>سوالات متداول</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className='text-center lg:text-right'>
            <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-center'>دانلود</h3>
            <div className='border-t-4 mx-auto lg:mx-0 mb-3 sm:mb-4 w-32 sm:w-40 md:w-48'></div>
            <ul className='space-y-2 sm:space-y-3 text-center'>
              <li className='text-base sm:text-lg md:text-xl hover:text-neutral-500 cursor-pointer transition-colors'>فیلم</li>
              <li className='text-base sm:text-lg md:text-xl hover:text-neutral-500 cursor-pointer transition-colors'>سریال</li>
              <li className='text-base sm:text-lg md:text-xl hover:text-neutral-500 cursor-pointer transition-colors'>انیمیشن</li>
              <li className='text-base sm:text-lg md:text-xl hover:text-neutral-500 cursor-pointer transition-colors'>جستجو</li>
              <li className='text-base sm:text-lg md:text-xl hover:text-neutral-500 cursor-pointer transition-colors'>دسته بندی</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className='text-center lg:text-right lg:mt-14'>
            <ul className="space-y-4 sm:space-y-6 md:space-y-8 font-bold text-center">
              <li className='border-b-2 hover:text-neutral-500 cursor-pointer transition-colors text-base sm:text-lg md:text-xl pb-1 sm:pb-2'>Privacy Policy</li>
              <li className='border-b-2 hover:text-neutral-500 cursor-pointer transition-colors text-base sm:text-lg md:text-xl pb-1 sm:pb-2'>Terms & Conditions</li>
              <li className='border-b-2 hover:text-neutral-500 cursor-pointer transition-colors text-base sm:text-lg md:text-xl pb-1 sm:pb-2'>Help & Support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Section */}
      <div className="flex relative">
        <div className='w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 border-2 sm:border-3 md:border-4 mr-auto border-sky-500 rounded-tr-lg lg:rounded-tr-full h-12 sm:h-16 md:h-20 lg:h-24'>
          <div className='absolute w-1/2 sm:w-2/5 lg:w-1/5 mr-2 sm:mr-3 top-2 sm:top-3 lg:top-4 rounded-tr-lg lg:rounded-tr-full h-8 sm:h-12 md:h-16 lg:h-20 bg-red-600'></div>
        </div>
      </div>
    </footer>
  )
}

export default Fotter