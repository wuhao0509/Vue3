import { ref } from 'vue'
import { generateId } from '../util/todoStorage'

// 创建newTodo之后，保存到localStorage
export default function useNewTodo(todosRef) {
  const newTodoRef = ref('')
  const addTodo = () => {
    const value = newTodoRef.value && newTodoRef.value.trim()
    if(!value) {
      return
    }
    const todo = {
      id: generateId(),
      completed: false,
      title: newTodoRef.value
    }

    todosRef.value.push(todo)
    newTodoRef.value = ''
  }

  return {
    newTodoRef,
    addTodo
  }
}