import React, { Component, Fragment } from "react";
import Header from "./Header";
import Card from "./CardUI";
import "./Cards.css";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import img1 from "../src/images/Kingsglaive_Final_Fantasy_XV.jpg";
import img2 from "../src/images/Final_Fantasy_Spirits_Within.jpg";
import img3 from "../src/images/Ghost_In_The_Shell_2_0.jpg";
import img4 from "../src/images/Appleseed_Alpha.jpg";
import img5 from "../src/images/Resident_Evil_Vendetta.jpg";
import StarRating from "./StarRating";
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <Header />
          <div className="cardclass">
            <div className="cards">
              <div className="col-md4">
                <Card
                  imageUrl={img1}
                  title="Kingsglaive"
                  subtitle="Final Fantasy XV"
                  description="King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal."
                /> 
                <div className = "App">
                    <StarRating />
                </div>             
              </div>
            </div>
            <div className="cards">
              <div className="col-md4">
                <Card
                  imageUrl={img2}
                  title="Final Fantasy"
                  subtitle="Spirits Within"
                  description="A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms."
                  
                />
                 <div className = "App">
                    <StarRating />
                </div>  
              </div>
            </div>
            <div className="cards">
              <div className="col-md4">
                <Card
                  imageUrl={img3}
                  title="Kingsglaive"
                  subtitle="Final Fantasy XV"
                  description="King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal."
                />
                 <div className = "App">
                    <StarRating />
                </div>  
              </div>
            </div>
            <div className="cards">
              <div className="col-md4">
                <Card
                  imageUrl={img4}
                  title="Kingsglaive"
                  subtitle="Final Fantasy XV"
                  description="King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal."
                />
                 <div className = "App">
                    <StarRating />
                </div>  
              </div>
            </div>
            <div className="cards">
              <div className="col-md4">
                <Card
                  imageUrl={img5}
                  title="Kingsglaive"
                  subtitle="Final Fantasy XV"
                  description="King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal."
                />
                 <div className = "App">
                    <StarRating />
                </div>  
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
