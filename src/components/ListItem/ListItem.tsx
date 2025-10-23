import { ToDo } from "../../models/todo-item"
import classes from './ListItem.module.scss'

export const ListItem = ({todo}: {todo: ToDo}) => {
    return (
            <a className={`${classes.link} ${todo.isDone ? classes.done : classes}`} href={`/list/${todo.id}`} target="_blank" rel="noreferrer">{todo.text}</a>
    )
}