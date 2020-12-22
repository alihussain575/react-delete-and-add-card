import React from 'react'

const TodoItem = ({todoItems , DeleteTodo})=>{
    const todoList = todoItems.map(todoItems =>{
        return (
            <div className="todo" key={todoItems.id}>
                <div>name:{todoItems.name}</div>
                <div>age:{todoItems.age}</div>
                <div>gender:{todoItems.gender}</div>
                <button onClick={()=>{DeleteTodo(todoItems.id)}} className="del-btn" >delete</button>
            </div>
        )
    })
    return (
        <div className="todo-list">
            {todoList}
        </div>
    )
}

export default TodoItem;