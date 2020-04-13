import React,{useState} from "react";
import {FaStar} from "react-icons/fa";
import "./style.css";
const StarRating = ()=>{
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return (
    <div>
        {[...Array(5)].map((star,i)=>{
            const ratingValue = 4.5
            return( 
            <label>
            <input type = "radio" name = "rating" value={ratingValue} onClick = {()=>setRating(ratingValue)}/>
            <FaStar clasname = "star" color = {ratingValue <= (hover || rating) ? "red" : "gray"}
             size = {20}
             onMouseEnter = {()=>setHover(ratingValue)}
             onMouseLeave = {()=>setHover(null)}
             />
            </label>
            );
        })}
        <button className="button">{rating}</button>
    </div> 
    );
}
export default StarRating;