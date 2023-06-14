import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import './Row.css';

const Row = ({title,fetchUrl,isLargeRow=false}) => {

    const [movies,setMovies]=useState([]);

    const baseUrl="https://image.tmdb.org/t/p/original/";

    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl])
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="row-posters">
      {movies.map((movie)=>(
        ((isLargeRow && movie.poster_path) || 
        (!isLargeRow && movie.backdrop_path)) && (
            <img
            key={movie.id}
            src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name}
            className={`row-poster ${isLargeRow && "row-posterLarge"}`} />
        )
        
      ))}
      </div>
    </div>
  )
}

export default Row
