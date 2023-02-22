

const List = (props) => {
    return(
        <div>
            {props.taskList.map(el => <li key={el.id}>
                {el.task}
            </li>)}
        </div>
    )
}

export default List;