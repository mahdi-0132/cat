"use client"
import { useState } from "react"
import { ChevronDown, Download } from "lucide-react"

function DownloadEpisode() {
  const [openEpisode, setOpenEpisode] = useState<number | null>(0)
  
  const episodes = [
    {
      episode: "قسمت اول",
      downloads: [
        { quality: "480p Bluray", size: "213MB" },
        { quality: "720p Bluray", size: "480MB" },
        { quality: "1080p Bluray", size: "880MB" },
        { quality: "4K Bluray", size: "1.45GB" },
        { quality: "720x260p Bluray", size: "580MB" },
        { quality: "1080p Bluray", size: "980MB" },
      ],
    },
    { 
      episode: "قسمت دوم", 
      downloads: [
        { quality: "480p Bluray", size: "213MB" },
        { quality: "720p Bluray", size: "480MB" },
        { quality: "1080p Bluray", size: "880MB" },
        { quality: "4K Bluray", size: "1.45GB" },
        { quality: "720x260p Bluray", size: "580MB" },
        { quality: "1080p Bluray", size: "980MB" },
      ] 
    },
    { 
      episode: "قسمت سوم", 
      downloads: [
        { quality: "480p Bluray", size: "213MB" },
        { quality: "720p Bluray", size: "480MB" },
        { quality: "1080p Bluray", size: "880MB" },
        { quality: "4K Bluray", size: "1.45GB" },
        { quality: "720x260p Bluray", size: "580MB" },
        { quality: "1080p Bluray", size: "980MB" },
      ] 
    },
    { 
      episode: "قسمت چهارم", 
      downloads: [
        { quality: "480p Bluray", size: "213MB" },
        { quality: "720p Bluray", size: "480MB" },
        { quality: "1080p Bluray", size: "880MB" },
        { quality: "4K Bluray", size: "1.45GB" },
        { quality: "720x260p Bluray", size: "580MB" },
        { quality: "1080p Bluray", size: "980MB" },
      ] 
    },
    { 
      episode: "قسمت پنجم", 
      downloads: [
        { quality: "480p Bluray", size: "213MB" },
        { quality: "720p Bluray", size: "480MB" },
        { quality: "1080p Bluray", size: "880MB" },
        { quality: "4K Bluray", size: "1.45GB" },
        { quality: "720x260p Bluray", size: "580MB" },
        { quality: "1080x260p Bluray", size: "980MB" },
      ] 
    },
  ]

  return (
    <section className="space-y-3 sm:space-y-4 md:space-y-6">
      {episodes.map((episode, index) => {
        const isOpen = openEpisode === index

        return (
          <div key={index} className="w-full bg-black/80 rounded-lg sm:rounded-xl">
            <button
              onClick={() => setOpenEpisode(isOpen ? null : index)}
              className="w-full flex justify-between items-center bg-gray-800/70 rounded-lg sm:rounded-2xl px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-right">
                {episode.episode}
              </h3>
              
              <ChevronDown
                className={`transition-transform duration-300 shrink-0 ml-2 sm:ml-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-sky-500
                  ${isOpen ? "rotate-180" : ""}`}
                size={20}
                
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out mt-3 sm:mt-4 md:mt-6
                ${isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="px-2 sm:px-3 md:px-6 pb-3 sm:pb-4 md:pb-6 space-y-2 sm:space-y-3 md:space-y-4">
                {episode.downloads.length === 0 ? (
                  <p className="text-gray-400 text-xs sm:text-sm text-center py-3 sm:py-4">
                    لینک دانلود هنوز اضافه نشده
                  </p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 bg-gray-800/40 rounded-lg sm:rounded-xl p-2 sm:p-3">
                    {episode.downloads.map((item, i) => (
                      <div 
                        key={i} 
                        className="flex items-center justify-between rounded-lg sm:rounded-2xl bg-gray-800/85 px-3 sm:px-4 py-2 sm:py-3 hover:bg-gray-700/85 transition-colors duration-200"
                      >
                        <div className="flex items-center gap-1 sm:gap-2">
                          <Download size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
                          <span className="text-xs sm:text-sm md:text-base">{item.size}</span>
                        </div>
                        <span className="text-red-500 text-xs sm:text-sm md:text-base text-left ml-2 sm:ml-4">
                          {item.quality}
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