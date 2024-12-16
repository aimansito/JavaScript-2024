import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';

function Botonazo(props){
  return(
    <Button onClick={()=> props.clicar(props.pos)} color={props.color}></Button>
  );
}
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      color: ["primary","secondary","secondary"],
    }
  }
  click(p){
    if(p==0){
      this.setState({
        color:["primary","secondary","secondary"],
      })
    }
    if(p==1){
      this.setState({
        color:["secondary","primary","secondary"],
      })
    }
    if(p==2){
      this.setState({
        color:["secondary","secondary","primary"],
      })
    }
  }
  render(){
    return(
      <div>
        <Botonazo clicar={(p)=>this.click(p)} pos={0} color= {this.state.color[0]} /> {" "}
        <Botonazo clicar={(p)=>this.click(p)} pos={1} color= {this.state.color[1]} /> {" "}
        <Botonazo clicar={(p)=>this.click(p)} pos={2} color= {this.state.color[2]} /> 
      </div>
    )
  }
}
export default App;