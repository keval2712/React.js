import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  
  return (
    <>
    <h1>TodoApp</h1>
    <AddTodo></AddTodo>
    <Todos></Todos>
    </>
  );
}

export default App;
