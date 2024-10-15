# Todos Application

This is a simple ToDo application built with React, TypeScript, and Vite. The app allows users to add new tasks, mark
them as completed, and filter them by status (all, active, completed). Jest is used for testing, and CSS is used for
styling the components.

## Features

- **Add Tasks**: Users can add new tasks to their list.
- **Mark as Completed**: Tasks can be marked as completed by clicking on the checkbox next to each task.
- **Filter Tasks**: Users can filter tasks to view all, active, or completed tasks.
- **Clear Completed Tasks**: Easily remove all completed tasks from the list.

## Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **Jest**
- **CSS**

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your local machine. **Node.js** is required to manage
dependencies and start the development server. If you don't have Node.js installed, you can download it from
the [official Node.js website](https://nodejs.org/).

To verify that Node.js and npm are installed, you can run the following commands in your terminal: node -v, npm -v

### Installation

1. Clone this repository:
	 git clone https://github.com/ILYALELKOV/TODO_TYPESCRIPT_JEST.git
2. Go to directory: cd TODO_TYPESCRIPT_JEST
3. Install the dependencies via the command line and start the development server: npm install && npm run start.

### Вопросы по ТЗ:

1. По макету не совсем понятен такой элемент, как 'галочка' внутри input. Должен ли он быть просто декоративным
	 элементом
	 или только
	 по его нажатию должны появляться задачи?
2. В блоке items left (счетчик невыполненных задач), если невыполненных задач нет, то должен ли он отображать цифру 0
	 или
	 скрываться вовсе?
3. Нижний блок (footer), должен ли он быть, если задач вообще нет?
4. Необходимо ли добавить визуальные эффекты для input при фокусе на нем, для улучшения usability?
5. Необходимо ли добавить работу с localStorage для сохранения задач пользователя?
6. Необходимо ли отобразить ошибку, если пользователь ничего не ввел и пытается добавить пустую задачу?
