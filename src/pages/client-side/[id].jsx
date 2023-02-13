import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState } from "react";

const Pokemon = () => {
    const router = useRouter()
    const id = router.query.id
    const [state, setState] = useState([]);

    useEffect(() => {
      if (id !== undefined) {
        (async () => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          const pokemon = await res.json();
          pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id < 10 ? `00${id}` : `0${id}` }.png`;
          console.log(pokemon);
          setState(pokemon);
        })();
      }
    }, [id])

  return (
    <>
      <Head>
        <title>
          Pokemon | Pokemon Details
        </title>
      </Head>
      <h3>Pokemon Name: {state?.name}</h3>
      <h5>Pokemon Image</h5>
      <img src={state?.image} alt={state?.name}></img>
    </>
  );
};

export default Pokemon;