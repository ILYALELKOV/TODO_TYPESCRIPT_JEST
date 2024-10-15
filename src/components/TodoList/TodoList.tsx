import React from 'react'
import { Todo } from '../../types.ts'

interface TodoListProps {
	filteredTodos: Todo[];
	toggleTodo: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ filteredTodos, toggleTodo }) => {

	return (
		<ul className="todo-list">
			{filteredTodos.map(todo => (
				<li key={todo.id} className="todo-list__item">
					<label className="todo-list__checkbox">
						<input
							type="checkbox"
							checked={todo.completed}
							onChange={() => toggleTodo(todo.id)}
						/>
						<span className="todo-list__checkmark"></span>
					</label>
					<span
						className={`todo-list__text ${todo.completed ? 'todo-list__text--completed' : ''}`}
					>
            {todo.text}
          </span>
				</li>
			))}
		</ul>
	)
}
