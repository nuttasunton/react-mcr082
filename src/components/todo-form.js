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
        this.setState({text: ''})
    }

    onTextChange(event) {
        this.setState({ text: event.target.value })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)} className=''>
                <div className="input-group">
                    <input
                        className="form-control"
                        type="text"
                        value={this.state.text}
                        onChange={this.onTextChange.bind(this)}
                    />
                    <span className="input-group-btn">
                        <button className="btn btn-default btn-success" type="submmit">Add</button>
                    </span>
                </div>
            </form>
        )
    }
}
