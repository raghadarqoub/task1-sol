import React from 'react'
import { useState } from 'react'

export default function State() {
const [name, setName] = useState("Raghad");
function buttonCliked() {
    if(name === "Aylol ")
        setName("Raghad ");
    else{
        setName("Aylol");
    }
}
return (
    <>
    <button onClick={buttonCliked}>Change</button>
    <h1>{name}</h1>
    </>
)
}
    