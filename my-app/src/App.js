import React, { Component, Fragment } from "react";
import Header from "./Header";
import Card from "./CardUI";
import movie from "./movies.json";
import "./Cards.css";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import img0 from "../src/images/Kingsglaive_Final_Fantasy_XV.jpg";
import img1 from "../src/images/Final_Fantasy_Spirits_Within.jpg";
import img2 from "../src/images/Ghost_In_The_Shell_2_0.jpg";
import img3 from "../src/images/Appleseed_Alpha.jpg";
import img4 from "../src/images/Resident_Evil_Vendetta.jpg";
import StarRating from "./StarRating";
var arr = [];
arr.push(img0);
arr.push(img1);
arr.push(img2);
arr.push(img3);
arr.push(img4);

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <Header />
          <div className="cardclass">
            {movie.map((movies, index) => {
              return (
                <div className="cards">
                  <div className="col-md4">
                    <Card
                      imageUrl={arr[index]}
                      title={movies.title}
                      subtitle={movies.subtitle}
                      description={movies.description}
                    />
                    <div className="App" >
                      <StarRating rating = {movies.rating}/>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}
