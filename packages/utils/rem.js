export default function() {
  var docEl = document.documentElement
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var recalc = function() {
    // var clientWidth = docEl.clientWidth;
    var rem = docEl.clientWidth / 10
    if (!rem) return
    // docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
    docEl.style.fontSize = rem + 'px'
  }
  recalc()
  if (!document.addEventListener) return
  window.addEventListener(resizeEvt, recalc, false)
  document.addEventListener('DOMContentLoaded', recalc, false)
}
