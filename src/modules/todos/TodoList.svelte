<script>
  import { todos } from './store/todos'

  import AddTodo from './AddTodo.svelte'
  import TodoItem from './TodoItem.svelte'


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

  $: uncompletedTodos = $todos.filter(todo => !todo.completed)
  $: completedTodos = $todos.filter(todo => todo.completed)

</script>


<AddTodo on:ADD_TODO={handleAddTodo} />

<h1>Uncompleted Todos</h1>
<ul>
  {#each uncompletedTodos as todo}
    <TodoItem {...todo} on:TOGGLE_TODO={handleToggleTodo} on:DELETE_TODO={handleDeleteTodo}/>
  {/each}
</ul>

<hr>

<h1>Completed Todos</h1>
<ul>
  {#each completedTodos as todo}
    <TodoItem {...todo} on:TOGGLE_TODO={handleToggleTodo} on:DELETE_TODO={handleDeleteTodo}/>
  {/each}
</ul>
