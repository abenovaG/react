import {useState, useEffect} from "react";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import classes from './TodoList.module.css'
import Modal from '../../../components/Modal/Modal'
import List from "../../List/List";
import Select from "../../Select/Select";
const TodoList = () => {
    const [state, setState] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [search, setSearch] = useState('');
    const [currentEdit, setCurrentEdit] =useState();
    const [list, setList] = useState([
        {
            id: 1,
            title: 'coding',
            completed: false
        },
        {
            id: 2,
            title: 'eat',
            completed: true
        },
        {
            id: 3,
            title: 'sleep',
            completed: false
        }
    ])
    const [filtered, setFiltered] = useState(list)
    const [filter, setFilter] = useState('all')
    const [searchState, setSearchState] = useState(list)
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
        setSearch(event.target.value);
    }
    const handleEdit = (editTodo) => {
       const editList = list.map(todo => {
           if(todo.id === editTodo.id){
               return{...todo,title: editTodo.title}
           }
           return todo;
       })
        setList([...editList]);
       setCurrentEdit()
    }
    const deleteTasks = (id) => {
        const clearAllTask = list.filter(todo => todo === id)
        setList(clearAllTask)
    }

    const filterSelect = (event) => {
        setFilter(event.target.value)

    }

    useEffect(() => {
       localStorage.setItem('todoList', JSON.stringify(list))
    }, [list])

    useEffect(() => {
        const filteredTodos = list.filter((todo) => {
            if(filter === 'all') {
                return true
            }else if (filter ==='completed') {
                    return todo.completed
            }else if (filter === 'uncompleted') {

                    return !todo.completed
            }
        })
        setFiltered(filteredTodos)
    },[list, filter])
    console.log(filter)

    useEffect(() => {
        const resultSearch = filtered.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()));
        setSearchState(resultSearch)
    },[filtered,search])


    return (
        <div className={classes.wrapper}>
            <button className={classes.deleteTasks} onClick={deleteTasks}>
                Clear page
            </button>
            <Select onChange={filterSelect}/>
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
            <List
                list={searchState}
                handleChangeCurrent={setCurrentEdit}
                handleDone={handleDone}
                deleteTodo={deleteTodo}
                currentEdit={currentEdit}
                handleEdit={handleEdit}
            />
        </div>
    )
}

export default TodoList;