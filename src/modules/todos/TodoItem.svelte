<script>
  import { createEventDispatcher} from 'svelte'
  import { TOGGLE_TODO, DELETE_TODO } from './todoActionTypes'

  export let text
  export let completed
  export let id

  const dispatch = createEventDispatcher()
</script>

<style>
  .toggle {
      text-align: center;
      width: 40px;
      height: auto;
      /*position: absolute;*/
      /*top: 0;*/
      /*bottom: 0;*/
      margin: auto 0;
      border: none;
    }
</style>

<li>
  <input type="checkbox" class="toggle" />
  {text} - {completed.toString()} - {id}
  <button on:click={() => dispatch(TOGGLE_TODO, { id })}> ✔️ </button>
  <button on:click={() => dispatch(DELETE_TODO, { id })}> 🗑 </button>
</li>
