<script>
  import { createEventDispatcher} from 'svelte'
  import { fade } from 'svelte/transition'
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
    align-items: center;
    border-bottom: 1px solid #eee;
    margin-bottom: 10px;
    height: 50px;
  }

  li:hover button {
    display: block;
  }

  .todoDone {
    text-decoration: line-through;
    color: #ddd;
  }

  .todoItem {
    display: block;
    font-size: 30px;
    line-height: 30px;
    font-weight: 100;
    margin: 0;
    transition: color 0.4s;
    word-break: break-all;
  }

  .todoItem:hover {
    cursor: pointer;
  }

  button {
    border: none;
    background: #fff;
    color: rgba(175, 47, 47, 0.2);
    display: none;
    font-size: 40px;
    font-weight: 100;
    padding: 0;
  }

  button:hover {
    cursor: pointer;
  }
</style>

<li transition:fade>
  <p
    class="todoItem"
    class:todoDone={completed}
    on:dblclick={() => console.warn('doubleClick')}
    on:click={() => dispatch(TOGGLE_TODO, { id })}
  >
    {text}
  </p>
  <button on:click={() => dispatch(DELETE_TODO, { id })}>x</button>
</li>
