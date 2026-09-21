import { Link, Navigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../store"

export const ViewListItemPage = () => {
    const todoList = useSelector((state: RootState) => state.todoList.todos)
    const { id } = useParams()
    const todo = todoList.find(item => item.id === id)

    if (!todo) {
        return <Navigate to="/404" replace />
    }

    return (
        <div className="container">
            <h1>{todo.text}</h1>
            <p>Статус: {todo.isDone ? 'выполнена' : 'не выполнена'}</p>
            <Link to="/list">К списку задач</Link>
        </div>
    )
}
