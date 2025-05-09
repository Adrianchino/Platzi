import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";


const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
	
	const [ todos, dispatch ] = useReducer(todoReducer, [], init)
	
		useEffect(() => {
			localStorage.setItem('todos', JSON.stringify( todos ));
		
		}, [todos])
		
	
		const handleNewTodo = ( todo ) => {
			const action = {
				type: '[TODO] Add Todo',
				payload: todo
			}
	
			dispatch( action );
		}
	
		const handleDeleteTodo = ( id ) => {
			dispatch({
				type: '[TODO] Remove Todo',
				payload: id
			})
		}
	
		const handleToggleTodo = ( id ) => {
			dispatch({
				type: '[TODO] Toggle Todo',
				payload: id
			});
		}

		const handleEditTodo = (id, updates) => {
			dispatch({
				type: '[TODO] Edit Todo',
				payload: {
					id,
					updates,
				}
			})
		}

		return {
			todos,

			todosCount: todos.length, // Para contador
			pendingTodosCount: todos.filter(todo=> !todo.done).length, // Para las tareas pendientes

			handleDeleteTodo, // Para eliminar 
			handleNewTodo, // Para agregar
			handleToggleTodo, // Para tachar 
			handleEditTodo // para editar 
		}
}


