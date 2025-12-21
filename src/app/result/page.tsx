"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

interface ImdbResult {
"#TITLE": string
"#YEAR": number
"#IMDB_ID": string,
"#RANK": number
"#ACTORS": string
"#AKA": string
"#IMDB_URL": string
"#IMDB_IV": string
"#IMG_POSTER":string
}

 function ResultPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q")

  const [results, setResults] = useState<ImdbResult[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    if (!query) return

    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await fetch(
          `https://imdb.iamidiotareyoutoo.com/search?q=${query}`
        )

        if (!res.ok) throw new Error("fetch error")

        const data = await res.json()
        setResults(data.description || [])
      } catch (err) {
        setError("خطا در دریافت اطلاعات")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [query])



  if (!query) return <p className="text-center">چیزی سرچ نشده</p>

  if (loading) return <p className="text-center mt-60">در حال جستجو...</p>

  if (error) return <p className="text-center text-red-500">{error}</p>

    return (
    <section className="p-6 mt-24 bg-neutral-800">
      <h1 className="flex items-center justify-center
       text-2xl mb-10 w-full py-8 rounded-2xl text-center bg-red-500">
        نتیجه جستجو برای : 
        <span className="text-black/85 font-bold text-2xl mr-4">{query}</span>
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {results.map((item) => (
          <div
            key={item["#IMDB_ID"]}
            className="bg-black/40 rounded-xl p-6 text-center flex justify-between items-center"
          >
              <img 
              src={item["#IMG_POSTER"]}
              alt={item["#TITLE"]}
               className="max-w-52 h-[300px] rounded-xl"/>
              <div className="flex-col space-y-7">
              <h2 className="font-bold text-xl text-red-500"> {item["#TITLE"]} </h2>

              <div className="flex space-x-4 mr-2">
              <h5 className="font-medium text-gray-400"> سال :
                <span className="text-white"> {item["#YEAR"]} </span>  </h5>
              <h5 className="font-medium text-gray-400"> رتبه فیلم : 
                <span className="text-white"> {item["#RANK"]} </span>  </h5>
              </div>

              <h5 className="font-medium text-gray-400"> بازیگران : <br/>
              <span className="text-white"> {item["#ACTORS"]} </span></h5>

              <a 
              href={item["#IMDB_URL"]}
              target="_blank"
              className="px-6 py-2 bg-red-600/85 rounded-xl"> مشاهده در IMDB</a>
              </div>
              
          </div>
        ))}
      </div>
    </section>
  )
}


export default ResultPage