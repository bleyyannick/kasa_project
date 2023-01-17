import React from "react";

import { Thumb } from '..'

import {locations } from '../../data/logements'

export function ThumbList() {

    const thumblist = locations.map(location => <Thumb key={location.id} title={location.title} />)

    return <div>

        {thumblist}
    </div>
}