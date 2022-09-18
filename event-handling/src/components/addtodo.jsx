import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        defaultValue: "",
        value: this.props.addTodoValue
    }

    handleChange = (e) => {
        //untuk update component state
        this.setState({
            value: e.target.value
        });
    }

    clearInput = () => {
        //untuk clear value in input
        document.getElementById("todoValue").value = "";
        
        //untuk update component state
        this.setState({value:""});
    }

    addTodo = () => {
        //untuk memanggil Todos component using props
        this.props.fooAddTodo(this.state.value);
        this.clearInput();
    }

    render() {
        return (
            <div className="input-group mb-3 col-6">
                <input type="text" className="form-control rounded-pill" id="todoValue" placeholder="Add todo..." onChange={this.handleChange} />
                <div className="input-group-append">
                    <button onClick={this.addTodo} className="btn btn-outline" type="button" id="button-addon2">Submit</button>
                </div>
            </div>
        );
    }
}

export default AddTodo;