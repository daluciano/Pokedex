import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./card.css";
import axios from "axios";
import ReactCardFlip from "react-card-flip";

const Sprite = styled.img`
  width: 6em !important;
  height: 6em !important;
`;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};
const main_types = Object.keys(colors);

export default function Card(props) {
  const [pokemonName, setPokemonName] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [pokemonIndex, setPokemonIndex] = useState();
  const [pokemonType, setPokemonType] = useState();
  const [pokemonStats, setpokemonStats] = useState([]);
  var [isFlipped, setIsFlipped] = useState(false);
  var [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(props.url, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setPokemonName(res.data.name);
        setImageUrl(
          `https://pokeres.bastionbot.org/images/pokemon/${res.data.id}.png`
        );
        setPokemonIndex(res.data.id);
        setPokemonType(res.data.types[0].type.name);
        setpokemonStats(res.data.stats);
      });

    return () => cancel();
  }, [props]);

  /** async componentDidMount() {
    var res = await Axios.get(
      `https://pokeapi.co/api/v2/pokemon/${this.props.index}`
    );

    this.setState({
      name: this.props.name,
      pokemonIndex: this.props.index,
      imageUrl: `https://pokeres.bastionbot.org/images/pokemon/${this.props.index}.png`,
      type: res.data.types[0].type.name,
    });
  }
 */

  if (loading) return "Loading...";

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        class="pokemon"
        style={{
          backgroundColor: colors[`${pokemonType}`],
          cursor: "pointer",
        }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div class="img-container">
          <img src={imageUrl} alt="${props.name}" />
        </div>
        <div class="info">
          <span class="number">#{pokemonIndex}</span>
          <div class="name">{pokemonName}</div>
        </div>
      </div>

      <div
        class="pokemon"
        style={{
          backgroundColor: colors[`${pokemonType}`],
          cursor: "pointer",
        }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div class="info2">
          {pokemonStats.map((p) => (
            <div>
              <div>{p.stat.name} </div>
              <div className="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: `${p.base_stat}%` }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {p.base_stat}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ReactCardFlip>
  );
}
