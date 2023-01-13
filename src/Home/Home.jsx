import React, {useState} from 'react';
import TodoItem from './item/TodoItem';
import CreateTodo from './CreateTodo/CreateTodo';

const Home = () => {
    const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []);
    
    const setTodoWithSave = (newTodos) => {
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos))
    };

    const removeTodo = (id) => {
        setTodoWithSave([...todos].filter(t => t.id !== id))
    }

    const addTodo = (title) => {
        setTodoWithSave([ {
            id: new Date(),
            title
        }, ...todos])
    }

    const arrowdown = (id) => {
        const copy = [...todos]
        let current = copy.find(t => t.id === id)
        let currentInd = copy.indexOf(current)
        let nextInd = currentInd + 1
        copy[nextInd] = copy.splice(currentInd, 1, copy[nextInd])[0] 
        setTodoWithSave(copy)
    }

        const arrowup = (id) => {
        const copy = [...todos]
        let current = copy.find(t => t.id === id)
        let currentInd = copy.indexOf(current)
        let nextInd = currentInd - 1
        copy[nextInd] = copy.splice(currentInd, 1, copy[nextInd])[0] 
        setTodoWithSave(copy)
    }

    console.log(todos)
    return (
        <div className='todolist'>
            <div className='header'>
                <h2 className='text-1'>Tasks</h2>
                <CreateTodo addTodo={addTodo} />
            </div>
            <ul className='myList'>
                {todos.map(todo => ( 
                    <TodoItem 
                    key={todo.id} 
                    todo={todo}  
                    removeTodo={removeTodo}
                    arrowdown={arrowdown}
                    arrowup={arrowup}
                    />
                    ))}
            </ul>
        </div>
    )
}

export default Home