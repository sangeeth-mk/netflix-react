import React, {useEffect, useState} from 'react'
import axios from '../../axios'
import { imageUrl, API_KEY } from '../../constants/constants'
import './toprated.css'

const Toprated=()=> {

  const [Rated, setToprated] = useState([])

  useEffect(() => {
    axios.get(`movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`)
      .then((response) => {
        console.log(response.data);
        setToprated(response.data.results)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='row'>
        <h2>Top Rated</h2>
        <div className='largeposters'>

        {Rated.slice(0, 16).map((obj)=>
                  <img className='smallposter_img' src={`${imageUrl+obj.backdrop_path}`} alt="" />

        )}
        
        </div>
      
    </div>
  )
}

export default Toprated;
