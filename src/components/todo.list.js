import React, { Component } from 'react'

export default class ToDoList extends Component {

    renderList() {
        return this.props.todos.map( (todo, index) => {
            return (
                <li key={todo.id}> {todo.text}
                 <button onClick = {this.props.onDelete.bind(null, index)}>del</button> </li>
            )
        })
    }

    render() {
        console.log(this.props.todos )
        return (
            <ul>
                { this.renderList() }
            </ul>
        )
    }
}