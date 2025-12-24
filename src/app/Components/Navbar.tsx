import Link from 'next/link'
import DropdownFilm from './DropdownFilm'
import DropdownSeries from './DropdownSreies'
import DropdownHonar from './DropdownHonar'
import Search from './search'
import Enter from './Enter'
import SignUp from './signup'

function Navbar() {
    return (
        <nav className="w-full flex items-center justify-center absolute top-5 z-50 px-4 sm:px-6 md:px-8 lg:px-12">
            <div className='flex items-center w-full justify-center'>
                <div className='flex items-center border-l-2 border-white pl-2 sm:pl-3 md:pl-4 gap-1 sm:gap-2'>
                    <div className='h-5 w-8 sm:h-6 sm:w-9 md:h-7 md:w-10 bg-amber-700'></div>
                    <span className='text-white font-bold text-xs sm:text-sm md:text-base'>
                        سینما سیتی <br/><span className="text-xs">پخش آنلاین و دانلود</span>
                    </span>
                </div>

                <ul className='flex items-center gap-2 sm:gap-3 p-1 sm:p-2'>
                    <li className="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-white">
                        <Link href="/" >صفحه اصلی</Link>
                        <p className='border-2 border-red-600 px-14'></p>
                    </li>

                    <li className="font-bold text-white text-sm sm:text-base ">
                        <Link href="#">فیلم</Link>
                    </li>
                    <DropdownFilm />
                    
                    <li className="font-bold text-white text-sm sm:text-base ">
                        <Link href="#">سریال</Link>
                    </li>
                    <DropdownSeries/>

                    <li className="font-bold text-white text-sm sm:text-base">
                        <Link href="#">هنرمندان</Link>
                    </li>
                    <DropdownHonar/>

                    <li className="font-bold text-white text-sm sm:text-base">
                        <Link href="#">درباره ما</Link>
                    </li>                       
                </ul>
                
                <div className="flex items-center gap-2 sm:gap-3 ">
                    <Search/>
                    <Enter/>
                    <SignUp/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar