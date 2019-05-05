<script>
	import TodoList from './modules/todos/TodoList.svelte'
</script>

<style>
  main {
    display: grid;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    width: 500px;
  }

  h1 {
    color: rgba(175, 47, 47, 0.15);
    font-size:  100px;
    font-weight: 100;
    text-align: center;
    line-height: 100px;
    margin: 0;
  }
</style>

<h1>todos</h1>
<main>
  <TodoList />
</main>
