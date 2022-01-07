import React from "react";
import './cards.scss'

import { data } from "../../data";
import Card from "../card/card";

const Cards = ()=>{
    return(
        <div className="cards">
            {data.map(({id,...cardDetails},i) =><Card key={i} {...cardDetails} />)}
        </div>
    )
}
export default Cards;