import React, { Component } from 'react'

export default class ToDoForm extends Component {
    constructor(props) {
        super()
        this.state = {
            text: ''
        }
    }

    onSubmit(e) {
        e.preventDefault()
        this.props.onFormSubmit(this.state.text)
    }

    onTextChange(event) {
        this.setState({ text: event.target.value })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input
                    type="text"
                    value={this.state.text}
                    onChange={this.onTextChange.bind(this)}
                />
                <button type="submmit">Add</button>
            </form>
        )
    }
}
