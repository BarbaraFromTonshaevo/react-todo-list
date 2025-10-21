import { useState } from 'react'
import { Header } from '../components/Header/Header'
import { Form } from '../components/Form/Form'
import { ToDoList } from '../components/ToDoList/ToDoList'
import { ToDo } from '../models/todo-item'

export const ToDoListPage = () => {
	const [todos, setTodos] = useState<ToDo[]>([
		{
			id: 0,
			text: 'Первая задача',
			isDone: false,
		},
		{
			id: 1,
			text: 'Вторая задача',
			isDone: true,
		},
		{
			id: 2,
			text: 'Третья задача',
			isDone: true,
		},
	])

	const createNewToDo = (text: string) => {
		const newToDo: ToDo = {
			id: todos.length,
			text: text,
			isDone: false,
		}
		setTodos([...todos, newToDo])
	}

	const updateToDo = (toDoItem: ToDo) => {
		const newTodos: ToDo[] = todos.map(todo => {
			if(todo.id === toDoItem.id){
				todo.isDone = !todo.isDone
			}
			return todo
		})
		setTodos(newTodos)
	}

	const deleteToDo = (toDoItem: ToDo) => {
		const newTodos: ToDo[] = todos.filter(item => item.id !== toDoItem.id)
		setTodos(newTodos)
	}

	return (
		<>
			<Header />
			<Form createNewToDo={createNewToDo} />
			<ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
		</>
	)
}
