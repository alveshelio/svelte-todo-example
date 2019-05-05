import { writable } from 'svelte/store'

export const getLocalStorageItem = (key) => JSON.parse(localStorage.getItem(key))
export const setLocalStorageItem = (key, value) => localStorage.setItem(key, JSON.stringify(value))

const todosLocalStorage = getLocalStorageItem('todos') || []

console.warn('todos in storage', todosLocalStorage)

export const todos = writable(todosLocalStorage)
