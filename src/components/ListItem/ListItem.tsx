import { ToDo } from "../../models/todo-item"
import { Link } from "react-router-dom"
import classes from './ListItem.module.scss'

export const ListItem = ({todo}: {todo: ToDo}) => {
    return (
            <Link className={`${classes.link} ${todo.isDone ? classes.done : classes.notDone}`} to={`/list/${todo.id}`}>{todo.text}</Link>
    )
}