import React, { useState } from 'react'
import { Filter } from './types'
import { TodoFooter, TodoForm, TodoList } from './components'
import { useTodos } from './hooks/useTodos.ts'

const TodosApp: React.FC = () => {
	const [filter, setFilter] = useState<Filter>('all')
	const { todos, addTodo, toggleTodo, clearCompleted } = useTodos()

	const filteredTodos = todos.filter(todo => {
		return filter === 'active'
			? !todo.completed
			: filter === 'completed'
				? todo.completed
				: true
	})

	return (
		<main className="wrapper">
			<h1 className="wrapper__header">todos</h1>
			<TodoForm addTodo={addTodo} />
			<TodoList filteredTodos={filteredTodos} toggleTodo={toggleTodo} />
			<TodoFooter setFilter={setFilter} clearCompleted={clearCompleted} todos={todos} activeFilter={filter} />
		</main>
	)
}

export default TodosApp
