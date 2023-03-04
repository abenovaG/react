import classes from './TodoCard.module.css'
// import Button from "../Button/Button";
// import editIcon from '../../assets/edit.svg'
import Input from "../Input/Input";
import {useState} from "react";
const TodoCard = ({ todo, handleDone,deleteTodo,currentEdit,handleChangeCurrent,handleEdit }) => {
const [newTitle, setNewTitle] = useState(todo.title);
const handleSetTitle = (event) => {
    setNewTitle(event.target.value)
}
    if(currentEdit) {
         return(
             <div>
                <Input value={newTitle}
                name={'new title'}
                onChange={handleSetTitle}
                 placeholder={'new task'}
                />
                 <button className={classes.editBtn} onClick={ () => handleEdit({
                     id: todo.id,
                     title: newTitle,
                     completed: todo.completed
                 })}>Save</button>
                 <button className={classes.editBtn} onClick={ () => handleEdit(todo.id)}>Cancel</button>
             </div>
         )
    }return(
        <div className={classes.wrapperCard}>
            <div className={todo.completed ? classes.done: classes.todoCard}>
                <h3>{todo.title}</h3>
            </div>
            <div className={classes.buttons}>
                <button className={classes.editBtn} onClick={ () => handleChangeCurrent(todo.id)}>
                    Edit
                {/*<img src={editIcon} className={classes.editIcon} alt='edit icon' />*/}
                </button>
                <button className={classes.doneBtn} onClick={ () => handleDone(todo.id)}>Done</button>
                <button className={classes.deleteBtn} onClick={ () => deleteTodo(todo.id)}>Delete</button>
            </div>
        </div>
    )
}

export default TodoCard;