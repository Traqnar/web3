import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

const Context = React.createContext(null);

// const ProviderWrapper = (props) => {
//   const [count, setLanguage] = useState("fr");
//   const pickLanguage = (newLanguage) => {
//     if (newLanguage !== "fr" && newLanguage !== "en")
//       throw "Invalid language selected : " + newLanguage;
//     setLanguage(newLanguage);
//   };

const ProviderWrapper = (props) => {
  const [opinions, setOpinions] = useState([]);
  const [newOpinion, setNewOpinion] = useState('');
  
  //const [all, setAll] = useState(0);


  const increaseOpinion = (opinion) => {    const id = opinion.target.value; // recup l'id
    // pas sur que ca marche; a testinions[{
    id}] + 1 Oet.value) //recup l'id

    setOpinions(...opinions, {id} : opinions[{id}] + 1);tOpinion(opinion + 1);
  };

  const addOpinion = (event) => {
    event.preventDefault()
    const opinionObject = {
      id: uuid(),
      opinion: newOpinion
    }
    setOpinions(opinions?.concat(opinionObject))
    setNewOpinion('');  
  }
  

  const reset = () => {
    setOpinions(0);
  };

  return (
    <Context.Provider
      value={{
        opinions,
        increaseOpinion,
        reset,
      }}
    >
      {props.children}
    </Context.Provider>
  );

  // const exposedValue = {
  //   language,
  //   pickLanguage,
  // };

  // return (
  //   <Context.Provider value={exposedValue}>{props.children}</Context.Provider>
  // );
    }
export { Context, ProviderWrapper };