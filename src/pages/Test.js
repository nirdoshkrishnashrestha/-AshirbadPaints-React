import { Component } from 'react';

export default class Test extends Component
{
  constructor(){
    super();
    this.state={
      name:'Nerdosh Shrestha'
    }
  }

  

  clickme=(event)=>{
    this.setState({
      name:this.state.name+' krishne'
    })
  }
  render()
  {
    return(
      <div className='content text-center mt-5'>
        <h1>Hello: {this.state.name} </h1>
        <h2>This is a Test Page from Component.</h2>
        <button onClick={this.clickme}>Click Me</button>
      </div>
    );
  }
}

// function Test() {
//     function done(){
//         console.log("Button Has been clicked !!!")
//     }
//   return (
//     <button onClick={done}>Click Mere</button>
//   )
// }

// export default Test;