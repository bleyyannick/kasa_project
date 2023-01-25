import React from "react";
import redStar from '../../images/red_star.jpg'; 
import stars from '../../images/stars.png';
import styles from './Rating.module.css'; 

export function Rating({rate}) {
    const t = new Array(5).fill(0);
   
    const template = t.map((_, index) => {
        if (index + 1 <= rate)
            return <span key={index}>
                <img className={styles.star} alt="red star" src={redStar} />
            </span>
        else 
            return <span className={styles.star} key={index}>
                <img className={styles.star} alt=" grey star" src={stars} />
            </span> 

    })

    return <div>{template}</div>
}