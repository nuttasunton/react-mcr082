// alert('Hello..');

import React, { Component } from 'react'
import { render } from 'react-dom'

import TodoForm from './components/todo-form.js'
import TodoList from './components/todo.list.js'

const initialTodos = [
    {id:1, text: "Go to school", done: false},
    {id:2, text: "play game", done: false},
    {id:3, text: "Dota", done: false}
]

class App extends Component {

    constructor() {
        super()
        this.state = {
            todos: initialTodos
        }

        this.handleDelete       = this.handleDelete.bind(this)
        this.handleFormSubmit   = this.handleFormSubmit.bind(this)
    }

    handleFormSubmit(data) {
        console.log("form submit ", data)
        let newTodos = {
            id: Date.now(),
            text: data,
            done: false,
        }

        this.setState({
            todos: this.state.todos.concat(newTodos)
        })
    }

    handleDelete(index) {
        console.log("delete ", index)
        let newTodos = this.state.todos
        newTodos.splice(index, 1)

        this.setState({ todos: newTodos })
    }

    render() {
        return (
            <div>
                Hello my name is MCR082
                < TodoForm onFormSubmit={this.handleFormSubmit} />

                <h1> Todos </h1>
                < TodoList todos={this.state.todos} onDelete={this.handleDelete} />
            </div>
        )
    }
}

render(<App />, document.getElementById('app'))