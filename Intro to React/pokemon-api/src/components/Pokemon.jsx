import { useEffect, useState } from "react";
import axios from "axios";
export default function Pokemon() {
  const [query, setQuery] = useState();
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      // await fetch('https://pokeapi.co/api/v2/pokemon')
      //   .then((response) => {
      //     return response.json();
      //   })
      //   .then((response) => {
      //     setPokemon(response.results);
      //     console.log(response);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
        setPokemon(response.data.results);
      });
    }
    fetchPokemon();
  }, [query]);

  function handleClick() {
    setQuery(!query);
  }
  return (
    <div>
      <button onClick={handleClick}>Fetch Pokemon</button>
      {query && (
        <ul>
          {pokemon.length > 0 &&
            pokemon.map((poke, index) => {
              return <li key={index}> {poke.name}</li>;
            })}
        </ul>
      )}
    </div>
  );
}
