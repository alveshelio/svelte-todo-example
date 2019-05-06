<script>
  import { createEventDispatcher } from 'svelte'
  import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from './todoActionTypes'
  import { filters } from './store/todos'

  export let todosCount

  const dispatch = createEventDispatcher()
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

  .active {
    border: 1px solid rgba(175, 47, 47, 0.2);
  }

  button {
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 14px;
  }

</style>

<footer>
  <div class="todos-count">{todosCount} items</div>
  <div>
    <button class:active={$filters.show === SHOW_ALL} on:click={() => dispatch(SHOW_ALL)}>All</button>
    <button class:active={$filters.show === SHOW_ACTIVE} on:click={() => dispatch(SHOW_ACTIVE)}>Active</button>
    <button class:active={$filters.show === SHOW_COMPLETED} on:click={() => dispatch(SHOW_COMPLETED)}>Completed</button>
  </div>
</footer>
