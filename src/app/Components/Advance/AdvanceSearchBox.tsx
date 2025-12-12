"use client"
import { ChevronDown } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'


function AdvanceSearchBox({ label, options, value, onChane }: any) {
    // [{id : 0 , name : "dune" , value = "Dune"},{}]

    const [open, setOpen] = useState(false)
    const selectRf = useRef<any>(null)
    const [selectedMovie, setSelectedMovie] = useState<any>();
    

    useEffect(() => {
        const handler = (e: any) => {
            if (selectRf.current && !selectRf.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler)
    }, [])
    return (

        <div className=' flex-col flex  w-full' ref={selectRf}>
            <label className="block text-white mb-1 mr-2"> {label} </label>

            <button onClick={() => setOpen(!open)}
                className='w-full bg-neutral-800 border border-neutral-600 rounded-3xl p-3 flex justify-between items-center'
            >
                <span> {selectedMovie?.name || "همه"} </span>
                <ChevronDown
                    className={`text-red-600 transition-transform duration-300 ${open ? "rotate-180" : ""
                        }`}
                    size={20}
                />
            </button>
            <div className={` bg-neutral-800 border border-neutral-600 rounded-lg overflow-hidden transition-all duration-300
        ${open ? "max-h-60 opacity-100 mt-1 " : "max-h-0 opacity-0"} `}>
                {options.map((opt: any, i: number) => (
                    <div key={i}
                        onClick={() => setSelectedMovie(opt)}
                        className='p-3 hover:bg-neutral-700 cursor-pointer text-white'
                    >
                        {opt.name}
                    </div>
                ))}
            </div>
            
        </div>


    )
}


export default AdvanceSearchBox




export function AdvanceSearch1({ label, options, value, onChane }: any) {

    const [open, setOpen] = useState(false)
    const selectRf = useRef<any>(null)
    const [selectedMovie, setSelectedMovie] = useState<any>();
    

    useEffect(() => {
        const handler = (e: any) => {
            if (selectRf.current && !selectRf.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler)
    }, [])
  return (
     <div className=' flex-col flex  w-full' ref={selectRf}>
            <label className="block text-white mb-1 mr-2"> {label} </label>

            <button onClick={() => setOpen(!open)}
                className='w-full bg-neutral-800 border border-neutral-600 rounded-3xl p-3 flex justify-between items-center'
            >
                <span> {selectedMovie?.name || "همه"} </span>
                <ChevronDown
                    className={`text-red-600 transition-transform duration-300 ${open ? "rotate-180" : ""
                        }`}
                    size={20}
                />
            </button>
            <div className={` bg-neutral-800 border border-neutral-600 rounded-lg overflow-hidden transition-all duration-300
        ${open ? "max-h-60 opacity-100 mt-1 " : "max-h-0 opacity-0"} `}>
                {options?.map((otp: any, i: number) => (
                    <div key={i}
                        onClick={() => setSelectedMovie(otp)}
                        className='p-3 hover:bg-neutral-700 cursor-pointer text-white'
                    >
                        {otp.name}
                    </div>
                ))}
            </div>
            
        </div>


  )
}




export function AdvanceSearch2({ label, options, value, onChane }: any) {

    const [open, setOpen] = useState(false)
    const selectRf = useRef<any>(null)
    const [selectedMovie, setSelectedMovie] = useState<any>();
    

    useEffect(() => {
        const handler = (e: any) => {
            if (selectRf.current && !selectRf.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler)
    }, [])
  return (
     <div className=' flex-col flex  w-full' ref={selectRf}>
            <label className="block text-white mb-1 mr-2"> {label} </label>

            <button onClick={() => setOpen(!open)}
                className='w-full bg-neutral-800 border border-neutral-600 rounded-3xl p-3 flex justify-between items-center'
            >
                <span> {selectedMovie?.name || "همه"} </span>
                <ChevronDown
                    className={`text-red-600 transition-transform duration-300 ${open ? "rotate-180" : ""
                        }`}
                    size={20}
                />
            </button>
            <div className={` bg-neutral-800 border border-neutral-600 rounded-lg overflow-hidden transition-all duration-300
        ${open ? "max-h-60 opacity-100 mt-1 " : "max-h-0 opacity-0"} `}>
                {options?.map((otp: any, i: number) => (
                    <div key={i}
                        onClick={() => setSelectedMovie(otp)}
                        className='p-3 hover:bg-neutral-700 cursor-pointer text-white'
                    >
                        {otp.name}
                    </div>
                ))}
            </div>
            
        </div>


  )
}



export function AdvanceSearch3({ label, options, value, onChane }: any) {

    const [open, setOpen] = useState(false)
    const selectRf = useRef<any>(null)
    const [selectedMovie, setSelectedMovie] = useState<any>();
    

    useEffect(() => {
        const handler = (e: any) => {
            if (selectRf.current && !selectRf.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler)
    }, [])
  return (
     <div className=' flex-col flex  w-full' ref={selectRf}>
            <label className="block text-white mb-1 mr-2"> {label} </label>

            <button onClick={() => setOpen(!open)}
                className='w-full bg-neutral-800 border border-neutral-600 rounded-3xl p-3 flex justify-between items-center'
            >
                <span> {selectedMovie?.name || "انتخاب نشده"} </span>
                <ChevronDown
                    className={`text-red-600 transition-transform duration-300 ${open ? "rotate-180" : ""
                        }`}
                    size={20}
                />
            </button>
            <div className={` bg-neutral-800 border border-neutral-600 rounded-lg overflow-hidden transition-all duration-300
        ${open ? "max-h-60 opacity-100 mt-1 " : "max-h-0 opacity-0"} `}>
                {options?.map((otp: any, i: number) => (
                    <div key={i}
                        onClick={() => setSelectedMovie(otp)}
                        className='p-3 hover:bg-neutral-700 cursor-pointer text-white'
                    >
                        {otp.name}
                    </div>
                ))}
            </div>
            
        </div>


  )
}




export function AdvanceSearch4({ label, options, value, onChane }: any) {

    const [open, setOpen] = useState(false)
    const selectRf = useRef<any>(null)
    const [selectedMovie, setSelectedMovie] = useState<any>();
    

    useEffect(() => {
        const handler = (e: any) => {
            if (selectRf.current && !selectRf.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler)
    }, [])
  return (
     <div className=' flex-col flex  w-full' ref={selectRf}>
            <label className="block text-white mb-1 mr-2"> {label} </label>

            <button onClick={() => setOpen(!open)}
                className='w-full bg-neutral-800 border border-neutral-600 rounded-3xl p-3 flex justify-between items-center'
            >
                <span> {selectedMovie?.name || "همه"} </span>
                <ChevronDown
                    className={`text-red-600 transition-transform duration-300 ${open ? "rotate-180" : ""
                        }`}
                    size={20}
                />
            </button>
            <div className={` bg-neutral-800 border border-neutral-600 rounded-lg overflow-hidden transition-all duration-300
        ${open ? "max-h-60 opacity-100 mt-1 " : "max-h-0 opacity-0"} `}>
                {options?.map((otp: any, i: number) => (
                    <div key={i}
                        onClick={() => setSelectedMovie(otp)}
                        className='p-3 hover:bg-neutral-700 cursor-pointer text-white'
                    >
                        {otp.name}
                    </div>
                ))}
            </div>
            
        </div>


  )
}




export function AdvanceSearch5({ label, options, value, onChane }: any) {

    const [open, setOpen] = useState(false)
    const selectRf = useRef<any>(null)
    const [selectedMovie, setSelectedMovie] = useState<any>();
    

    useEffect(() => {
        const handler = (e: any) => {
            if (selectRf.current && !selectRf.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler)
    }, [])
  return (
     <div className=' flex-col flex  w-full' ref={selectRf}>
            <label className="block text-white mb-1 mr-2"> {label} </label>

            <button onClick={() => setOpen(!open)}
                className='w-full bg-neutral-800 border border-neutral-600 rounded-3xl p-3 flex justify-between items-center'
            >
                <span> {selectedMovie?.name || "انتخاب نشده"} </span>
                <ChevronDown
                    className={`text-red-600 transition-transform duration-300 ${open ? "rotate-180" : ""
                        }`}
                    size={20}
                />
            </button>
            <div className={` bg-neutral-800 border border-neutral-600 rounded-lg overflow-hidden transition-all duration-300
        ${open ? "max-h-60 opacity-100 mt-1 " : "max-h-0 opacity-0"} `}>
                {options?.map((otp: any, i: number) => (
                    <div key={i}
                        onClick={() => setSelectedMovie(otp)}
                        className='p-3 hover:bg-neutral-700 cursor-pointer text-white'
                    >
                        {otp.name}
                    </div>
                ))}
            </div>
            
        </div>


  )
}




export function AdvanceSearch6({ label, options, value, onChane }: any) {

    const [open, setOpen] = useState(false)
    const selectRf = useRef<any>(null)
    const [selectedMovie, setSelectedMovie] = useState<any>();
    

    useEffect(() => {
        const handler = (e: any) => {
            if (selectRf.current && !selectRf.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler)
    }, [])
  return (
     <div className=' flex-col flex  w-full' ref={selectRf}>
            <label className="block text-white mb-1 mr-2"> {label} </label>

            <button onClick={() => setOpen(!open)}
                className='w-full bg-neutral-800 border border-neutral-600 rounded-3xl p-3 flex justify-between items-center'
            >
                <span> {selectedMovie?.name || "انتخاب نشده"} </span>
                <ChevronDown
                    className={`text-red-600 transition-transform duration-300 ${open ? "rotate-180" : ""
                        }`}
                    size={20}
                />
            </button>
            <div className={` bg-neutral-800 border border-neutral-600 rounded-lg overflow-hidden transition-all duration-300
        ${open ? "max-h-60 opacity-100 mt-1 " : "max-h-0 opacity-0"} `}>
                {options?.map((otp: any, i: number) => (
                    <div key={i}
                        onClick={() => setSelectedMovie(otp)}
                        className='p-3 hover:bg-neutral-700 cursor-pointer text-white'
                    >
                        {otp.name}
                    </div>
                ))}
            </div>
            
        </div>


  )
}



export function AdvanceSearch7({ label, options, value, onChane }: any) {

    const [open, setOpen] = useState(false)
    const selectRf = useRef<any>(null)
    const [selectedMovie, setSelectedMovie] = useState<any>();
    

    useEffect(() => {
        const handler = (e: any) => {
            if (selectRf.current && !selectRf.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler)
    }, [])
  return (
     <div className=' flex-col flex  w-full' ref={selectRf}>
            <label className="block text-white mb-1 mr-2"> {label} </label>

            <button onClick={() => setOpen(!open)}
                className='w-full bg-neutral-800 border border-neutral-600 rounded-3xl p-3 flex justify-between items-center'
            >
                <span> {selectedMovie?.name || "انتخاب نشده"} </span>
                <ChevronDown
                    className={`text-red-600 transition-transform duration-300 ${open ? "rotate-180" : ""
                        }`}
                    size={20}
                />
            </button>
            <div className={` bg-neutral-800 border border-neutral-600 rounded-lg overflow-hidden transition-all duration-300
        ${open ? "max-h-60 opacity-100 mt-1 " : "max-h-0 opacity-0"} `}>
                {options?.map((otp: any, i: number) => (
                    <div key={i}
                        onClick={() => setSelectedMovie(otp)}
                        className='p-3 hover:bg-neutral-700 cursor-pointer text-white'
                    >
                        {otp.name}
                    </div>
                ))}
            </div>
            
        </div>


  )
}




export function AdvanceSearch8({ label, options, value, onChane }: any) {

    const [open, setOpen] = useState(false)
    const selectRf = useRef<any>(null)
    const [selectedMovie, setSelectedMovie] = useState<any>();
    

    useEffect(() => {
        const handler = (e: any) => {
            if (selectRf.current && !selectRf.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler)
    }, [])
  return (
     <div className=' flex-col flex  w-full' ref={selectRf}>
            <label className="block text-white mb-1 mr-2"> {label} </label>

            <button onClick={() => setOpen(!open)}
                className='w-full bg-neutral-800 border border-neutral-600 rounded-3xl p-3 flex justify-between items-center'
            >
                <span> {selectedMovie?.name || "همه"} </span>
                <ChevronDown
                    className={`text-red-600 transition-transform duration-300 ${open ? "rotate-180" : ""
                        }`}
                    size={20}
                />
            </button>
            <div className={` bg-neutral-800 border border-neutral-600 rounded-lg overflow-hidden transition-all duration-300
        ${open ? "max-h-60 opacity-100 mt-1 " : "max-h-0 opacity-0"} `}>
                {options?.map((otp: any, i: number) => (
                    <div key={i}
                        onClick={() => setSelectedMovie(otp)}
                        className='p-3 hover:bg-neutral-700 cursor-pointer text-white'
                    >
                        {otp.name}
                    </div>
                ))}
            </div>
            
        </div>


  )
}




export function AdvanceSearch9({ label, options, value, onChane }: any) {

    const [open, setOpen] = useState(false)
    const selectRf = useRef<any>(null)
    const [selectedMovie, setSelectedMovie] = useState<any>();
    

    useEffect(() => {
        const handler = (e: any) => {
            if (selectRf.current && !selectRf.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler)
    }, [])
  return (
     <div className=' flex-col flex  w-full' ref={selectRf}>
            <label className="block text-white mb-1 mr-2"> {label} </label>

            <button onClick={() => setOpen(!open)}
                className='w-full bg-neutral-800 border border-neutral-600 rounded-3xl p-3 flex justify-between items-center'
            >
                <span> {selectedMovie?.name || "به تو ربطی نداره"} </span>
                <ChevronDown
                    className={`text-red-600 transition-transform duration-300 ${open ? "rotate-180" : ""
                        }`}
                    size={20}
                />
            </button>
            <div className={` bg-neutral-800 border border-neutral-600 rounded-lg overflow-hidden transition-all duration-300
        ${open ? "max-h-60 opacity-100 mt-1 " : "max-h-0 opacity-0"} `}>
                {options?.map((otp: any, i: number) => (
                    <div key={i}
                        onClick={() => setSelectedMovie(otp)}
                        className='p-3 hover:bg-neutral-700 cursor-pointer text-white'
                    >
                        {otp.name}
                    </div>
                ))}
            </div>
            
        </div>


  )
}