// alert('Hello..');

import React, { Component } from 'react'
import { render } from 'react-dom'

import TodoForm from './components/todo-form.js'
import TodoList from './components/todo.list.js'

class App extends Component {
    render() {
        return (
            <div>
                Hello my name is MCR082
                < TodoForm />

                <h1> Todos </h1>
                < TodoList />
            </div>
        )
    }
}

render(<App />, document.getElementById('app'))