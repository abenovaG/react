import classes from './TodoCard.module.css'
// import Button from "../Button/Button";
const TodoCard = ({ todo, handleDone,deleteTodo }) => {
    return(
        <div className={classes.wrapperCard}>
            <div className={todo.completed ? classes.done: classes.todoCard}>
                <h3>{todo.title}</h3>
            </div>
            <div className={classes.buttons}>
                <button className={classes.doneBtn} onClick={ () => handleDone(todo.id)}>Done</button>
                <button className={classes.deleteBtn} onClick={ () => deleteTodo(todo.id)}>Delete</button>
            </div>
        </div>
    )
}

export default TodoCard;