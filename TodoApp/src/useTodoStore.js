import create from "zustand"
import { devtools, persist } from "zustand/middleware"

/* Zustand state management object */

const useTodoStore = (set) => ({
  
	todos: [],
	filteredTodos: [],
	inputText: "",
	filter: "all",

	/* Add a todo into the todos (array) */
	addTodo: (todo) => {
		set((state) => ({
			/* Spread operator, quickly copy all object todos over, 
			and one more from the param */
			todos: [...state.todos, todo],
		}))
	},

	/* Remove a todo from the todos (array) */
	removeTodo: (todoID) => {
		set((state) => ({
			/* Filter out the todo with the ID */
			todos: state.todos.filter((todo) => todo.id !== todoID),
		}))
	},

	/* Completed todos */
	toggleCompletedTodo: (todoID) => {
		set((state) => ({
			/* Map through all the todo, 
			the one with the id now marked completed */
			todos: state.todos.map((todo) => todo.id === todoID 
				? { ...todo, completed: !todo.completed } : todo),
		}))
	},

	/* setFilteredTodos */
	setFilteredTodos: () => {
		set((state) => ({
			filteredTodos:
				/* completed, or uncompleted */
				state.filter === "completed"
					? state.todos.filter((todo) => todo.completed === true)
					: state.filter === "uncompleted"

				/* uncompleted or all */
					? state.todos.filter((todo) => todo.uncompleted === true)
					: state.todos,
		}))
	},

	/* Set Input Text, todo content */
	setInputText: (text) => {
		set(() => ({
			inputText: text,
		}))
	},

	/* Set Filter, filter options */
	setFilter: (filter) => {
		set(() => ({
			filter: filter,
		}))
	},

})

/* Create Store */
const todoStore = create(
	devtools(
		persist(useTodoStore, {name: "todoStore"})
	)
);

export default todoStore;
