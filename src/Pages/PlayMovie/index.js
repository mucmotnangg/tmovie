import ListEpisodes from '../Components/ListEpisodes/ListEpisodes';
import ListMovies from '../Components/ListMovies/ListMovies'
import Video from '../Components/Video/Video';
import tmdbApi from '../../api/tmdbApi';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Axios from 'axios'

function PlayMovie() {
  const {id} = useParams()
  const [loading,setLoading] = useState(true)
  const [movie,setMovie] = useState([])
  let type = window.location.href.includes("movie") ? "movie" : "tv";
  useEffect(() => {
    const fetchData = async()=>{
      setLoading(true);
      try{
        const response = await tmdbApi.getVideos(type,id)
        setMovie(response)
      } catch(err){
        console.log(err)
      }
      setLoading(false)
    }
    fetchData();
  }, []);
  useEffect(()=>{
    console.log(movie)
  },[movie])
  return (
    <>
    {loading && <div>Loading</div>}
    {!loading &&
    <div className="PlayMovie">
        {/* <Video path={movie[server].server_data[ep]}/> */}
        {/* <TagInformation name="Tap phim">
          <ListEpisodes episodes={movie} epCurrent={ep} serverCurrent ={server} slug={movieSlug}/>
        </TagInformation> */}
    </div>
    }
    </>
  )
}
export default PlayMovie;