import React from "react";
 const Card = (props)=>{
    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imageUrl} alt="image1" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">
                    {props.title}
                </h4>
                <h5>{props.subtitle}</h5>
                <p className="card-text text-secondary">
                    {props.description}
                </p>
                    
            </div>
        </div>
    )
}
export default Card;