import { useEffect, useState } from "react"
import { ToDo } from "../models/todo-item"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../store"

export const ViewListItemPage = () => {
    const todoList = useSelector((state: RootState) => state.todoList.todos)
    const {id} = useParams()
    const navigate = useNavigate()
    const [todo, setTodo] = useState<ToDo>()

    useEffect(() => {
        const searchTodo = todoList.find(todo => String(todo.id) === id)
        if(searchTodo){
            setTodo(searchTodo)
        } else{
            navigate('/404')
        }
    }, [todoList, id, navigate]) // следит за состоянием данных переменных

    return (
        <div className="container">
            <h1>Item {todo? todo.id: ''}</h1>
        </div>
    )
}