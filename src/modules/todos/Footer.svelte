<script>
  import { createEventDispatcher } from 'svelte'
  import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from './todoActionTypes'
  const dispatch = createEventDispatcher()

  export let todosCount

</script>

<style>
  footer {
    display: grid;
    grid-template-columns: 150px auto;
    align-content: center;
    height: 60px;
    padding: 0 20px;
  }

  .todos-count {
    font-size: 14px;
  }
  button {
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 14px;
  }

  button:focus {
  border: 1px solid rgba(175, 47, 47, 0.2);
  }
</style>

<footer>
  <div class="todos-count">{todosCount} items</div>
  <div>
    <button on:click={() => dispatch(SHOW_ALL)}>All</button>
    <button on:click={() => dispatch(SHOW_ACTIVE)}>Active</button>
    <button on:click={() => dispatch(SHOW_COMPLETED)}>Completed</button>
  </div>
</footer>
