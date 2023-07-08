export function range(num, min, max) {
  return Math.min(Math.max(num, min), max)
}

export function stopPropagation(event) {
  event.stopPropagation()
}

export function preventDefault(event, isStopPropagation) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault()
  }

  if (isStopPropagation) {
    stopPropagation(event)
  }
}

export function getElementTranslateY(element) {
  const style = window.getComputedStyle(element);
  const transform = style.transform || style.webkitTransform;
  const translateY = transform.slice(7, transform.length - 1).split(', ')[5];

  return Number(translateY);
}