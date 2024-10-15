import { useEffect, useState } from 'react'
import { Todo } from '../types.ts'

export const useTodos = () => {
	const [todos, setTodos] = useState<Todo[]>([])

	useEffect(() => {
		if (typeof localStorage === 'undefined') return

		try {
			const storedTodos = localStorage.getItem('todos')
			if (storedTodos) {
				setTodos(JSON.parse(storedTodos))
			}
		} catch (error) {
			console.error('Failed to parse todos from localStorage', error)
		}
	}, [])

	useEffect(() => {
		if (typeof localStorage === 'undefined') return

		try {
			localStorage.setItem('todos', JSON.stringify(todos))
		} catch (error) {
			console.error('Failed to save todos to localStorage', error)
		}
	}, [todos])

	const addTodo = (text: string) => {
		const newTodo: Todo = { id: Date.now(), text, completed: false }
		setTodos([...todos, newTodo])
	}

	const toggleTodo = (id: number) => {
		setTodos(
			todos.map(todo =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		)
	}

	const clearCompleted = () => {
		setTodos(todos.filter(todo => !todo.completed))
	}

	return { todos, addTodo, toggleTodo, clearCompleted }
}
