import React,{ Fragment } from 'react';
import './App.css';
import InputTodo from "./components/InputTodo";
import Listtodo from './components/ListTodo';

function App() {
  return (
    <Fragment>
      <div className = "container">
      <InputTodo/>
      <Listtodo/>
      </div>
    </Fragment>
  );
}

export default App;
