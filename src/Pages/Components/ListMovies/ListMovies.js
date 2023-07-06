import Movie from "../Movie/Movie"
import tmdbApi from '../../../api/tmdbApi'
import Button from "../Button/Button"
import {useState,useEffect } from "react"

import './ListMovies.css'

export default function ListMovies({type,cate,id}) {
  let [movies, setMovies] = useState([])
  let [loading, setLoading] = useState(true)
  useEffect(() => {
    const getMovies = async () => {
      const params = {page: 1}
      try {
        let response ={};
          if(id==null){
            response = await tmdbApi.getMovieList(type, {params});
            setMovies(response.results);
          }else{
            if(cate == "Similars"){
              response = await tmdbApi.getSimilar(cate,id);
            }
            else{
              response = await tmdbApi.getRecommendations(cate,id);
            }
            setMovies(response.results);
          }
          setLoading(false)
      } catch {
          console.log('error');
      }
    }
    getMovies();
  },[]);
  return (
    <div className="listMovies">
      <div className="listMovies_header">
        <h2 className="title">{type.replaceAll("_"," ")}</h2>
        {movies.length>5 &&<Button><a href={`/${cate}/all/${id}/${type}`}>More</a></Button>}
      </div>
      <div className="list">
        <div className="list">
          {movies.map((movie) => (
            <Movie key={movie.id} props={movie} cate={cate} />
          ))}
        </div>
      </div>
    </div>
  )
}
