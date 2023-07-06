import Movie from '../Components/Movie/Movie';
import tmdbApi from '../../api/tmdbApi';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from "replace-js-pagination";
import './index.css'

function AllItemsPage() {
  const {id,type,search} = useParams()
  const [loading,setLoading] = useState(true)
  const [page,setPage] = useState(true)
  const [movies,setMovies] = useState([])
  const [activePage, setActivePage] = useState(1);
  const cate = window.location.href.includes("movie")? "movie":"tv";
  const isSearch =  window.location.href.includes("searching")?true:false;
  useEffect(() => {
    const fetchData = async()=>{
        const params ={page:activePage}
      try{
        let response = {};
        if(cate=="movie"){
          if(type=="Similars"){
              response = await tmdbApi.getSimilar("movie",id)
              setPage(false);
          }else if(type=="Recomendations"){
              response = await tmdbApi.getRecommendations("movie",id)
              setPage(false);}
          else{
              response = await tmdbApi.getMovieList(type,{params})
          }
        } else if(isSearch){
          response = await tmdbApi.getColletions(search,{params})
          setPage(false)
        }
        else{
          response = await tmdbApi.getTvList(type,{params})
        }
        setMovies(response.results)
        setLoading(false)
      }catch(err){
        console.log(err);
      }
    }
    fetchData();
  }, [activePage]);
  const handlePageChange = (pageNumber)=>{
    setActivePage(pageNumber)
  }
  useEffect(()=>{console.log(movies)},[movies])
  return (
    <>
        {isSearch && <h2 className='AllItems-heading'>Results for "{search}"</h2>}
        {!isSearch && <h2 className='AllItems-heading'>{type.replaceAll("_"," ")}</h2>}
        <div className='AllItems'>
            {loading &&<div>Loading</div>}
            {!loading &&
            movies.map((movie) => (
                    <Movie key={movie.id} props={movie} cate={cate}/>
                ))
            }
            {
              movies.length==0 && <h2>Not found</h2>
            }
        </div>
        {
            page &&
            <Pagination
                itemClass="page-item"
                linkClass="page-link"
                activePage={activePage}
                itemsCountPerPage={10}
                totalItemsCount={450}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
            />
        }
    </>
  )
}
export default AllItemsPage;