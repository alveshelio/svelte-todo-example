<script>
  import { createEventDispatcher} from 'svelte'
  import { TOGGLE_TODO, DELETE_TODO } from './todoActionTypes'

  export let text
  export let completed
  export let id

  const dispatch = createEventDispatcher()
</script>

<li>
  {text} - {completed.toString()} - {id}
  <button on:click={() => dispatch(TOGGLE_TODO, { id })}> ✔️ </button>
  <button on:click={() => dispatch(DELETE_TODO, { id })}> 🗑 </button>
</li>
