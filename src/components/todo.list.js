import React, { Component } from 'react'

export default class ToDoList extends Component {

    renderList() {

        return this.props.todos.map( (todo, index) => {
            var lineThrough = {
                textDecoration: 'line-through'
            };

            return (
                <li key={todo.id}
                    className="list-group-item"
                    onClick = {this.props.onAddStyle.bind(null, todo)}
                    style={(todo.done)? lineThrough:{}}
                >
                    {todo.text}
                    <button  className="pull-right btn btn-warning btn-xs" onClick = {this.props.onDelete.bind(null, index)}>del</button>
                </li>
            )
        })
    }

    render() {
        console.log(this.props.todos )
        return (
            <ul className='list-group'>
                { this.renderList() }
            </ul>
        )
    }
}