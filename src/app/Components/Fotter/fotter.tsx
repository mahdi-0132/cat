import { Facebook, Instagram, MessageCircle, MessageSquare, Twitter } from 'lucide-react'
import React from 'react'

function Fotter() {
  return (

    <footer className='bg-neutral-700'>
      <div className='flex justify-between w-full h-full'>
      <div className='flex flex-col '>
        <h2 className='px-72 py-10 bg-red-600 rounded-bl-full text-3xl'> <span className='text-sky-600 ml-6'>logo</span>
          سینما سیتی; رسانه ای برای همه </h2>
        <p className='mr-52 mt-8 leading-8 [word-spacing:6px]'>
          وبسایت +++++ فعالیت خود را از سال 1396 شروع کرده است و به صورت حرفه‌ای به دانلود فیلم و<br /> سریال بدون سانسور پرداخته است. در این وبسایت شما میتوانید هر فیلم یا سرییا یا انیمیشن مورد<br /> علاقه ی خود را به صورت آنلاین مشاهده و دانلود کنید. همچنین زیرنویس ها و دوبله هایی<br /> اختصاصی ای برای تمام فیلم و سریال ها تعیین شده است.
        </p>
        <div className='flex items-center justify-center mr-40 space-x-10'>
          <MessageCircle className='p-3 mt-12 border rounded-lg' size={54} />
          <Twitter className='p-2 mt-12 border rounded-lg' size={54} />
          <Instagram className='p-2 mt-12 border rounded-lg' size={54} />
          <Facebook className='p-2 mt-12 border rounded-lg' size={54} />
          <p className='mr-10 mt-10'>تلفن پشتیبانی:<span className='mr-2'>15*****0912</span></p>
        </div>

      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-20 mt-10'>
        <div className='text-center'>
          <h3 className='text-2xl font-bold mb-4'> قوانین</h3>
          <p className='border-t-4 mx-auto mb-4 w-48'></p>
          <ul className='space-y-3'>
            <li className='text-2xl hover:text-neutral-500'> صفحه اصلی</li>
            <li className='text-2xl hover:text-neutral-500'> درباره ما</li>
            <li className='text-2xl hover:text-neutral-500'> تماس با ما</li>
            <li className='text-2xl hover:text-neutral-500'> همکاری با ما</li>
            <li className='text-2xl hover:text-neutral-500'> سوالات متداول</li>
          </ul>

        </div>
        <div className='text-center'>
          <h3 className='text-2xl font-bold mb-4'> سینما سیتی</h3>
          <p className='border-t-4 mx-auto mb-4 w-48'></p>
          <ul className='space-y-3'>
            <li className='text-2xl hover:text-neutral-500'> صفحه اصلی</li>
            <li className='text-2xl hover:text-neutral-500'> درباره ما</li>
            <li className='text-2xl hover:text-neutral-500'> تماس با ما</li>
            <li className='text-2xl hover:text-neutral-500'> همکاری با ما</li>
            <li className='text-2xl hover:text-neutral-500'> سوالات متداول</li>
          </ul>

        </div>

        <div className='text-center'>
          <h3 className='text-2xl font-bold mb-4'> دانلود</h3>
          <p className='border-t-4 mx-auto mb-4 w-48'></p>
          <ul className='space-y-3'>
            <li className='text-2xl hover:text-neutral-500'> فیلم</li>
            <li className='text-2xl hover:text-neutral-500'> سریال</li>
            <li className='text-2xl hover:text-neutral-500'> انیمیشن</li>
            <li className='text-2xl hover:text-neutral-500'> جستجو</li>
            <li className='text-2xl hover:text-neutral-500'> دسته بندی</li>
          </ul>

        </div>
        <div className='text-center mt-14 ml-6'>
          <ul className="space-y-8 font-bold text-xl">
            <li className='border-b-2 hover:text-neutral-500'>Privacy Policy</li>
            <li className='border-b-2 hover:text-neutral-500'>Terms & <br /> Conditions</li>
            <li className='border-b-2 hover:text-neutral-500'>Help & Support</li>
          </ul>
        </div>
          
      </div>

      </div>
    
<div className="flex relative">
  <div className='w-96 border-4 mr-auto border-sky-500 rounded-tr-full h-24'> 
  <div className='absolute w-1/5 mr-3 top-4  rounded-tr-full h-20 bg-red-600'>
  </div>
  
  </div>
  
</div>
    </footer>


  )
}

export default Fotter