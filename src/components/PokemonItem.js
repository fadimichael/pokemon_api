import { useEffect, useState } from "react";

const PokemenItem = (props) => {
  console.log("fadi", props.url);
  const [infos, setInfos] = useState([]);
  const fetchdata2 = () => {
    fetch(`${props.url}`)
      .then((res) => res.json())
      .then((json) => setInfos([json]));
  };
  useEffect(fetchdata2, []);
  console.log("elvira", infos);
  return (
    <article>
      {infos.map((elt, index) => (
        <div>
          <p>{elt.name}</p>
          <p>#00{elt.id}</p>
          <img src={elt.sprites.front_default} alt="" />
        </div>
      ))}
    </article>
  );
};

export default PokemenItem;
