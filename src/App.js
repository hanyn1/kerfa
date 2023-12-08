import PlayerList from './components/PlayerList';
import Players from './components/Players';
import Data from './DataBase/Data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Players/>
      <PlayerList/>
    </div>
  );
}

export default App;
