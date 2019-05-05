<script>
  import { setLocalStorageItem, todos } from './store/todos'

  import AddTodo from './AddTodo.svelte'
  import TodoItem from './TodoItem.svelte'
  import Footer from './Footer.svelte'

  const handleAddTodo = (event) => {
    const { text } = event.detail
    // todos.update(store => ([...store, { completed: false, text, id: store.length }]))
    $todos = [...$todos, { completed: false, text, id: $todos.length }]

    setLocalStorageItem('todos', $todos)
  }

  const handleToggleTodo = (event) => {
    const { id } = event.detail
    // $: todos.update(store => store.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    $todos = $todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    setLocalStorageItem('todos', $todos)
  }

  const handleDeleteTodo = (event) => {
    const { id } = event.detail
    $todos = $todos.filter(todo => todo.id !== id)
    setLocalStorageItem('todos', $todos)
  }

    $: filteredTodos = $todos
    // $: completedTodos = $todos.filter(todo => todo.completed)

  const handleShowAll = () => {
    $: filteredTodos = $todos
  }

  const handleShowActive = () => {
    $: filteredTodos = $todos.filter(todo => !todo.completed)
  }

  const handleShowCompleted = () => {
    $: filteredTodos = $todos.filter(todo => todo.completed)
  }

</script>

<style>
  section {
    background: #fff;
  }
  ul {
      list-style: none;
      margin: 0;
  }
</style>

<section>
  <AddTodo on:ADD_TODO={handleAddTodo} />
  <ul>
    {#each filteredTodos as todo}
      <TodoItem {...todo} on:TOGGLE_TODO={handleToggleTodo} on:DELETE_TODO={handleDeleteTodo}/>
    {/each}
  </ul>

  <Footer
    todosCount={$todos.length}
    on:SHOW_ALL={handleShowAll}
    on:SHOW_ACTIVE={handleShowActive}
    on:SHOW_COMPLETED={handleShowCompleted}
  />
</section>
