import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss'
import './assets/scss/style.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ToDoListPage } from './pages/ToDoListPage';
import { Header } from './components/Header/Header';
import { ToDo } from './models/todo-item';
import { NotFound } from './pages/404';
import { ItemDescriptioPage } from './pages/ItemDescriptionPage';

const todos: ToDo[] = [
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
			isDone: false,
		},
		{
			id: 3,
			text: 'Четвертая задача',
			isDone: true,
		},
]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage todos={todos} />}></Route>
				<Route path='/list/:id' element={<ItemDescriptioPage todos={todos} />}></Route>
				<Route path='/todo' element={<ToDoListPage />}></Route>
				<Route path='*' element={<NotFound />}></Route>

			</Routes>
		</BrowserRouter>
		
	</React.StrictMode>
)