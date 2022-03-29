//import { Segment } from "semantic-ui-react"
import '../App.css';
import React, { Component, SyntheticEvent, useState } from 'react'
import { Form, Grid, Image, Transition } from 'semantic-ui-react'

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


    const handleVisibility =(event:SyntheticEvent) =>{
        setIsVisible(!isVisible)
    }
    return (
        <div className='scr' onClick={handleVisibility}>
        {/* <Grid className='card'> */}

        <Transition.Group animation='horizontal flip' duration='200'>
        
          <div >
            {isVisible &&
            (<div className="card" >
            <p>MA</p>
            </div>)}
          
            </div>
          </Transition.Group> 
        
      </div>
     
    )

}
export default ReadingSyl

   {/* //  <div className='ui card'>
        // {/* //     <Segment className='card'> 
             <p>MA</p>
              </Segment>

        //  </div> */}


        {/* <div className="card">
  <p>MA</p>
  </div> */}