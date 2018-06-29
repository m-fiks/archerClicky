import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
    <div className="card-container">
        <div className="card" onClick={props.clicked}>
            <div className="img-container">
                <img id={props.id} className="img-responsive" alt={props.name} src={props.image} />
            </div>
        </div> 
    </div>
);

export default ImageCard;