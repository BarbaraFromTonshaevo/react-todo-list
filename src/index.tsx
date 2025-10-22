import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss'
import './assets/scss/style.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ToDoListPage } from './pages/ToDoListPage';
import { ToDo } from './models/todo-item';
import { NotFound } from './pages/404';
import { ItemDescriptioPage } from './pages/ItemDescriptionPage';
import { Layout } from './layouts/Layout';

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

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <NotFound />,
		children: [
			{
				path: '/',
				element: <HomePage todos={todos} />
			},
			{
				path: '/todo',
				element: <ToDoListPage />
			},
			{
				path: '/list/:id',
				element: <ItemDescriptioPage todos={todos} />
			}
		]
	},
	{
		path: '*',
		element: <NotFound />,
	}
], {basename: '/app/'})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />		
	</React.StrictMode>
)