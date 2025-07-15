import { useState } from "react"
import "./TodoList.css";
import { v4 as uuidv4 } from "uuid";



export default function TodoList() {
    const [todos, settodos] = useState([{ task: "sample task", id: uuidv4(), isDone: false }]);
    const [add, setadd] = useState("");

    let addnewTask = () => {
        console.log("Added new task");
        settodos((prevTodo) => {
            return [...prevTodo, { task: add, id: uuidv4(), isDone: false }]
        });
        setadd("");
    }

    let updateTodovalue = (event) => {
        setadd(event.target.value);
    }

    let deleteTodo = (id) => {
        console.log("Task is deleted");
        settodos((prevtodos) => todos.filter((prevtodos) => prevtodos.id != id));
    }

    let markasDone = (id) => {
    settodos((prevtodos) => {
        return prevtodos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isDone: true,
                };
            } else {
                return todo;
            }
        });
    });
};



    return (
        <div className="todo-container">
            <input placeholder="add task" value={ add } onChange={ updateTodovalue }/>
            <button onClick={ addnewTask }>Add task</button>
            <br></br><br></br>
            <hr></hr>
            <h4>List</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone ? {textDecorationLine: "line-through"} : {} }>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={ () => deleteTodo(todo.id) }>delete</button>
                        &nbsp;
                        <button onClick={() => markasDone(todo.id)}>Mark as done</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}