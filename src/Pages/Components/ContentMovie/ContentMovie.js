import apiConfig from '../../../api/apiConfig'
import Button from '../Button/Button'
import './ContentMovie.css'

export default function ContentMovie({detail}) {

  return (
    <div className="contentMovie" style={{ backgroundImage: `url(${apiConfig.originalImage(detail.backdrop_path)})` }}>
      <div className='contentMovie_img'>
        <img src={apiConfig.originalImage(detail.poster_path)}/>
        <div className='contentMovie_buttons'>
        </div>
        </div>
        <div className="contentMovie_info">
          <h2 className="contentMovie_info-title">{detail.title}</h2>
          <div className='contentMovie_info-status'>
            <Button style={{height:'60px',color:'white'}}>
              <a href={`/movie/play/${detail.id}`}>
                Play <i class="fa-solid fa-play"></i>
              </a>
            </Button>
            <Button style={{height:'60px',color:'white'}}>Vote Average: {detail.vote_average} <i class="fa-solid fa-star"></i></Button>
          </div>
          <ul className="contentMovie_info-detail">
            <li>Run time: {detail.runtime} mins</li>
            <li>
            Genres: {detail.genres.map((c) => (
              <a key={c.id}>{c.name}</a>
            )).reduce((prev, curr) => [prev, ", ", curr])}
            </li>
            { detail["production_countries"].length>0 && <li>
            Countries: {detail.production_countries.map((c) => (
              <a key={c.name}>{c.name}</a>
            )).reduce((prev, curr) => [prev, ", ", curr])}
            </li>}
            <li>Popularity: {detail.popularity}</li>
            <li>Vote count: {detail.vote_count}</li>
            <li>Status: {detail.status}</li>
            <li>Release Date: {detail.release_date}</li>
            <li>overview: {detail.overview}</li>
          </ul>
      </div>
    </div>
  )
}
