import React, {useState} from 'react'

const CreateTodo = ({addTodo}) => {

    const [title, setTitle] = useState('')

    return(
        <div>
        <input 
        type="text"
        onChange={e => setTitle(e.target.value)} 
        value={title}
        onKeyPress={e => e.key === 'Enter' && addTodo(title)}
        />
        <button id='addBtn' onClick={() => addTodo(title)}>Add</button>
        </div>
    )
}

export default CreateTodo