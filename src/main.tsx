import { createRoot } from 'react-dom/client'
import TodosApp from './TodoApp.tsx'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
	<TodosApp />
)
