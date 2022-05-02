
import './App.css';
import { Counter } from './components/counter';
import { Todo } from './components/todo';

function App() {
  return (
    <div className="App">
      <Counter/>
      <br/>
      <Todo/>
    </div>
  );
}

export default App;
