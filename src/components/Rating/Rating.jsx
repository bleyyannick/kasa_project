import React from "react";
import redStar from '../../images/red_star.jpg'; 
import stars from '../../images/stars.png'; 
export function Rating({rate}) {
    const t = new Array(5).fill(0);
   
    const template = t.map((_, index) => {
        if (index + 1 <= rate)
            return <span style={{color: 'red'}} key={index}>
                <img alt="red star" src={redStar} />
            </span>
        else 
            return <span key={index}>
                <img alt=" grey star" src={stars} />
            </span> 

    })

    return <div>{template}</div>
}