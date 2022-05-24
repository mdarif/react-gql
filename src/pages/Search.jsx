import { gql, useLazyQuery } from '@apollo/client';
import React, { useState } from 'react';

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

function Search() {
  const [name, setName] = useState('');

  /**
   * useLazyQuery hook
   * it does not immediately execute its associated query. Instead, it returns a
   * query function in its result tuple that you call whenever you're ready
   * to execute the query.
   */
  const [getLocations, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );

  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => getLocations()}>Search</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error :(</p>}

      {data && (
        <ul>
          {data.characters.results.map((result) => {
            return <li>{result.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default Search;
