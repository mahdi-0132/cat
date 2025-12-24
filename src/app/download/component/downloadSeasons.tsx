"use client"
import { useState } from "react"
import { ChevronDown, Download } from "lucide-react"
import DownloadEpisode from "./downloadEpisode"

export default function Seasons() {
  const [openSeason, setOpenSeason] = useState<number | null>(0)

  const episodes = [
    {
      chapter: "فصل اول",
      downloads: [
        { quality: "480p Bluray", size: "213MB" },
        { quality: "720p Bluray", size: "480MB" },
        { quality: "1080p Bluray", size: "880MB" },
        { quality: "4K Bluray", size: "1.45GB" },
        { quality: "720x260p Bluray", size: "580MB" },
        { quality: "1080p Bluray", size: "980MB" },
      ],
    },
    { chapter: "فصل دوم", downloads: [] },
    { chapter: "فصل سوم", downloads: [] },
    { chapter: "فصل چهارم", downloads: [] },
    { chapter: "فصل پنجم", downloads: [] },
    { chapter: "فصل ششم", downloads: [] },
  ]

  return (
    <section className="space-y-4 sm:space-y-6 mt-6 sm:mt-8 md:mt-10 px-2 sm:px-4 md:px-6 lg:px-8 xl:mr-14">
      {episodes.map((episode, index) => {
        const isOpen = openSeason === index

        return (
          <div key={index} className="w-full max-w-[1500px] mx-auto bg-black/80 rounded-lg sm:rounded-xl">
            <button
              onClick={() => setOpenSeason(isOpen ? null : index)}
              className="w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 md:py-5"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-2 sm:gap-4">
                <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-right">
                  <span className="text-red-600">{episode.chapter}</span>
                </h2>
                <h2 className="font-bold text-base sm:text-lg md:text-2xl text-gray-300">
                  قسمت <span className="text-white">unknown</span>
                </h2>
              <ChevronDown
                className={`transition-transform duration-300 shrink-0 ml-2 sm:ml-4 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-sky-500
                  ${isOpen ? "rotate-180" : ""}`}
                size={24}
                
              />
              </div>
              
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out
                ${isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="px-2 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6">
                <DownloadEpisode/>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
