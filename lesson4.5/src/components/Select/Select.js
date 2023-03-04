import classes from "./Select.module.css";

const Select = ({onChange}) => {

    return (
        <label>
            Task filter :
            <select className={classes.select} onChange={onChange}>
                <option value='all'>Все</option>
                <option value='completed' >Выполненные</option>
                <option value='uncompleted' >Не выполненные</option>
            </select>
        </label>
    )
}

export default Select;