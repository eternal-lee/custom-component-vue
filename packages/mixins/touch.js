import { ref } from "vue"

export default function() {
  const startX = ref(0);
  const startY = ref(0);
  const deltaX = ref(0);
  const deltaY = ref(0);
  const offsetX = ref(0);
  const offsetY = ref(0);
  const direction = ref('')

  function getDirection(x, y) {
    if (x > y) {
      return 'horizontal'
    }
  
    if (y > x) {
      return 'vertical'
    }
  
    return ''
  }

  function touchStart(event) {
    resetTouchStatus()
    startX.value = event.touches[0].clientX
    startY.value = event.touches[0].clientY
  }

  function touchMove(event) {
    const touch = event.touches[0]
    // safari back will set clientX to negative number
    deltaX.value = touch.clientX < 0 ? 0 : touch.clientX - startX.value
    deltaY.value = touch.clientY - startY.value
    offsetX.value = Math.abs(deltaX.value)
    offsetY.value = Math.abs(deltaY.value)

    // lock direction when distance is greater than a certain value
    const LOCK_DIRECTION_DISTANCE = 10
    if (
      !direction.value ||
      (offsetX.value < LOCK_DIRECTION_DISTANCE &&
        offsetY.value < LOCK_DIRECTION_DISTANCE)
    ) {
      direction.value = getDirection(offsetX.value, offsetY.value)
    }
  }

  function resetTouchStatus() {
    deltaX.value = 0;
    deltaY.value = 0;
    offsetX.value = 0;
    offsetY.value = 0;
    direction.value = '';
  }

  return {
    startX,
    startY,
    deltaX,
    deltaY,
    offsetX,
    offsetY,
    direction,
    touchStart,
    touchMove,
    resetTouchStatus
  }
}

