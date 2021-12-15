import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    console.log("constructor()")
        this.state = {
             count:0,
             memory:null
            
        }
    }
    
   componentDidMount(){
    //    console.log("componentDidMount()")
    this.setState({ memory: setInterval(() => {
        this.increment()
    }, 1000) });
 
   }
   componentDidUpdate(){
    //    console.log("componentDidUpdate()")
  
   }
    increment = () => {
        this.setState({ count: this.state.count+1 });
        
    }
    componentWillUnmount()
    {
        // console.log("componentWillUnmount()")
        clearInterval(this.state.memory)
    }
    decrement=()=>{
        if(this.state.count>0)
        this.setState({count:this.state.count -1})
    }
    render() {
        console.log("render()")
        return (
            <div>
               <button onClick={this.increment}>+</button>
               <p>{this.state.count}</p>
               <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

export default Counter
