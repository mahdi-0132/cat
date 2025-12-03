import Link from 'next/link'
import DropdownFilm from './DropdownFilm'
import DropdownSeries from './DropdownSreies'
import DropdownHonar from './DropdownHonar'
import SearchBox from './search'
import Enter from './Enter'
import SignUp from './signup'



function Navbar() {

    return (
        <nav className="w-full flex items-center justify-center absolute top-5 z-50">
            <div className='flex justify-between items-center'>

                <div className='flex items-center border-l-2 border-white pl-4 col-span-1 gap-2'>
                    <div className='h-7 w-10 bg-amber-700'></div>
                    <span className='text-white font-semibold'>سینما سیتی <br />پخش انلاین و دانلود </span>

                </div>

                <ul className='flex items-center gap-6 p-2'>
                    <li className=" font-bold text-xl border-b-2 border-red-600 text-white ">
                        <Link href="/">صفحه اصلی</Link> </li>

                    <li className=" font-bold text-white ">
                        <Link href="#"> فیلم </Link></li>
                    <DropdownFilm />
                    <li className=" font-bold text-white ">
                        <Link href="#"> سریال </Link></li>
                        <DropdownSeries/>

                         <li className=" font-bold text-white ">
                        <Link href="#"> هنرمندان </Link></li>
                            <DropdownHonar/>

                         <li className=" font-bold text-white ">
                        <Link href="#"> درباره ما </Link></li>
                        
 
                </ul>
                    <SearchBox/>
                    <Enter/>
                    <SignUp/>
                   

            </div>
        </nav>
    )
}

export default Navbar