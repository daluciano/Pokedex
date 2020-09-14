import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./card";
import Pagination from "./Pagination";

export default function PokemonList(props) {
  var [pokemon, setPokemon] = useState([]);
  var [currentPageUrl, setCurrentPageUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=5&offset=${props.offset}`
  );
  var [nextPageUrl, setNextPageUrl] = useState();
  var [prevPageUrl, setPrevPageUrl] = useState();
  var [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setPokemon(res.data.results.map((p) => p));
      });

    return () => cancel();
  }, [currentPageUrl]);

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  if (loading) return "Loading...";

  return (
    <>
      <div className="row">
        {pokemon.map((p, index) => (
          <Card name={p.name} url={p.url} index={index} />
        ))}
      </div>

      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </>
  );
}

/**
import React from "react";
import Card from "./card";
import axios from "axios";

 export default class ListCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://pokeapi.co/api/v2/pokemon/?limit=151",
      pokemon: null,
    };
  }

  async componentDidMount() {
    const res = await axios.get(this.state.url, 30);
    this.setState({ pokemon: res.data["results"] });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map((pokemon, index) => (
              <Card
                style={{ cursor: "pointer" }}
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
                img={pokemon}
                index={index + 1}
              />
            ))}
          </div>
        ) : (
          <h1> Loading Pokemon</h1>
        )}
      </React.Fragment>
    );
  }
}
*/
