import React from "react";
import './card.scss';

const Card = ({title, imageUrl, detail, type1, date, type2})=>{
    return(
        <div className="card flex">
            <div className="card-img">
                <img src={imageUrl} alt="" />
            </div>
            <div className="card-text flex">
                <h1 className="primary-heading">{title}</h1>
                <p>{detail}</p>
                    <div className="card-footer flex">
                    <div className="type1">{type1}</div>
                    <div className="date">{date}</div>
                    <div className="type2">{type2}</div>
                </div>
            </div>
        </div>
    )
}
export default Card