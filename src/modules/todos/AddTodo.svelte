<script>
  import { createEventDispatcher } from 'svelte'
  import { todos } from './store/todos'
  import { ADD_TODO } from './todoActionTypes'


  const dispatch = createEventDispatcher()
  let text = ''

  const addTodo = (e) => {
    e.preventDefault()

    if (text.trim() !== '') {
      dispatch(ADD_TODO, { text })
      text = ''
    }
  }

</script>

<style>
  form {
    background: #fff;
    padding: 16px 16px 16px 60px;
    width: 100%;
  }
  input {
    border: none;
    font-size: 36px;
    font-weight: 100;
    margin: 0;
    width: 100%;
  }
</style>

<form on:submit={addTodo}>
    <input placeholder="what needds to be done" type="text" bind:value={text} />
</form>

