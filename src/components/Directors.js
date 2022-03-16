import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => 
        <div key={director.name}>
          <h3>{director.name}</h3>
            <h4>Movies:</h4>
            <ol>
            {director.movies.map(movie => 
              <li>{movie}</li>
              )}
            </ol>
        </div>
        )}
    </div>
  );
}

export default Directors
