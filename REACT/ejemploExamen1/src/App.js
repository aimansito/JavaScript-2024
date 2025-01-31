import logo from './logo.svg';
import './App.css';
import {SegundoComponente} from './components/SegundoComponente.js';
import {PrimerComponente} from './components/PrimerComponente.js';
class  App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
      
            <PrimerComponente/>
        </header>
      </div>
    );
  }
}

export default App;
