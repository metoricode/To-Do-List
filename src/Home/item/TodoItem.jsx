import React from 'react'

const TodoItem = ({todo, removeTodo, arrowdown, arrowup}) => {
    return (
        <li>
            {todo.title}
            <button className='close' onClick={() => removeTodo(todo.id)}>
            x
        </button>
        <button className='arrowup' onClick={() => arrowup(todo.id)}>
            8
        </button>
        <button className='arrowdown' onClick={() => arrowdown(todo.id)}>
            2
        </button>
        </li>
    )
}

export default TodoItem