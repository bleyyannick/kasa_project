import React from "react";
import { Thumb } from '..'
import styles from './ThumbList.module.css'
import {locations } from '../../data/logements'

export function ThumbList() {
    const thumblist = locations.map(location => <Thumb key={location.id} location={location} />)
    return <div className={styles.container}>
        {thumblist}
    </div>
}