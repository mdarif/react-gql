import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacter } from '../hooks/useCharacter';
import './Character.css';

const Character = () => {
  // Get the character id from the URL
  const { id } = useParams();

  // Get the character data from the hook
  const { data, loading, error } = useCharacter(id);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error!</div>;

  return (
    <div className='Character'>
      <img
        src={data.character.image}
        alt={data.character.name}
        width={750}
        height={750}
      />
      <div className='Character-content'>
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className='Character-episode'>
          {data.character.episode.map((episode) => {
            return (
              <div key={episode.name}>
                {episode.name} - <b>{episode.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Character;
