"use client"
import { useState } from "react"
import { ChevronDown, Download } from "lucide-react"



function DownloadEpisode() {
  const [openSeason, setOpenSeason] = useState<number | null>(0)
  
  
  const episods = [
    {
      episode: " قسمت اول",
    
      downloads: [
        { quality: "480p Bluray", size: "213MB" },
        { quality: "720p Bluray", size: "480MB" },
        { quality: "1080p Bluray", size: "880MB" },
        { quality: "4K Bluray", size: "1.45MB" },
        { quality: "720x260p Bluray", size: "580MB" },
        { quality: "1080p Bluray", size: "980MB" },
      ],
    },
  
    { episode: "قسمت دوم", downloads: [
           { quality: "480p Bluray", size: "213MB" },
        { quality: "720p Bluray", size: "480MB" },
        { quality: "1080p Bluray", size: "880MB" },
        { quality: "4K Bluray", size: "1.45MB" },
        { quality: "720x260p Bluray", size: "580MB" },
        { quality: "1080p Bluray", size: "980MB" },
    ] },

    { episode: "قسمت سوم", downloads: [
           { quality: "480p Bluray", size: "213MB" },
        { quality: "720p Bluray", size: "480MB" },
        { quality: "1080p Bluray", size: "880MB" },
        { quality: "4K Bluray", size: "1.45MB" },
        { quality: "720x260p Bluray", size: "580MB" },
        { quality: "1080p Bluray", size: "980MB" },
    ] },


    { episode: "قسمت چهارم", downloads: [
           { quality: "480p Bluray", size: "213MB" },
        { quality: "720p Bluray", size: "480MB" },
        { quality: "1080p Bluray", size: "880MB" },
        { quality: "4K Bluray", size: "1.45MB" },
        { quality: "720x260p Bluray", size: "580MB" },
        { quality: "1080p Bluray", size: "980MB" },
    ] },


    { episode: "قسمت پنجم", downloads: [
           { quality: "480p Bluray", size: "213MB" },
        { quality: "720p Bluray", size: "480MB" },
        { quality: "1080p Bluray", size: "880MB" },
        { quality: "4K Bluray", size: "1.45MB" },
        { quality: "720x260p Bluray", size: "580MB" },
        { quality: "1080x260p Bluray", size: "980MB" },
    ] },
    
  ]
  return (
        <section className="space-y-6">

      {episods.map((episode, index) => {
        const isOpen = openSeason === index

        return (
          <div key={index} className="w-[1450px] bg-black/80 rounded-xl mr-6">


            <button
              onClick={() => setOpenSeason(isOpen ? null : index)}
              className="w-full flex justify-between items-center bg-gray-800/70 rounded-2xl px-6 py-5"
            >
                <h3 className="text-xl font-bold">
                  {episode.episode}
                </h3>
              <ChevronDown
                className={`transition-transform duration-300 text-sky-500 ${isOpen ? "rotate-180 text-sky-400" : "text-gray-400"
                  }`}
                size={50}

              />
            </button>


            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out
              ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
              `}
            >
              <div className="overflow-hidden px-6 pb-6 space-y-4">

                {episode.downloads.length == 0 ? (
                   <p className="text-gray-400 text-sm text-center py-4">
                                لینک دانلود هنوز اضافه نشده
                        </p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-gray-800/40 rounded-xl">
                    {episode.downloads.map((item , i )=>(
                      <div key={i} className="flex  items-center rounded-2xl bg-gray-800/85 px-4 py-3">
                          <span className="flex items-center">
                            <Download size={20} />
                            {item.size}
                           <span className="text-red-500 mr-60"> {item.quality} </span>
                          </span>
                      </div>
                    ))}
                  
                </div>
                )}
                

              </div>
            </div>

          </div>
        )
      })}

    </section>

  )
}

export default DownloadEpisode