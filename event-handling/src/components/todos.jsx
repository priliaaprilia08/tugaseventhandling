import React, { Component } from 'react';

import Todo from './todo';
import AddTodo from './addtodo';

class Todos extends Component {

    //state dengan default values
    state = {
        addTodoValue: "",
        todos: [
            {
                id: 1,
                value: "Mengerjakan Exercise",
                isDone: false
            },
            {
                id: 2,
                value: "Mengerjakan Assignment",
                isDone: true
            },
            {
                id: 3,
                value: "Mengerjakan resume",
                isDone: false
            }
        ]
    }

    //untuk mendapatkan penyimpanan sementara
    getTime() {
        let d = new Date();
        var n = d.getTime();
        return n;
    }

    //untuk memanggil component todo
    handleDelete = todo => {
        const todos = this.state.todos.filter((t) => {
            return t.id !== todo
        });
        this.setState({ todos });
    }

    handleDone = todo => {
        const todos = [...this.state.todos];
        todos.map((t) => {
            if (t.id === todo.id) {
                t.isDone = !t.isDone;
            }
            return t;
        });
        this.setState({todos});
    }

    //untuk memanggil component addtodo
    addNewTodo = value => {
        if (value) {
            const todos = [...this.state.todos];
            todos.push(
                {
                    id: this.getTime(),
                    value: value,
                    isDone: false
                }
            );
            this.setState({ addTodoValue: "", todos })
        } else {
            console.log("Add Todo Text");
        }
    }

    render() {
        return (
            <table className="table">
                <tr>
                        <td colSpan="4" className="text-center">
                            <AddTodo fooAddTodo={this.addNewTodo} addTodoValue={this.state.addTodoValue} />
                        </td>
                </tr>
                <tbody>
                    {this.state.todos.map((todo, index) => (
                        <tr key={todo.id}>
                            <Todo index={index+1} todo={todo} fooDelete={this.handleDelete} fooDoneDone={this.handleDone} />
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default Todos;