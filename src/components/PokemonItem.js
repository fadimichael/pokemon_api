import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PokemenItem = (props) => {
  const [infos, setInfos] = useState([]);
  const fetchdata2 = () => {
    fetch(`${props.url}`)
      .then((res) => res.json())
      .then((json) => setInfos([json]));
  };
  useEffect(fetchdata2, []);

  return (
    <article>
      {infos.map((elt) => (
        <div key={elt.id}>
          <p>{elt.name}</p>
          <p>#00{elt.id}</p>
          <img src={elt.sprites.front_default} alt="" />
          <Link to={`/pokemon/${elt.id}`}>
            <p>Read Me</p>
          </Link>
        </div>
      ))}
    </article>
  );
};

export default PokemenItem;
