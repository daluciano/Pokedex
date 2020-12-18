import React, { useState } from "react";
import { IoMdLogIn } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";
import { GiPokecog } from "react-icons/gi";
import { IconContext } from "react-icons";
import "./nav.css";
import ItemModal from "../modal/modal";
import { Link } from "react-router-dom";

export default function Nav() {
  const [showModal, setShowModal] = useState(false);

  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <ItemModal showModal={showModal}></ItemModal>
      <Link
        id="Pokedex"
        to="/Pokedex"
        className="nav-item mainButton"
        style={{ display: "flex" }}
      >
        <IconContext.Provider
          value={{
            color: "white",
            size: "2rem",
            marginTop: "-6px",
            className: " mainButton",
          }}
        >
          <GiPokecog />
        </IconContext.Provider>
        Pokedex
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item ">
            <Link
              to="/Pokedex/First-Generation"
              className="nav-item mainButton"
              style={{ display: "flex", marginLeft: "2rem" }}
            >
              Primera Generación
            </Link>
          </li>
          <li class="nav-item ">
            <Link
              to="/Pokedex/Second-Generation"
              className="nav-item mainButton"
              style={{ display: "flex", marginLeft: "2rem" }}
            >
              Segunda Generación
            </Link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <button
            type="button"
            className="btn btn-primary sigIn"
            style={{ marginRight: "1rem" }}
            onClick={() => {
              setShowModal(!showModal);
            }}
          >
            <FiLogIn /> Iniciar sesión
          </button>
          <button
            type="button"
            className="btn btn-primary sigIn"
            style={{ display: "inline-block" }}
          >
            <IoMdLogIn /> Registrarse
          </button>
        </form>
      </div>
    </nav>
  );
}
