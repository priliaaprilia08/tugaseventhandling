import React, { Component } from 'react';
import './App.css';
import Todos from './components/todos';

class App extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="text-center p-5">TODOS APP
        </h1>
        <Todos />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
      </div>
      
    );
  }
}

export default App;