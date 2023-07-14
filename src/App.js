import React, { useState } from 'react'
import Todo from "./components/todo";
import './App.css'
import AddTodo from './components/Addtodo'

let App = function () {
  const [itemState, setitems] = useState({
    items:[
      {
        name: 'Muees',
        age: "25",
        gender: "Male",
        id: 1
      },
      {
        name: 'anya',
        age: "19",
        gender: "Female",
        id: 2
      },
      {
        name: 'nadeem',
        age: "20",
        gender: "Male",
        id: 3
      },
      {
        name: 'naveed',
        age: "20",
        gender: "Male",
        id: 3
      }
    ]
  })
  const addTodo = (add)=>{
        add.id = Math.random();
        let items =  [...itemState.items , add];
        setitems({
          items: items
        })
      }
  const deleteTodo = (id)=>{
    let items= itemState.items.filter(delTodo =>{
            return delTodo.id !== id
          })
          setitems({
            items:items
          })
  }
  return (
    <div className="App">
      <h1>hello</h1>
      <Todo DeleteTodo={deleteTodo} todoItems={itemState.items} />
      <AddTodo addtodo={addTodo} />
    </div>
  )
}

export default App;