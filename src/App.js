// import React, { Component } from 'react'
// import Todo from "./components/todo";
// import './App.css';
// import AddTodo from './components/Addtodo'
// class App extends Component {
//   state = {
//     items : [
//       {
//         name: 'Muees',
//         age: "25",
//         gender: "Male",
//         id: 1
//       },
//       {
//         name: 'anya',
//         age: "19",
//         gender: "Female",
//         id: 2
//       },
//       {
//         name: 'nadeem',
//         age: "20",
//         gender: "Male",
//         id: 3
//       }
//     ]
//   }
//   addtodo = (add)=>{
//     add.id = Math.random();
//     let items = [...this.state.items , add]
//     this.setState({
//       items: items
//     })
//   }
//   deleteTodo = (id) =>{
//     const todoitems= this.state.items.filter(delTodo =>{
//       return delTodo.id !== id
//     })
//     this.setState({
//       items:todoitems
//     })
//   }
//   render(){
//     return (
//       <div className="App">
//         <h1>hello</h1>
//       <Todo DeleteTodo = {this.deleteTodo}todoItems = {this.state.items}/>
//       <AddTodo addTodo={this.addtodo} />
//       </div>
//     )
//   }
// }


// export default App;

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