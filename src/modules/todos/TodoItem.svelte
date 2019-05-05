<script>
  import { createEventDispatcher} from 'svelte'
  import { TOGGLE_TODO, DELETE_TODO } from './todoActionTypes'

  export let text
  export let completed
  export let id

  const dispatch = createEventDispatcher()
</script>

<style>
  li {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
  }
  .toggle {
    text-align: center;
    width: 40px;
    height: auto;
    margin: auto 0;
    border: none;
  }

  label {
    display: block;
    font-size: 30px;
    line-height: 30px;
    font-weight: 100;
    transition: color 0.4s;
    word-break: break-all;
  }
</style>

<li>
  <label on:click={() => dispatch(TOGGLE_TODO, { id })}>
  <input type="checkbox" class="toggle" />
  {text} - {completed.toString()} - {id}
</label>
<button on:click={() => dispatch(DELETE_TODO, { id })}> 🗑 </button>
</li>
