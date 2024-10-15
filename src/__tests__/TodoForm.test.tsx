import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { TodoForm } from '../components/TodoForm/TodoForm.tsx'

describe('TodoForm Component', () => {
	it('renders the input field with the correct placeholder', () => {
		render(<TodoForm addTodo={jest.fn()} />)
		const input = screen.getByPlaceholderText('What needs to be done?')
		expect(input).toBeInTheDocument()
	})

	it('calls addTodo with the correct input value and clears the input field upon form submission', () => {
		const addTodo = jest.fn()
		render(<TodoForm addTodo={addTodo} />)

		const input = screen.getByPlaceholderText('What needs to be done?')
		const testValue = 'New task'

		fireEvent.change(input, { target: { value: testValue } })
		expect(input).toHaveValue(testValue)

		fireEvent.submit(input)

		expect(addTodo).toHaveBeenCalledTimes(1)
		expect(addTodo).toHaveBeenCalledWith(testValue)

		expect(input).toHaveValue('')
	})

	it('does not call addTodo when the input is empty', () => {
		const addTodo = jest.fn()
		render(<TodoForm addTodo={addTodo} />)

		const input = screen.getByPlaceholderText('What needs to be done?')

		fireEvent.submit(input)

		expect(addTodo).not.toHaveBeenCalled()
	})
})
