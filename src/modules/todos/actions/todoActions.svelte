<script>
  import { createEventDispatcher } from 'svelte'
  import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, HIDE_COMPLETED} from '../todoActionTypes'


  const dispatch = createEventDispatcher()

  const addTodo = (event) => {
    console.warn('addTodo dispatch', event)
    // const { text } = event.detail
    dispatch(ADD_TODO, event)
  }

  const toggleTodo = (id) => {
      // const { text } = event.detail
    console.warn('toggleTodo dispatch', id)
    dispatch(TOGGLE_TODO, id)
  }

  const deleteTodo = (id) => {
    console.warn('deleteTodo dispatch', id)
    dispatch(DELETE_TODO, id)
  }

  const hideCompleted = () => {
    console.warn('hide completed dispatch')
    dispatch(HIDE_COMPLETED)
  }

  export const TodoActions = {
    addTodo,
    toggleTodo,
    deleteTodo,
    hideCompleted,
  }
</script>
