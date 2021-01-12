import React, { Component } from "react";

class Todo extends Component {
    state = {
        inputField: this.props.task, todo: this.props.task, editMode: false
        , done: false, index: this.props.index
    }

    // input binding
    changeTodoHandler = event => {
        const newField = event.target.value
        this.setState({ inputField: newField })
        console.log(this.state.inputField)
    }
    // save change if input is not empty
    saveChange = () => {
        const newTask = this.state.inputField
        if (newTask) {

            this.setState({ todo: newTask, editMode: false })
        }
        else {
            this.setState({ editMode: false })
        }

    }

    // restore todo
    cancelChange = () => {
        this.setState({ editMode: false })
    }

    editTodo = event => {
        this.setState({ editMode: true })

    }

    markDone = event => {
        this.setState({ done: true })
    }


    render() {
        if (this.state.done === false) {

            if (this.state.editMode === false) {

                return (
                    <div>

                    <div className="todoCard-notDone">
                <p>{this.state.todo}</p>
                    </div>
                        <button className="small-btn" onClick={this.editTodo}>Edit</button>
                        <button className="small-btn" onClick={this.markDone}>Done</button>
                        <button className="small-btn" onClick={() => this.props.deleteTodo(this.props.index)}> delete</button>
                    </div>
                )
            }
            else {
                return (
                    <div>
                        <input className="editMode" onChange={this.changeTodoHandler} value={this.state.inputField} ></input>
                        <button className="small-btn" onClick={this.saveChange}> save</button>
                        <button className="small-btn" onClick={this.cancelChange}>cancel</button>
                    </div>
                )
            }
        }
        else {
            return (
                <div className="todoCard-done">
                    <p>{this.state.todo}</p>
                </div>
            )
        }

    }
}
export default Todo