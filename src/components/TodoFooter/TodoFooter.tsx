import React, { useEffect, useState } from 'react'
import { Filter, Todo } from '../../types.ts'

interface FooterProps {
	setFilter: (filter: Filter) => void,
	clearCompleted: () => void,
	todos: Todo[],
	activeFilter: Filter
}

export const TodoFooter: React.FC<FooterProps> = ({ setFilter, clearCompleted, todos, activeFilter }) => {
	const [remainingTasks, SetRemainingTasks] = useState(0)

	useEffect(() => {
		const count = todos.reduce((acc, todo) => acc + (todo.completed ? 0 : 1), 0)
		SetRemainingTasks(count)
	}, [todos])

	return (
		<>
			<section className="filter-buttons">
				<span>
					{remainingTasks} items left
				</span>
				<div>
					<button
						onClick={() => setFilter('all')}
						className={activeFilter === 'all' ? 'active' : ''}
					>
						All
					</button>
					<button
						onClick={() => setFilter('active')}
						className={activeFilter === 'active' ? 'active' : ''}
					>
						Active
					</button>
					<button
						onClick={() => setFilter('completed')}
						className={activeFilter === 'completed' ? 'active' : ''}
					>
						Completed
					</button>
				</div>
				<button onClick={clearCompleted}>Clear Completed</button>
			</section>
			<div className="overlay">
				<div className="overlay__layer overlay__layer--1"></div>
				<div className="overlay__layer overlay__layer--2"></div>
			</div>
		</>
	)
}
