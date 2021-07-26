import { onMounted, ref } from "vue";

export default function() {
  const aa = ref(121)

  let clickLeft = (q = '') => {
    console.warn('left' + q)
  }

  onMounted(() => {
    clickLeft(6565)
  })

  return {
    aa,
    clickLeft
  }
}