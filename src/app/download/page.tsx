import Actors from "./component/Actors"
import Comments from "./component/comments"
import Downloadmain from "./component/downloadmain"
import DownloadTop from "./component/downloadTop"
function downloadPage() {
  return (
     <div className="bg-gray-800">
            <DownloadTop/>
            <Actors/>
            <Downloadmain/>
            <Comments/>
       </div>
  )
}

export default downloadPage

