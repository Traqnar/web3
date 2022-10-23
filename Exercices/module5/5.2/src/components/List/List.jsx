import React from 'react'
import { useContext } from "react";
import { Context as VoteContext } from "../../contexts/VoteContext";
//import {opinions} from "../../contexts/VoteContext";
import Vote from '../Vote/Vote';


function List() {

    const { opinions, increaseOpinion } = useContext(VoteContext);

    return (
        <div>
           <ul>
        {opinions?.map(opinion => 
           <Vote key={opinion.id} opinion={opinion.opinion} />
         )}
        </ul>
        </div>
    )
}

export default Vote