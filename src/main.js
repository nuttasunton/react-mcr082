// alert('Hello..');

import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render() {
    return (
        <div>
            Hello my name is MCR082
            <form>
                <input type="text" name="" />
                <button type="submmit">Add</button>
            </form>

            <h1> Todos </h1>
            <ul>
                <li> List </li>
                <li> List </li>
                <li> List </li>
            </ul>
        </div>
    )
  }
}

render(<App />, document.getElementById('app'))