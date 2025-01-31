import imagen from './img.jpeg';
import './App.css';
import {Component} from 'react';
import {Button} from 'reactstrap';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      users:[
        {id: 1, name: "chamber", email: "chamber@myfpschool"}
      ]
    }
  }

  handleOnAddUser(event){
    event.preventDefault();
    let user = {
      id: this.state.users.length+1,
      name: event.target.name.value,
      email: event.target.email.value
    }
    let copiaUsers = this.state.users
    copiaUsers.push(user)
    this.setState({users:copiaUsers}) 
  }
  render(){
    return (
      <div className="App">
          <UserList users={this.state.users}/>
          <UserForm onAddUser={(e)=>this.handleOnAddUser(e)}/>
      </div>
    );
  }
}
export default App;