import React, { Component } from 'react'
import Counter from './Components/Counter/Counter';

export class App extends Component {
  state={
    isShow:false
  }
 handleShow = (params) => {

    this.setState({isShow:!this.state.isShow});
  }
  
  render() {

    return (
      <div style={{textAlign:"center",marginTop:"200px"}}>
        <button onClick={this.handleShow}>{this.state.isShow?"Hide":"Show"}</button>
        {this.state.isShow?<Counter/>:null}
      </div>
    )
  }
}

export default App
