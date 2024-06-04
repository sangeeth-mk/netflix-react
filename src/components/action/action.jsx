import React, { useState, useEffect } from 'react'
import { API_KEY, imageUrl } from '../../constants/constants'
import axios from '../../axios'
import './action.css'

const Trending=()=> {

  const [Action, setAction] = useState([])

  useEffect(() => {
    axios.get(`discover/movie?include_adult=true&include_video=true&language=en-US&page=2&sort_by=popularity.desc&with_genres=28&api_key=${API_KEY}`)
      .then((response) => {
        console.log(response.data);
        setAction(response.data.results)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='row'>
        <h2>Action Movies</h2>
      <div className='largeposters'>

      {Action.slice(0, 16).map((obj)=>
                  <img className='smallposter_img' src={`${imageUrl+obj.backdrop_path}`} alt="" />

        )}
        

      
      </div>
    </div>
  )
}

export default Trending
