import { ref, onMounted, onUnmounted, computed } from 'vue'
import { filter } from '../util/todoStorage'

const validHash = ['all', 'completed', 'active']

export default function useFilter(todoRef) {
    const visibilityRef = ref('all')

    const onHashChange = () => {
      const hash = location.hash.replace(/#\/?/g,'')
      if(validHash.includes(hash)) {
        visibilityRef.value = hash
      } else {
        location.hash = ''
        visibilityRef.value = 'all'
      }
    }

    onMounted(() => {
      window.addEventListener('hashchange', onHashChange)
    })

    onUnmounted(() => {
      window.removeEventListener('hashchange', onHashChange)
    })

    // 过滤出当前类型（all、active、completed）的todo
    const filteredTodoRef = computed(() => {
      return filter(todoRef.value, visibilityRef.value)
    })

    // 过滤出未完成的todo数
    const remainingRef = computed(() => {
      return filter(todoRef.value, 'active').length
    })

    // 过滤出已完成成的todo数
    const completedRef = computed(() => {
      return filter(todoRef.value, 'completed').length
    })
    return {
      visibilityRef,
      filteredTodoRef,
      remainingRef,
      completedRef
    }
}