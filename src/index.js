import React from 'react';
import ReactDOM from 'react-dom';
import DisplayLocation from './displayLocation';

class App extends React.Component{
  
 constructor(props){
   super(props)
   this.state = {latitude:null,errorMessage:''}

   window.navigator.geolocation.getCurrentPosition(
    (position) => {this.setState({latitude :position.coords.latitude})},
    (error) => {this.setState({errorMessage:error.message})}
  );

 }


  render(){
   
   if(this.state.errorMessage){
     return <div> Error :{this.state.errorMessage}</div>
   }
    else if(this.state.latitude){
     return <div><DisplayLocation latitude = {this.state.latitude}/></div>
   }
   else{
     return <div>waiting for user permisstion</div>
   }
  
}
}

ReactDOM.render(
   <App />,
  document.querySelector('#root')
)