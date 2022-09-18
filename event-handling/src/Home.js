import React, { Component } from 'react';
import "./App.css";
import Todos from "./components/todos.jsx";


class Home extends Components {
    render() {
        return (
            <div className='container'>
                <h1 className='text-center'>todos</h1>
                <Todos />
            </div>
        );
    }
}

export default Home;
