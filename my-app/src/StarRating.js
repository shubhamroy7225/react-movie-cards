// import React,{useState} from "react";
// import {FaStar} from "react-icons/fa";
// import "./style.css";
// const StarRating = ()=>{
//     const [rating, setRating] = useState(null);
//     const [hover, setHover] = useState(null);
//     return (
//     <div>
//         {[...Array(5)].map((star,i)=>{
//             const ratingValue = 4.5
//             return( 
//             <label>
//             <input type = "radio" name = "rating" value={ratingValue} onClick = {()=>setRating(ratingValue)}/>
//             <FaStar clasname = "star" color = {ratingValue <= (hover || rating) ? "red" : "gray"}
//              size = {20}
//              onMouseEnter = {()=>setHover(ratingValue)}
//              onMouseLeave = {()=>setHover(null)}
//              />
//             </label>
//             );
//         })}
//         <button className="button">{rating}</button>
//     </div> 
//     );
// }
// export default StarRating;



import React from "react";
import {FaStar} from "react-icons/fa";
import "./style.css";
const width = 110;

const styles = {
    starsInner: {
        width: `${width}px`
    },
    starsEmptyInner: {
        position: 'absolute',
        width: `${width}px`
    },
    starsOuter: {
        overflow: 'hidden'
    },
    star: {
        padding: '1px'
    }
};
const cropWidth = (rating) => {
    return Math.floor(rating * width / 5);
};

const StarRating = (props) => {
    const containerStyle = { width: `${cropWidth(props.rating)}px` };
    

    return (
        <div>
            <div style={styles.starsOuter}>
                <div style={containerStyle}>
                    <div style={styles.starsEmptyInner}>
                        <FaStar className="fa fa-star-o fa-lg" style={styles.star}/>
                        <FaStar className="fa fa-star-o fa-lg" style={styles.star}/>
                        <FaStar className="fa fa-star-o fa-lg" style={styles.star}/>
                        <FaStar className="fa fa-star-o fa-lg" style={styles.star}/>
                        <FaStar className="fa fa-star-o fa-lg" style={styles.star}/>
                        
                    </div>
                    <div style={styles.starsInner}>
                    <FaStar className="fa fa-star fa-lg" style={styles.star}/>
                    <FaStar className="fa fa-star fa-lg" style={styles.star}/>
                    <FaStar className="fa fa-star fa-lg" style={styles.star}/>
                    <FaStar className="fa fa-star fa-lg" style={styles.star}/>
                    <FaStar className="fa fa-star fa-lg" style={styles.star}/>
                    </div>
                </div>
            </div>
            <button className="button">{props.rating}</button>
        </div>
    );
};

export default StarRating;



