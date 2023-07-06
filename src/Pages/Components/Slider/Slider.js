import tmdbApi,{movieType} from '../../../api/tmdbApi'
import { useEffect,useState } from 'react';
import apiConfig from '../../../api/apiConfig';
import './Slider.css'

function Slider() {
  const [movieItem, setMovieItem] = useState([]);
  const [loading,setLoading] = useState(true)
  useEffect(() => {
      const getMovies = async () => {
          const params = {page: 1}
          try {
              const response = await tmdbApi.getMovieList(movieType.popular, {params});
              setMovieItem(response.results[Math.floor(Math.random() * 4) + 0]);
              console.log(movieItem)
              setLoading(false)
          } catch {
              console.log('error');
          }
      }
      const timer = setTimeout(() => {
        getMovies();
      }, 2000);
    
      return () => {
        clearTimeout(timer);
      };
  }, []);
  return (
    <>
    {!loading &&
      <div className='slider'>
        <img className='slider-img' src={apiConfig.originalImage(movieItem.backdrop_path)}></img>
        <div className='slider-content'>
          <h1 className='slider-name'>{movieItem.title}</h1>
          <h4 className='slider-script'>
            {movieItem.overview}
          </h4>
          <button className='slider_button-play'>
            <a  href={`/movie/detail/${movieItem.id}`}>Play
            <i class="fa-solid fa-play"></i>
            </a> 
          </button>
        </div>
      </div>
    }
    </>
  )
}

export default Slider