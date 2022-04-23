import { ref, watchEffect } from 'vue'
import { fetch, save } from '../util/todoStorage'

// 从localStorage获取todoList，并监听，如果todoRef值发生变化，就将新值保存到localStorage
export default function useTodoList() {
  const todoRef = ref(fetch())
  watchEffect(() => {
    save(todoRef.value)
  })
  return {
    todoRef
  }
}