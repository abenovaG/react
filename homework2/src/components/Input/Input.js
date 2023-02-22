import {useState} from "react";



const Input = () => {
    const [newTask, setNewTask] = useState('');
    const [search, setSearch] = useState('');
    return(
        <div>
            <p>{newTask}</p>
            <input type="text" placeholder='Add' onChange={(event) => setNewTask(event.target.value)} />
            <p>{search}</p>
            <input type='text' placeholder='Search' onChange={(event) => setSearch(event.target.value)}/>
        </div>
    )
}

export default Input;