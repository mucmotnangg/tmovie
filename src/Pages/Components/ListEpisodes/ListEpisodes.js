import './ListEpisodes.css'

function ListEpisodes({episodes,epCurrent,serverCurrent,slug}) {
  let isActive =false;
  return (
    <div className='listEpisodes'>
      {episodes.map((server, index) => (
        <div key={index}>
          <h5 className='server-name'>{server.server_name}</h5>
          {Array.from({ length: server.server_data.length }, (_, i) => {
            isActive = i== epCurrent ? true : false;
            return (
              <button className={`Episode_but ${isActive && serverCurrent==index ? 'active' : ''}`} key={i}>
                <a href={`${slug}-server${index}-tap${i+1}`}>Tap {i + 1}</a>
              </button>
            );
          })}
        </div>
      ))}
    </div>
  )
}

export default ListEpisodes
