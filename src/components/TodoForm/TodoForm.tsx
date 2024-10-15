import React, { useState } from 'react'

interface TodoFormProps {
	addTodo: (text: string) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
	const [value, setValue] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (!value.trim()) return
		addTodo(value)
		setValue('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="todo-form-input-wrapper">
				<input
					type="text"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					placeholder="What needs to be done?"
					className="todo-form__input"
					aria-label="New todo input"
				/>
			</div>
		</form>
	)
}