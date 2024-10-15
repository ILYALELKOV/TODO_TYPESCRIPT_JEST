import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { TodoFooter } from '../components/TodoFooter/TodoFooter.tsx'
import { Todo } from '../types.ts'

describe('TodoFooter Component', () => {
	const mockSetFilter = jest.fn()
	const mockClearCompleted = jest.fn()

	const sampleTodos: Todo[] = [
		{ id: 1, text: 'Task 1', completed: false },
		{ id: 2, text: 'Task 2', completed: true },
		{ id: 3, text: 'Task 3', completed: false }
	]

	beforeEach(() => {
		jest.clearAllMocks()
	})

	it('displays the correct number of remaining tasks', () => {
		render(
			<TodoFooter
				setFilter={mockSetFilter}
				clearCompleted={mockClearCompleted}
				todos={sampleTodos}
				activeFilter="all"
			/>
		)

		expect(screen.getByText('2 items left')).toBeInTheDocument()
	})

	it('calls setFilter with "all" when the All button is clicked', () => {
		render(
			<TodoFooter
				setFilter={mockSetFilter}
				clearCompleted={mockClearCompleted}
				todos={sampleTodos}
				activeFilter="all"
			/>
		)

		const allButton = screen.getByText('All')
		fireEvent.click(allButton)

		expect(mockSetFilter).toHaveBeenCalledWith('all')
	})

	it('calls setFilter with "active" when the Active button is clicked', () => {
		render(
			<TodoFooter
				setFilter={mockSetFilter}
				clearCompleted={mockClearCompleted}
				todos={sampleTodos}
				activeFilter="all"
			/>
		)

		const activeButton = screen.getByText('Active')
		fireEvent.click(activeButton)

		expect(mockSetFilter).toHaveBeenCalledWith('active')
	})

	it('calls setFilter with "completed" when the Completed button is clicked', () => {
		render(
			<TodoFooter
				setFilter={mockSetFilter}
				clearCompleted={mockClearCompleted}
				todos={sampleTodos}
				activeFilter="all"
			/>
		)

		const completedButton = screen.getByText('Completed')
		fireEvent.click(completedButton)

		expect(mockSetFilter).toHaveBeenCalledWith('completed')
	})

	it('calls clearCompleted when the Clear Completed button is clicked', () => {
		render(
			<TodoFooter
				setFilter={mockSetFilter}
				clearCompleted={mockClearCompleted}
				todos={sampleTodos}
				activeFilter="all"
			/>
		)

		const clearCompletedButton = screen.getByText('Clear Completed')
		fireEvent.click(clearCompletedButton)

		expect(mockClearCompleted).toHaveBeenCalledTimes(1)
	})

	it('applies the "active" class to the current filter button', () => {
		const { rerender } = render(
			<TodoFooter
				setFilter={mockSetFilter}
				clearCompleted={mockClearCompleted}
				todos={sampleTodos}
				activeFilter="all"
			/>
		)

		expect(screen.getByText('All')).toHaveClass('active')
		expect(screen.getByText('Active')).not.toHaveClass('active')
		expect(screen.getByText('Completed')).not.toHaveClass('active')

		rerender(
			<TodoFooter
				setFilter={mockSetFilter}
				clearCompleted={mockClearCompleted}
				todos={sampleTodos}
				activeFilter="active"
			/>
		)

		expect(screen.getByText('All')).not.toHaveClass('active')
		expect(screen.getByText('Active')).toHaveClass('active')
		expect(screen.getByText('Completed')).not.toHaveClass('active')

		rerender(
			<TodoFooter
				setFilter={mockSetFilter}
				clearCompleted={mockClearCompleted}
				todos={sampleTodos}
				activeFilter="completed"
			/>
		)

		expect(screen.getByText('All')).not.toHaveClass('active')
		expect(screen.getByText('Active')).not.toHaveClass('active')
		expect(screen.getByText('Completed')).toHaveClass('active')
	})
})
