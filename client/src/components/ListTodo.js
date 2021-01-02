import React,{Fragment, useEffect, useState} from 'react';
import EditTodo from './EditTodo';

const Listtodo = () => {

    //set default value as empty array
    const [todos, setTodos] = useState([]);

    //delete todo function
    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`,{
                method: "DELETE"
            });
            getTodos();    
        } catch (error) {
            console.log(error.message);
        }
    }
    
    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getTodos();
    },[]);

    return (
    <Fragment>
    {" "}
    <table className ="table mt-5 text-center">
        <thead>
            <tr>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
                {todos.map(todos => (
                    <tr key={todos.todo_id}>
                    <td>{todos.description}</td>
                    <td><EditTodo todo={todos}></EditTodo></td>
                    <td>
                        <button 
                        className = "btn btn-danger"
                        onClick = {() => deleteTodo(todos.todo_id)}
                        >Delete
                        </button>
                    </td>
                    </tr>
                ))}
        </tbody>
    </table>
    </Fragment> 
)};

export default Listtodo;
