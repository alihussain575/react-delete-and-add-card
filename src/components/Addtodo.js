// import React, { Component } from 'react'

// class AddTodo extends Component {
//     state = {
//         name: "",
//         age: "",
//         gender: ""
//     }
//     handleChange = (e) => {
//         this.setState({
//             [e.target.id]: e.target.value
//         })
//     }
//     handleSubmit = (e)=>{
//         e.preventDefault();
//         this.props.addTodo(this.state)
//     }
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <label htmlFor="name">name</label>
//                     <input type="text" id="name" onChange={this.handleChange} />
//                     <label htmlFor="age">age</label>
//                     <input type="text" id="age" onChange={this.handleChange} />
//                     <label htmlFor="gender">gender</label>
//                     <input type="text" id="gender" onChange={this.handleChange} />
//                     <button>submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

// export default AddTodo; 

import React, { useState } from 'react'

let AddTodo = (props) => {
    const [addItems, setaddItems] = useState({
        name: null,
        age: null,
        gender: null

    })
    const handleChange = (event) => {
        setaddItems({
            ...addItems,
            [event.target.id]: event.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addtodo(addItems)
    }
    return (
        <div className="input">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">name</label>
                <input type="text" id="name" onChange={handleChange} />
                <label htmlFor="age">age</label>
                <input type="text" id="age" onChange={handleChange} />
                <label htmlFor="gender">gender</label>
                <input type="text" id="gender" onChange={handleChange} />
                <button className="btn">submit</button>
            </form>
        </div>
    )
}
export default AddTodo