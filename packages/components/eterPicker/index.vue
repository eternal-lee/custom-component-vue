<template>
  <div class="picker-wheel">
    <div
      class="mask-top border-bottom-1px"
      :style="{ height: (itemHeight * (visibleItemCount - 1)) / 2 + 'px' }"
    ></div>
    <div
      class="mask-bottom border-top-1px"
      :style="{ height: (itemHeight * (visibleItemCount - 1)) / 2 + 'px' }"
    ></div>
    <div class="wheel-wrapper" ref="wheelWrapper" :style="columnsStyle">
      <div class="wheel">
        <ul
          class="wheel-scroll"
          ref="wrapper"
          :style="wrapperStyle"
          @touchstart="onTouchStart"
          @touchmove="onTouchMove"
          @touchend="onTouchEnd"
        >
          <li
            v-for="(item, index) in columns"
            :key="index"
            :class="{
              'wheel-disabled-item': item.disabled,
              'wheel-item_active': currentIndex == index
            }"
            class="wheel-item"
            :style="{ height: itemHeight + 'px' }"
            @click="onClickItem(index)"
          >
            <slot name="option" :item="item">
              {{ item }}
            </slot>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import TouchMixin from './../../mixins/touch'
import { preventDefault, range, getElementTranslateY } from '../../mixins/utils'
import { computed, watch } from 'vue'

const DEFAULT_DURATION = 200

// 惯性滑动思路:
// 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_LIMIT_TIME` 且 move
// 距离大于 `MOMENTUM_LIMIT_DISTANCE` 时，执行惯性滑动
export const MOMENTUM_LIMIT_TIME = 300
export const MOMENTUM_LIMIT_DISTANCE = 15
export default {
  name: 'eterPicker',
  props: {
    defaultIndex: {
      type: [Number, String],
      default: 0
    },
    swipeDuration: {
      type: [Number, String],
      default: 1000
    },
    columns: {
      type: Array,
      default: () => []
    },
    visibleItemCount: {
      type: [Number, String],
      default: 5
    },
    itemHeight: {
      type: [Number, String],
      default: 44
    }
  },
  mixins: [TouchMixin],
  setup(props, { emit }) {
    let { direction, deltaY, touchStart, touchMove } = TouchMixin()
    let { swipeDuration, columns, visibleItemCount, itemHeight, defaultIndex } =
      reactive(props)
    let wrapper = ref(null)

    let currentIndex = ref(defaultIndex)
    let transitionEndTrigger = ref(null)

    let moving = ref(false)
    let offset = ref(0)
    let startOffset = ref(0)
    let duration = ref(0)

    let touchStartTime = ref(Date.now())
    let momentumOffset = ref(0)

    let baseOffset = computed(() => {
      return (itemHeight * (visibleItemCount - 1)) / 2
    })

    let count = computed(() => {
      return columns.length
    })

    const columnsStyle = computed(() => {
      return {
        height: visibleItemCount * itemHeight + 'px'
      }
    })

    const wrapperStyle = computed(() => {
      return {
        transform: `translate3d(0, ${offset.value + baseOffset.value}px, 0)`,
        transitionDuration: `${duration.value}ms`,
        transitionProperty: duration.value ? 'all' : 'none'
      }
    })

    watch(() => props.defaultIndex, val => {
      setIndex(val)
    }, {
      immediate: true
    })

    function onTouchStart(event) {
      
      touchStart(event)

      if (moving.value) {
        const translateY = getElementTranslateY(wrapper.value)
        offset.value = Math.min(0, translateY - baseOffset.value)
        startOffset.value = offset.value
      } else {
        startOffset.value = offset.value
      }

      duration.value = 0
      touchStartTime.value = Date.now()
      momentumOffset.value = startOffset.value
      transitionEndTrigger.value = null
    }

    function onTouchMove(event) {
      touchMove(event)

      if (direction.value === 'vertical') {
        moving.value = true
        preventDefault(event, true)
      }

      offset.value = range(
        startOffset.value + deltaY.value,
        -(count.value * itemHeight),
        itemHeight
      )

      const now = Date.now()
      if (now - touchStartTime.value > MOMENTUM_LIMIT_TIME) {
        touchStartTime.value = now
        momentumOffset.value = offset.value
      }
    }

    function onTouchEnd() {
      const distance = offset.value - momentumOffset.value
      const _duration = Date.now() - touchStartTime.value
      const allowMomentum =
        _duration < MOMENTUM_LIMIT_TIME &&
        Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE

      if (allowMomentum) {
        momentum(distance, _duration)
        return
      }
      const index = getIndexByOffset(offset.value)
      duration.value = DEFAULT_DURATION
      setIndex(index, true)

      // compatible with desktop scenario
      // use setTimeout to skip the click event Emitted after touchstart
      setTimeout(() => {
        moving.value = false
      }, 0)
    }

    function getIndexByOffset(_offset) {
      return range(Math.round(-_offset / itemHeight), 0, count.value - 1)
    }

    function momentum(distance, _duration) {
      const speed = Math.abs(distance / _duration)

      distance = offset.value + (speed / 0.003) * (distance < 0 ? -1 : 1)

      const index = getIndexByOffset(distance)
      duration.value = +swipeDuration
      setIndex(index, true)
    }

    function setIndex(index, emitChange) {
      index = range(index, 0, count.value) || 0
      const _offset = -index * itemHeight

      const trigger = () => {
        if (index !== currentIndex.value) {
          currentIndex.value = index

          if (emitChange) {
            emit('pickerChange', index)
          }
        }
      }

      // trigger the change event after transitionend when moving
      if (moving.value && offset !== offset.value) {
        transitionEndTrigger.value = trigger
      } else {
        trigger()
      }

      offset.value = _offset
      stopMomentum()
    }

    function onClickItem(index) {
      duration.value = DEFAULT_DURATION
      setIndex(index, true)
    }

    function onTransitionEnd() {
      // 这里的stopMomentum方法不需要定时器
      stopMomentum()
    }

    function stopMomentum() {
      setTimeout(() => {
        moving.value = false
        duration.value = 0

        if (transitionEndTrigger.value) {
          transitionEndTrigger.value()
          transitionEndTrigger.value = null
        }
      }, duration.value + 100)
    }

    return {
      wrapper,
      columnsStyle,
      wrapperStyle,
      currentIndex,

      onTouchStart,
      onTouchMove,
      onTouchEnd,
      getIndexByOffset,
      onClickItem,
      stopMomentum,
      onTransitionEnd
    }
  }
}
</script>

<style scoped lang='less'>
@import url('./../../styles/less/eterPicker.less');
</style>
