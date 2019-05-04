<script>
  import { createEventDispatcher } from 'svelte'
  import { todos } from './store/todos'
  import { ADD_TODO } from './todoActionTypes'


  const dispatch = createEventDispatcher()
  let text = ''

</script>

<form>
  <label>
    Todo
    <input type="text" bind:value={text} />
  </label>
  <button on:click={(e) => {
    e.preventDefault()
    dispatch(ADD_TODO, { text })
    text = ''
  }}>Add Todo</button>
</form>

