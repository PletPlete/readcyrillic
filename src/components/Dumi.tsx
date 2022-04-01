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

       
       
        if (currentSid===15) {
            setCurrentSid(1)
        }
        else{
            setCurrentSid(currentSid+1);
        }

        let selectedItem= Dumi.find(item => item.id === currentSid);
     let du=selectedItem?.srichka1
     let ma=selectedItem?.srichka2
          let duma=selectedItem?.srichka1+"-"+selectedItem?.srichka2
          console.log(duma)
   
          if (typeof duma === 'string') {
            setCurrentDuMa(duma)
            
            
          }
          if (typeof du === 'string' && typeof ma === 'string') {
            setCurrentMa(ma)
            setCurrentDu(du)
            
          }
        console.log(currentDuMa)
        console.log(currentDu+currentMa.fontcolor("red"))
        //return currentDuMa
        return currentDu+currentMa.fontcolor("red")

    }

    return (
        <div className='scr' onClick={goNext}>

       
          <div className="cardDumi" >
             <br></br>
              <text className="DuColor">{currentDu}</text><text className="MaColor">{currentMa}</text>
            {/* <p>{currentDu}<p className="MaColor">{currentMa}</p></p> */}
  

      </div>
      </div>
)
}

export default ParviDumiCvqt;