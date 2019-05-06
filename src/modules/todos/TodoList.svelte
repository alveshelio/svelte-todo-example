<script>
  import { setLocalStorageItem, todos, filteredTodos, filters } from './store/todos'
  import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from './todoActionTypes'

  import AddTodo from './AddTodo.svelte'
  import TodoItem from './TodoItem.svelte'
  import Footer from './Footer.svelte'

  const handleAddTodo = (event) => {
    const { text } = event.detail
    // todos.update(store => ([...store, { completed: false, text, id: store.length }]))
    $todos = [...$todos, { completed: false, text, id: $todos.length }]
  }

  const handleToggleTodo = (event) => {
    const { id } = event.detail
    // $: todos.update(store => store.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    $todos = $todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
  }

  const handleDeleteTodo = (event) => {
    const { id } = event.detail
    $todos = $todos.filter(todo => todo.id !== id)
  }

  const handleShowAll = () => {
    $filters.show = SHOW_ALL
  }

  const handleShowActive = () => {
    $filters.show = SHOW_ACTIVE
  }

  const handleShowCompleted = () => {
    $filters.show = SHOW_COMPLETED
  }

  $: {setLocalStorageItem('filters', $filters)}
  $: {setLocalStorageItem('todos', $todos)}

</script>

<style>
  section {
    background: #fff;
    padding: 0 20px;
  }
  ul {
      list-style: none;
      margin: 0;
      padding: 0;
  }
</style>

<section>
  <AddTodo on:ADD_TODO={handleAddTodo} />
  <ul>
    {#each $filteredTodos as todo}
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
