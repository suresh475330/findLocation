import React from 'react';
import northpic from './images/north.jpg';
import southpic from './images/south.jpg';
import './Location.css'

// config file - more then data irunthuthu na atha intha mathire object ta covert pannikalam
let locationConfig = {
    North : {
        text : 'hello, your corrent location is North region',
        picture : northpic
    },
    South : {
        text : 'hi your corrent location is South region',
        picture : southpic
    }
}

let displaylocation = (props)=>{
  
   let region = (props.latitude > 0) ? 'North' : 'South';
   let {text,picture} = locationConfig[region]

   // method 2
    /*
    if( props.latitude > 0){
       return <div>hi, your regien is north</div>
    }
    else{
        return <div>hi, your regien is south</div>
    }
   */
  return (
      <div className = {region}>
       <img src={picture} alt='location picture'/>
       <h1>{text}</h1>
      </div>

  )
}


export default displaylocation;