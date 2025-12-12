import Homepage from "./Homepage/homepage";
import BoxSearch from "./Components/boxSearch";
import AdvanceSearch from "./Components/Advance/AdvanceSearch";
import SuggestionMovie from "./Components/Suggestion/SuggestionMovie";
import SuggestionSeries from "./Components/Suggestion/suggestionSeries";
import SecondSlider from "./Components/SecondSlider/secondSlider";
import SuggestionAnimation from "./Components/Suggestion/suggestionAnimation";
import SuggestionActionSeriesAndMovies from "./Components/Suggestion/suggestionActionSeriesAndMovies";
import SuggestionDramaSeriesAndMovies from "./Components/Suggestion/suggestionDramaSeriesAndMovies";
import SuggestionComedySeriesAndMovies from "./Components/Suggestion/suggestionComedySeriesAndMovies";
import SuggestionHorrorSeriesAndMovies from "./Components/Suggestion/suggestionHorrorSeriesAndMovies";
import Fotter from "./Components/Fotter/fotter";






export default function Home() {
  return (
    <div className="bg-gray-800">
      <Homepage/>
      <BoxSearch/>
      <AdvanceSearch/>
      <SuggestionMovie/>
      <SuggestionSeries/>
      <SecondSlider/>
      <SuggestionAnimation/>
      <SuggestionActionSeriesAndMovies/>
      <SuggestionDramaSeriesAndMovies/>
      <SuggestionComedySeriesAndMovies/>
      <SuggestionHorrorSeriesAndMovies/>
      <Fotter/>
    </div>
  );
}
