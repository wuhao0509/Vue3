import { ref, computed } from "vue";
export default function useEditTodo(todoRef) {
    const editingTodoRef = ref(null)
    // 缓存之前的title
    let originTitle = null 

    const editTodo = (todo) => {
      originTitle = todo.title
      editingTodoRef.value = todo
    } 

    const doneEdit = () => {
      // 文本修改完成后，已自动更新至localStorage，所以完成编辑直接取消输入框展示todoList即可
      editingTodoRef.value = null
    }

    const cancelEdit = (todo) => {
      editingTodoRef.value = null
      todo.title = originTitle
    }

    const allDoneRef = computed({
      get() {
        return todoRef.value.filter(item => !item.completed).length === 0
      },
      set(checked) {
        todoRef.value.forEach(item => {
          item.completed = checked
        })
      }
    })
    return {
      editTodo,
      editingTodoRef,
      doneEdit,
      cancelEdit,
      allDoneRef
    }
}