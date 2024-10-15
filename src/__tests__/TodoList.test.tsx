import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { TodoList } from '../components/TodoList/TodoList.tsx'
import { Todo } from '../types.ts'

describe('TodoList Component', () => {
	const sampleTodos: Todo[] = [
		{ id: 1, text: 'First task', completed: false },
		{ id: 2, text: 'Second task', completed: true }
	]

	it('renders the list of todos with correct text', () => {
		render(<TodoList filteredTodos={sampleTodos} toggleTodo={jest.fn()} />)

		expect(screen.getByText('First task')).toBeInTheDocument()
		expect(screen.getByText('Second task')).toBeInTheDocument()
	})

	it('displays completed todos with checked checkbox', () => {
		render(<TodoList filteredTodos={sampleTodos} toggleTodo={jest.fn()} />)

		const checkboxes = screen.getAllByRole('checkbox')

		expect(checkboxes[0]).not.toBeChecked()
		expect(checkboxes[1]).toBeChecked()
	})

	it('calls toggleTodo when a todo checkbox is clicked', () => {
		const toggleTodo = jest.fn()
		render(<TodoList filteredTodos={sampleTodos} toggleTodo={toggleTodo} />)

		const firstCheckbox = screen.getAllByRole('checkbox')[0]

		fireEvent.click(firstCheckbox)

		expect(toggleTodo).toHaveBeenCalledTimes(1)
		expect(toggleTodo).toHaveBeenCalledWith(1)
	})
})
