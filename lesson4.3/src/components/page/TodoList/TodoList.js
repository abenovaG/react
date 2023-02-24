import {useState} from "react";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import classes from './TodoList.module.css'
import Modal from '../../../components/Modal/Modal'
import List from "../../List/List";
const TodoList = () => {
    const [state, setState] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [search, setSearch] = useState('');
    const [list, setList] = useState([
        {
            id: 1,
            title: 'coding',
            completed: false
        },
        {
            id: 2,
            title: 'eat',
            completed: false
        },
        {
            id: 3,
            title: 'sleep',
            completed: false
        }
    ])
    const [query, setQuery] = useState({
        search: '',
        list: []
    })

    const handleShow = () => setState(!state);
    const handleAdd = () => {
       setList((prevTodo) => {
           return [...prevTodo, { id: list.length + 1, title: newTitle, completed: false }]
        })
        handleShow()
        setNewTitle('')
    }
    const handleDone = (id) => {
        const currentIndex = list.findIndex((todo) => todo.id === id);
        list[currentIndex].completed = !list[currentIndex].completed;
        setList([...list]);
    }
    const deleteTodo = (id) => {
    const currentIndex = list.filter((todo) => todo.id !== id);
    setList(currentIndex)
    }
    const handleChangeText = (event) => {
        setNewTitle(event.target.value);
    }
    const handleSearch = (event) => {
        const results = list.filter((todo) => {
            if (event.target.value === '') return list
            return todo.title.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setSearch(event.target.value)
        setQuery({
            search: event.target.value,
            list: results
        })
    }
    return (
        <div className={classes.wrapper}>
            <Button onClick = {handleShow}>
                Открыть
            </Button>
            <form>
                <Input
                    type="search"
                    placeholder={'search...'}
                    onChange={handleSearch}
                    value={search}
                    name={'search'}
                />
            </form>
            <ul>
                {(query.search === '' ? "" : query.list.map(todo => {
                    return <li key={todo.title}>{todo.title}</li>
                }))}
            </ul>
            { state &&  <Modal handleShow={handleShow}>
                <p>{newTitle}</p>
                <Input
                    placeholder={'Добавить'}
                    onChange={handleChangeText}
                    name={'add'}
                    value={newTitle}
                />
                <Button onClick={handleAdd}>
                    Добавить
                </Button>
                <button className={classes.closeBtn} onClick={handleShow}>Close</button>
            </Modal> }
            <List list={list} handleDone={handleDone} deleteTodo={deleteTodo}/>
        </div>
    )
}

export default TodoList;