export default function useRemove(todoRef) {
  const remove = (todo) => {
    const index = todoRef.value.indexOf(todo)
    index >= 0 && todoRef.value.splice(index, 1)
  }

  const clearCompleted = () => {
    todoRef.value = todoRef.value.filter(item => !item.completed)
  }
  return {
    remove,
    clearCompleted
  }
}