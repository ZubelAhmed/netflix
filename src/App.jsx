import { useState } from 'react'
import './index.css'

import './App.css'

import data from "./assets/data.json"
import Section from "./components/Section"
  
function App ()
  {
 
  return (
    <>
      <div className="App">
        <h1>Netflix</h1>
       {data.map((type,index)=>{
      return (
        <Section key={index} category={type.category} 
        images={type.images}/>
    //  <div> 
    //   <h2>{type.category}</h2>
    //   {type.images.map((image)=>{
      
    //   return(
    //     <img src={image} alt="image"></img>
    //     );
    //   })}
    //   </div>
      
      );

      
      })}

      </div>
      
    </>
  )
    }

export default App
