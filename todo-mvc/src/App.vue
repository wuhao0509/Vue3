<template>
  <div id="app">
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input
          class="new-todo"
          autofocus=""
          autocomplete="off"
          placeholder="What needs to be done?"
          v-model="newTodoRef"
          @keyup.enter="addTodo"
        />
      </header>
      <section class="main" v-show="todoRef.length">
        <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allDoneRef"/>
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li
            class="todo"
            v-for="item in filteredTodoRef"
            :key="item.id"
            :class="{ completed: item.completed ,editing: editingTodoRef === item}"
          >
            <div class="view">
              <input class="toggle" type="checkbox" v-model="item.completed"/>
              <label @dblclick="editTodo(item)">{{ item.title }}</label>
              <button class="destroy" @click="remove(item)"></button>
            </div>
            <input 
              v-model="item.title" 
              @keyup.enter="doneEdit(item)"
              @blur="doneEdit(item)"
              @keyup.escape="cancelEdit(item)"
              class="edit" 
              type="text" 
            />
          </li>
        </ul>
      </section>
      <footer class="footer" v-show="todoRef.length">
        <span class="todo-count">
          <strong>{{ remainingRef }}</strong>
          <span>item{{remainingRef === 1 ? '' : 's'}} left</span>
        </span>
        <ul class="filters">
          <li>
            <a href="#/all" :class="{ selected: visibilityRef === 'all'}">All</a>
          </li>
          <li>
            <a href="#/active" :class="{ selected: visibilityRef === 'active'}">Active</a>
          </li>
          <li>
            <a href="#/completed" :class="{ selected: visibilityRef === 'completed'}">Completed</a>
          </li>
        </ul>
        <button class="clear-completed" v-show="completedRef > 0" @click="clearCompleted">
          Clear completed
        </button>
      </footer>
    </section>
</div>

</template>

<script>
import useNewTodo from './composition/useNewTodo'
import useTodoList from './composition/useTodoList'
import useFilter from './composition/useFilter'
import useEditTodo from './composition/useEditTodo'
import useRemove from './composition/useRemove'

export default {
  setup() {
      const { todoRef } = useTodoList()

      return {
        todoRef,
        ...useNewTodo(todoRef),
        ...useFilter(todoRef),
        ...useEditTodo(todoRef),
        ...useRemove(todoRef)
      }
  }
}
</script>

