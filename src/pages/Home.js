import { useState, useEffect } from "react";
import PokemenItem from "../components/PokemonItem";
import PokemonItemDetail from "../components/PokemonItemDetail";
import pokemonimg from "../imgs/pokemon.svg";
const Home = () => {
  const [info, setInfo] = useState([]);
  const fetchData = () => {
    fetch(" https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((json) => setInfo(json.results));
  };
  useEffect(fetchData, []);
  // console.log("info", info);
  return (
    <>
      <img src={pokemonimg} alt="" />
      {info.map((element, index) => (
        <PokemenItem key={index} url={element.url} />
      ))}
    </>
  );
};

export default Home;
