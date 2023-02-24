import TodoCard from "../TodoCard/TodoCard";

const List = ({list,handleDone, deleteTodo}) => {
    return(
        <>
            {list.map((todo) => <TodoCard
                key={todo.id}
                todo={todo}
                handleDone={handleDone}
                deleteTodo={deleteTodo}
            />)}
        </>
    )
}

export default List;