
import './App.css';
import Card from './components/Card';
function App() {
  let myObj={
    username:"keval",
    age:21
  }
   let newArr=[1,2,3]
  return (
    <>
    <h1 className='bg-green-200 rounded-xl content-center p-5 '>keval</h1>
    <Card username="keval ponkiya" btnText="clickme" ></Card>
    <Card username="ponkiya" btnText="vistme "></Card>
    <Card username="p"> </Card>

    </>
  );
}

export default App;
