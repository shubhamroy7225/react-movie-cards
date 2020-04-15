import React, { Component } from "react";
import {FaFilm} from "react-icons/fa";
import "./style.css";

export default class Header extends Component {
  render() {
    return (
      <div className="container1">
    <h1><FaFilm size={40}/>{' '}
        React Movie Cards</h1>
      </div>
    );
  }
}

