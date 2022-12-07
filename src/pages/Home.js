import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PokemenItem from "../components/PokemonItem";
import PokemonItemDetail from "../components/PokemonItemDetail";
import pokemonimg from "../imgs/pokemon.svg";
import menu from "../imgs/menu.svg";
import togel from "../imgs/Vector.svg";
import "./Home.css";
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
    <section className="pokemon-liste">
      <img className="logo" src={pokemonimg} alt="" />
      <div className="searchbar">
        <Link to="/">
          <img src={menu} alt="" />{" "}
        </Link>
        <input type="text" name="" id="" placeholder="Search Pokemon" />
        <img src={togel} alt="" />
      </div>
      <article className="grid">
        {info.map((element, index) => (
          <PokemenItem key={index} url={element.url} />
        ))}
      </article>
    </section>
  );
};

export default Home;
