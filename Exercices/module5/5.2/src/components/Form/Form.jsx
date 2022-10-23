import { useState } from "react";

const Form = () => {


  const inputOpinionChangeHandler = (e) => {
    console.log(e.target.value);
    setNewOpinion(e.target.value);
  } 

  return (
     <form onSubmit={console.log("submitted")}>
        <div>
          name: <input value={newOpinion} onChange={inputOpinionChangeHandler} />
        </div>   
        <button type="submit" >add new opinion</button>
        <div>
        </div>
      </form>
      
  );
}

export default Form;


