import tmdbApi from '../../../api/tmdbApi';
import apiConfig from '../../../api/apiConfig';
import { useState,useEffect } from 'react';
import './ActorCard.css'

export default function ActorCard({cast}) {
    return (
      <div className="ActorCard">
        <img src={`${apiConfig.originalImage(cast.profile_path)}`}/>
        <div className='ActorCard_info'>
          <h4>{cast.original_name}</h4>
          <p>{cast.character}</p>
        </div>
      </div>
    )
}
