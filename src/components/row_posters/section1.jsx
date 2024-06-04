import React, {useEffect,useState} from 'react'
import axios from '../../axios';
import {API_KEY, imageUrl} from '../../constants/constants'
import Youtube from 'react-youtube'
import './section1.css'

const Originals =()=> {

  const [Originals, setOriginals] = useState([])

  useEffect(() => {
    axios.get(`trending/tv/day?language=en-US&api_key=${API_KEY}`)
      .then((response) => {
        console.log(response.data);
        setOriginals(response.data.results)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  
  const handleMovie=(id)=>{
console.log(id);
  }

  return (
    <div className='row'>
      <h2>NETFLIX ORIGINALS</h2>
      <div className='largeposters'>

        {Originals.slice(0, 16).map((obj)=>
                  <img onClick={()=>handleMovie(obj.id)} className='largeposter_img' src={`${imageUrl+obj.backdrop_path}`} alt="" />

        )}
        
       

      </div>


<Youtube opts={opts} videoId="206586"/>

    </div>

    
  )
}

export default Originals;
