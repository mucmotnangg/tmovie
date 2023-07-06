import ListMovies from "../Components/ListMovies/ListMovies";
import Slider from "../Components/Slider/Slider"
import { movieType } from "../../api/tmdbApi";
import './index.css'
function HomePage() {
  return (
    <div className="homePage">
      <Slider />
      {
        Object.entries(movieType).map(([key, value]) => (
          <ListMovies key={key} type={value} cate={"movie"} />
        ))
      }

    </div>
  )
}
export default HomePage;
