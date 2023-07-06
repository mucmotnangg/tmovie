import ContentMovie from '../Components/ContentMovie/ContentMovie'
import ListActors from '../Components/ListActors/ListActors';
import ListMoVies from '../Components/ListMovies/ListMovies'
import Video from '../Components/Video/Video'
import tmdbApi from '../../api/tmdbApi';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import './index.css'
import apiConfig from '../../api/apiConfig';

function DetailMovie() {
  const {id} = useParams()
  const [loading,setLoading] = useState(true)
  const [movie,setMovie] = useState([])
  const [video,setVideo] = useState([])
  const [notFound,setNotFound]=useState(false)
  let cate = window.location.href.includes("movie") ? "movie" : "tv";
  useEffect(() => {
    const fetchData = async()=>{
      try{
        const response = await tmdbApi.getDetails(cate,id)
        const res2=await tmdbApi.getVideos(cate,id);
        const temp = res2.results.filter(vid =>  vid.type.includes("Trailer"));
        if(temp.length > 0){
          setVideo(temp)
        }
        else{
          setVideo(res2.results)
        }
        setMovie(response)
        setLoading(false)
        console.log(movie)
      }catch(err){
        console.log(err);
        setNotFound(true)
      }
    }
    fetchData();
  }, []);
  useEffect(()=>{console.log("hi")
    console.log(video)},[video])
  return (
    <>
    {notFound && <div className="notFound">Khong tim thay ket qua</div>}
    {loading &&!notFound&& <div>Loading</div>}
    {!loading &&
    <div className="DetailMovie">
        <ContentMovie detail={movie}/>
        <ListActors cate={cate} id={id}></ListActors>{
          video.length>0 && <Video path={apiConfig.videoYoutube(video[0].key)} name={"Trailer"}/>
        }
        <ListMoVies type={"Similars"} cate={cate} id={id}/>
        <ListMoVies type={"Recomendations"} cate={cate} id={id}/>
    </div>
    }
    </>
  )
}
export default DetailMovie;