//import { Segment } from "semantic-ui-react"
import '../App.css';
import React, { Component, SyntheticEvent, useState } from 'react'
import { Form,   Transition } from 'semantic-ui-react'
import Srichki from '../Data/srichki.json'

// const transitions = [
  
//   'horizontal flip',
  
// ]
// const options = transitions.map((name) => ({
//   key: name,
//   text: name,
//   value: name,
// }))

// export default class TransitionExampleSingleExplorer extends Component {
//   state = { animation: transitions[0], duration: 500, visible: true }

//   handleChange = (e, { name, value }) => this.setState({ [name]: value })

//   handleVisibility = () =>
//     this.setState((prevState) => ({ visible: !prevState.visible }))

//   render() {
//     const { animation, duration, visible } = this.state

    // return (
     
//     )
//   }
// }
const ReadingSyl=()=>{
    
    const [isVisible,setIsVisible]=useState(true);
    const [currentSrichka, setCurrentSricka] = useState("MA");
    const [currentSid, setCurrentSid] = useState(1);
    //let sid:number=1;
    let sr:string = 'АБ'
    const handleVisibility =(event:SyntheticEvent) =>{
        setIsVisible(!isVisible)
    }

    const goNext= ()=>{

       //note to do should be random
        setCurrentSid(currentSid+1);
        if (currentSid===24) {
            setCurrentSid(1)
        }
        let selectedItem= Srichki.find(item => item.id === currentSid);
        // sr =selectedItem.srichka;
        
        // if (typeof selectedItem.srichka === 'string') {
        //     sr =selectedItem.srichka as string;
        //   }

          //let sr = ({selectedItem: {srichka:{}}})
          let sr=selectedItem?.srichka
          console.log(sr)
         // setCurrentSricka(sr.toString())
        // if (sr) {
        //     setCurrentSricka(sr)
        //   }
          if (typeof sr === 'string') {
            setCurrentSricka(sr)
          }
        console.log(typeof sr)
        //setCurrentSricka(sr)
        console.log(currentSrichka)
        return currentSrichka

    }

    return (
        <div className='scr' onClick={goNext}>
        {/* <Grid className='card'> */}
        
          <div className="card" >
            <p>{currentSrichka}</p>
            </div>

       
    
        
      </div>
     
    )

}
export default ReadingSyl

