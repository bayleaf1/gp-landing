import { ref } from 'vue'
import { useElementVisibility } from '@vueuse/core'
const KEY = 'section';

export function useSection(){
  return useState(KEY)
}

export default function useSectionTracker(sectionName) {
  const target = ref(null)
  const targetIsVisible = useElementVisibility(target)
  const state = useState(KEY)

  watch(targetIsVisible, (value) => {
    // console.log("19-51 hero", value)
    if (value) state.value = sectionName
    // else state.value = ''
  })
  return target
}
