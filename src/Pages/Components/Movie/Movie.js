import apiConfig from '../../../api/apiConfig'
import './Movie.css'
export default function Movie({props,cate}) {
  return (
    <a className='movie' href={`/${cate}/detail/${props.id}`}>
      <img className='movie-img'src={apiConfig.originalImage(props.poster_path)} />
      <div className='movie-content'>
        <div className='movie-name'>{props.title}</div>
        <div className='movie-status'>{props.vote_average}<i class="fa-solid fa-star"></i></div>
      </div>
    </a>

  )
}
