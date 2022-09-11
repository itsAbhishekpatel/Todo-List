import './App.css';
import Header from './Compenents/Header';
import { Todos } from './Compenents/Todos';
import { TodosItem } from './Compenents/TodosItem';
import { Footer } from './Compenents/Footer';
import React,{useState} from 'react';

function App() {
  const onDelete =  (todo) =>{
    console.log("I am onDelete",todo)

    setTodos(todos.filter((e)=>{
      return e!==todo ;

    }));


  }

  const [todos, setTodos] = useState( [
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to market to buy vegs."
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the mall to do shopping."
    },
    {
      sno: 3,
      title: "Go for interview",
      desc: "Be prepare for the interview."
    },
  ]);
  
  return (
    <div className="App">
      <Header title = "My Todos List" />
      <Todos todos = {todos} onDelete = { onDelete} />
      <Footer />

    </div>
  );
}

export default App;
