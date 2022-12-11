import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleContent from '../single-content/singleContent';
import './movies.css';

export default function MovieContainer() {
  const [content, setContent] = useState([]);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=4787c12f121422364a0dba37d88bc117&language=en-US&page=1`
    );

    console.log(data.results);
    setContent(data.results);
  }

  useEffect(() => {
    fetchMovies();
  }, [])

  return (
    <div className='top-rated-movies'>
      {content && content.map((c) => (
        <SingleContent
          key={c.id}
          id={c.id}
          poster={c.poster_path}
          title={c.title}
          date={c.release_date}
          vote_average={c.vote_average}
          popularity={c.popularity}
        />
      ))}
    </div>
  );
}