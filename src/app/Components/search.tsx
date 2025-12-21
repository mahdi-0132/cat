
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

    return (
        <section className=''>
            <div className='flex items-center mr-10 bg-black/45 rounded-xl space-x-4'>
                <SearchIcon size={25} className='mr-4' />
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className='px-10 py-2 rounded-xl' type='text' placeholder='جستجو ...' >
                </input>
                <button onClick={handleSearch} className='px-6 py-1 bg-red-600 rounded-xl ml-4'>
                    جستجو
                </button>
            </div>
        </section>
    )
}
export default Search