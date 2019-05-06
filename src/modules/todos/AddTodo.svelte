<script>
  import { createEventDispatcher } from 'svelte'
  import { ADD_TODO, COMPLETE_ALL } from './todoActionTypes'


  const dispatch = createEventDispatcher()
  let text = ''

  const addTodo = (e) => {
    e.preventDefault()

    if (text.trim() !== '') {
      dispatch(ADD_TODO, { text })
      text = ''
    }
  }

  const completeAllTodos = () => {
    dispatch(COMPLETE_ALL)
  }

</script>

<style>
  form {
    display: flex;
    align-items: center;
    background: #fff;
    padding: 16px 0 16px 0;
    width: 100%;
  }

  svg {
    fill: #eee;
    margin-right: 10px;
  }

  svg:hover {
    cursor:pointer;
  }

  input {
    border: 1px solid #eee;
    font-size: 36px;
    font-weight: 100;
    margin: 0;
    width: 100%;
  }

</style>

<form on:submit={addTodo}>
  <svg
  class="svg"
  xmlns="http://www.w3.org/2000/svg"
  width="45"
  height="23"
  viewBox="0 0 450 450"
  on:click={completeAllTodos}
  >
    <path d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"/>
  </svg>
  <input placeholder="what needs to be done" type="text" bind:value={text} />
</form>

