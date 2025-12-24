"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { SearchIcon } from 'lucide-react'

function Search() {
    const [query, setQuery] = useState("")
    const router = useRouter()

    const handleSearch = () => {
        if (!query.trim()) return
        router.push(`/result?q=${encodeURIComponent(query)}`)
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    return (
        <section className=''>
            <div className='flex items-center bg-black/45 rounded-lg sm:rounded-xl space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4'>
                <SearchIcon size={18} className='sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 mr-2 sm:mr-3 md:mr-4' />
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className='px-2 sm:px-3 md:px-4 lg:px-10 py-1 sm:py-1.5 md:py-2 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg w-24 sm:w-32 md:w-40 lg:w-48'
                    type='text' 
                    placeholder='جستجو ...' 
                />
                <button 
                    onClick={handleSearch} 
                    className='px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-1.5 md:py-2 bg-red-600 rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base ml-2 sm:ml-3 md:ml-4'
                >
                    جستجو
                </button>
            </div>
        </section>
    )
}
export default Search