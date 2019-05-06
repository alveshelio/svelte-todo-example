import { writable, derived } from 'svelte/store'
import { SHOW_ALL, SHOW_ACTIVE } from '../todoActionTypes'

export const getLocalStorageItem = (key) => JSON.parse(localStorage.getItem(key))
export const setLocalStorageItem = (key, value) => localStorage.setItem(key, JSON.stringify(value))

const todosLocalStorage = getLocalStorageItem('todos') || []
const filtersLocalStorage = getLocalStorageItem('filters') || { show: SHOW_ALL }

export const todos = writable(todosLocalStorage)
export const filters = writable(filtersLocalStorage)
export const filteredTodos = derived([todos, filters], ([$todos, $filters]) =>
  $filters.show === SHOW_ALL
    ? $todos
    : $filters.show === SHOW_ACTIVE
      ? $todos.filter(todo => !todo.completed)
      : $todos.filter(todo => todo.completed)
)
