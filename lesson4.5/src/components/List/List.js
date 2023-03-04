import TodoCard from "../TodoCard/TodoCard";

const List = ({list,handleDone, deleteTodo, currentEdit,handleChangeCurrent, handleEdit}) => {
    return(
        <>
            {list.map((todo) => <TodoCard
                key={todo.id}
                todo={todo}
                handleChangeCurrent={handleChangeCurrent}
                handleDone={handleDone}
                deleteTodo={deleteTodo}
                currentEdit={todo.id === currentEdit}
                handleEdit={handleEdit}
            />)}
        </>
    )
}

export default List;