import React, { useState } from "react";
import { IoMdLogIn } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";
import { GiPokecog } from "react-icons/gi";
import { IconContext } from "react-icons";
import "./nav.css";
import ItemModal from "../modal/modal";
import { Link } from "react-router-dom";
import SideBar from "../sidebar/sidebar";

export default function Nav() {
  const [showModal, setShowModal] = useState(false);

  return (
    <nav className="navbar navbar-expand-md " style={{ fontFamily: "cursive" }}>
      <ul className="navbar-nav">
        <Link
          id="Pokedex"
          to="/"
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

        <Link
          to="/Page2"
          className="nav-item mainButton"
          style={{ display: "flex", marginLeft: "2rem" }}
        >
          Segunda Generación
        </Link>
      </ul>
      <ul className="navbar-nav ml-auto" style={{ display: "inline-block" }}>
        <button
          type="button"
          className="btn btn-primary sigIn"
          style={{ marginRight: "1rem" }}
          onClick={() => {
            setShowModal(!showModal);
          }}
        >
          <FiLogIn /> Log in
        </button>
        <ItemModal showModal={showModal}></ItemModal>
        <button
          type="button"
          className="btn btn-primary sigIn"
          style={{ display: "inline-block" }}
        >
          <IoMdLogIn /> Sign up
        </button>
      </ul>
    </nav>
  );
}
