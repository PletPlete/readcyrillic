//import { Segment } from "semantic-ui-react"
import '../App.css';
import React, { Component, SyntheticEvent, useState } from 'react'
import Azbuka from '../Data/azbuka.json'


const UchiAzbuka=()=>{
 
    const [currentBukva, setCurrentBukva] = useState("A");
    const [currentSid, setCurrentSid] = useState(1);
    //let sid:number=1;
    let bk:string = 'А'
  
    const goNext= ()=>{

       
        setCurrentSid(currentSid+1);
        if (currentSid===24) {
            setCurrentSid(1)
        }
        let selectedItem= Azbuka.find(item => item.id === currentSid);
     
          let bk=selectedItem?.bukva
          console.log(bk)
   
          if (typeof bk === 'string') {
            setCurrentBukva(bk)
          }
      
        console.log(currentBukva)
        return currentBukva

    }

    return (
        <div className='scr' onClick={goNext}>
     
        
          <div className="card" >
            <p>{currentBukva}</p>
            </div>

      </div>
     
    )

}
export default UchiAzbuka

