import React,{Fragment, useState} from 'react';

const EditTodo = ({todo}) => {
    const [description, setDescription] = useState(todo.description)
    const updateDescription = async (e) => {
        e.preventDefault()
        try {
          const body = {description};
          console.log(`http://localhost:5000/todos/${todo.todo_id}`)
          const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`,{
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
          console.log(JSON.stringify(body))
          window.location = "/";  
        } catch (error) {
            console.log(error.message)
        }
    }

    
    return (
    <Fragment>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
        Edit
        </button>

        <div class="modal fade" id={`id${todo.todo_id}`} 
        onClick = {() => setDescription(todo.description)}
        tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit Todo</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick = {() => setDescription(todo.description)}>
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <input type="text" 
                value={description} 
                className="form-control"
                onChange={e => setDescription(e.target.value)}
                />
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal"
                onClick = {() => setDescription(todo.description)}
                >Close</button>
                <button type="button" class="btn btn-primary"
                onClick = { e => updateDescription(e) }
                >Save changes</button>
            </div>
            </div>
        </div>
        </div>

    </Fragment>
    )};

export default EditTodo;