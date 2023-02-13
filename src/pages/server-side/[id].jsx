import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState } from "react";

const Pokemon = (props) => {
  return (
    <>
      <Head>
        <title>
          Pokemon | Pokemon Details
        </title>
      </Head>
      <h3>Pokemon Name: {props?.pokemon?.name}</h3>
      <h5>Pokemon Image</h5>
      <img src={props?.pokemon?.image} alt={props?.pokemon?.name}></img>
    </>
  );
};

export const getServerSideProps = async (context) => {
    const { id } = context.query;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await res.json();
    pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id < 10 ? `00${id}` : `0${id}` }.png`;
    return {
        props: { pokemon },
    };
}

export default Pokemon;