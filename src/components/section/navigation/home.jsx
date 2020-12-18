import React from "react";
import styles from "../../section/section.module.css";
import ListCards from "../elements/list";

export default function Home() {
  return (
    <div>
      <div className="col container" style={{ width: "50%" }}>
        <h1 className={styles.Title}>
          Bienvenido a la primera versión de la Pokedex.
        </h1>
        <h3 className={styles.Title}>
          El sitio se encuentra actualmente en desarrollo, y la funcionalidad
          actual es poder visualizar los pokemons de 1ra y 2da generacion.
          Próxima versión apunta a mejorar el diseño responsive, información más
          detallada de los pokemons y el correcto funcionamiento de los botones
          log-in/sign-in , asi como también un sistema de búsqueda para pokemons.
        </h3>
      </div>
    </div>
  );
}
