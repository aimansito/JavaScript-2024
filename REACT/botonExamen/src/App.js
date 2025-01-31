import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
class  App extends Component {
  constructor(props){
    super(props);
    this.state={
      users:[
        {id:1, name:"perico",email:"perico@gmail.com"}
      ]
    }
  }

  handelOnAddUser(event){
    event.preventDefault();
    
  }

  render(){
    return (
      <div className="App">
        <UserList users={this.state.users}/>
        <>Añade Usuarios</>
        <UserForm/>
      </div>
    );
  }
}

export default App;