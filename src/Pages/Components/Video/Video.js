import ReactPlayer from 'react-player'
import { useRef } from 'react';
import './Video.css'

export default function Video({path,name}) {
    return (
       <div className='video'>
        <h3>{name}</h3>
          <ReactPlayer width={"100%"} height={"600px"} url={path}
          config={{
            file: {
              attributes: {
                crossOrigin: "true",
                forceVideo:"true"
              }
            }
          }}
          controls />
       </div>
    )
}
