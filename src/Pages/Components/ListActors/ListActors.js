import tmdbApi from '../../../api/tmdbApi';
import ActorCard from '../ActorCard/ActorCard';
import { useState,useEffect } from 'react';
import './ListActors.css'

export default function ListActors({cate,id}) {
    let [casts, setCasts] = useState([])
    let [loading, setLoading] = useState(true)
    useEffect(() => {
      const getMovies = async () => {
        try {
            const response = await tmdbApi.getCredits(cate,id)
            setCasts(response.cast);
            setLoading(false)
          } catch {
            console.log('error');
          }
        }
        getMovies();
      },[]);
    return (
      <div className="ListActors">
        <h2 className="title">Actor</h2>
        <div className="list">
          <div className="list">
            {casts.map((cast) => (
                cast.profile_path &&
                <ActorCard cast={cast}></ActorCard>
            ))}
          </div>
        </div>
      </div>
    )
}
