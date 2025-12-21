import Actors from "./component/Actors"
import Downloadmain from "./component/downloadmain"
import DownloadTop from "./component/downloadTop"
function downloadPage() {
  return (
     <div className="bg-gray-800 py-96">
            <DownloadTop/>
            <Actors/>
            <Downloadmain/>
       </div>
  )
}

export default downloadPage

