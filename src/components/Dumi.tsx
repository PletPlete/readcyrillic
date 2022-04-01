import { useState } from "react";
import Dumi from '../Data/parvidumi.json'
import '../App.css';


const ParviDumiCvqt=()=>{

 const  [currentDu, setCurrentDu] = useState("MA");
  const [currentMa, setCurrentMa] = useState("MA");
  const [currentDuMa, setCurrentDuMa] = useState("MAMA");
    const [currentSid, setCurrentSid] = useState(1);
    //let sid:number=1;
    let du:string = 'MA'
    let ma:string = 'MA'
  
    const goNext= ()=>{

       
       
        if (currentSid===3) {
            setCurrentSid(1)
        }
        else{
            setCurrentSid(currentSid+1);
        }

        let selectedItem= Dumi.find(item => item.id === currentSid);
     
          let duma=selectedItem?.srichka1+"-"+selectedItem?.srichka2
          console.log(duma)
   
          if (typeof duma === 'string') {
            setCurrentDuMa(duma)
          }
      
        console.log(currentDuMa)
        return currentDuMa

    }

    return (
        <div className='scr' onClick={goNext}>
     
        <p>Coming soon...</p>
          <div className="cardDumi" >
            <p>{currentDuMa}</p>
            </div>

      </div>
)
}

export default ParviDumiCvqt;