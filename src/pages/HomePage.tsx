import { ListItem } from "../components/ListItem/ListItem"
import { ToDo } from "../models/todo-item"

interface ComponentProps{
    todos: ToDo[]
}

export const HomePage = ({todos}: ComponentProps ) => {
    return(
        <div className="container">
            <div>Home Page</div>
            {
                todos.map((todo: ToDo, index) => {
                    return (<ListItem todo={todo} key={index}/>)
                })
            }
        </div>
        
    )
}