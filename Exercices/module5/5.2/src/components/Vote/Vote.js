import React from 'react'
import { useContext } from "react";
import { Context as VoteContext } from "../../contexts/VoteContext";

function Vote(props) {
    const id = props.id;
    const name = props.name;

    const { opinions, increaseOpinion } = useContext(VoteContext);
    return (
        <div>
            {name} : {opinions[{id}]}
            <button value={id} onClick={increaseOpinion}>Vote</button>
        </div>
    )
}

export default Vote