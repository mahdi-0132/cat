"use client"
import { Search } from 'lucide-react'


function BoxSearch() {

    return (
        <section className='flex items-center justify-center w-full h-30 mt-25'>
            <div className='flex items-center justify-between w-377 h-20 border rounded-lg  bg-black '>
                <h2 className='mr-20 text-2xl'> جستجوی ساده فیلم و سریال </h2>
                <div className='flex items-center border  px-30 pl-10 ml-5 pr-5 bg-gray-600 rounded-lg'>
                    <Search className='ml-2 text-red-600' />
                    <input
                        type='text'
                        placeholder='نام فیلم. سریال یا انیمیشنی که در نظر دارید'
                        className='py-2 px-25'
                    >

                    </input>
                    <button className='bg-red-600 px-7 py-2 mr-3 rounded-lg'> جستجو </button>
                </div>
            </div>
        </section>



    )
}

export default BoxSearch