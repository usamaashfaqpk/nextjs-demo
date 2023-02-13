import Head from "next/head";
import { useEffect, useState } from "react";

const Pokemon = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
            const pokemon = await res.json();
            console.log(pokemon);
            console.log(pokemon);
            setState(pokemon.results);
        })();
    }, [])

  return (
    <>
      <Head>
        <title>
          Pokemon | Pokemon Details
        </title>
      </Head>
      <ul>
        {
            state.length > 0 && state.map((item) => {
                return(
                    <li key={item.name}>
                        <p>Url: {item.url}</p>
                        <p>Name: {item.name}</p>
                    </li>
                )
            })
        }
      </ul>
    </>
  );
};

export default Pokemon;