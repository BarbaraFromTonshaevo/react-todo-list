import { ToDo } from "../../models/todo-item"
import classes from './ListItem.module.scss'

export const ListItem = ({todo}: {todo: ToDo}) => {
    return (
            <a className={`${classes.link} ${todo.isDone ? classes.done : classes.notDone}`} href={`/list/${todo.id}`}>{todo.text}</a>
    )
}