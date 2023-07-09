<template>
  <div id="mapChart" class="chart"></div>
</template>

<script>
// https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json
import * as echarts from 'echarts'
import axios from 'axios'
let points = [
  {
    value: [118.8062, 31.9208],
    itemStyle: { color: '#6ab5d8' }
  },
  {
    value: [127.9688, 45.368],
    itemStyle: { color: '#b02a02' }
  },
  {
    value: [113.665412, 34.757975],
    itemStyle: { color: '#d00' }
  },
  {
    value: [87.617733, 43.792818],
    itemStyle: { color: '#f00' }
  },
  {
    value: [101.778916, 36.623178],
    itemStyle: { color: '#0f0' }
  },
  {
    value: [106.713478, 26.578343],
    itemStyle: { color: '#e0fa0d' }
  },
  {
    value: [104.065735, 30.659462],
    itemStyle: { color: '#4ab2e5' }
  }
]

let linePoints = [
  {
    coords: [
      [87.617733, 43.792818],
      [118.8062, 31.9208]
    ],
    lineStyle: { color: '#6ab5d8' }
  },
  {
    coords: [
      [87.617733, 43.792818],
      [127.9688, 45.368]
    ],
    lineStyle: { color: '#b02a02' }
  },
  {
    coords: [
      [87.617733, 43.792818],
      [113.665412, 34.757975]
    ],
    lineStyle: { color: '#d00' }
  },
  {
    coords: [
      [87.617733, 43.792818],
      [101.778916, 36.623178]
    ],
    lineStyle: { color: '#0f0' }
  },
  {
    coords: [
      [87.617733, 43.792818],
      [106.713478, 26.578343]
    ],
    lineStyle: { color: '#e0fa0d' }
  },
  {
    coords: [
      [87.617733, 43.792818],
      [104.065735, 30.659462]
    ],
    lineStyle: { color: '#4ab2e5' }
  }
]
export default {
  name: 'mapChart',
  data() {
    return {
      myEcharts: null,
      chinaJson: {},
      mapOption: {
        series: [
          {
            type: 'map',
            map: 'china'
          }
        ]
      }
    }
  },
  async mounted() {
    await this.getChinaJson()
  },
  methods: {
    getChinaJson() {
      axios
        .get('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json')
        .then(res => {
          this.chinaJson = res.data

          this.initEchart()
        })
    },
    initEchart() {
      echarts.registerMap('china', this.chinaJson)
      this.myEcharts = echarts.init(document.querySelector('#mapChart'))
      this.mapOption = {
        // 地理坐标系组件
        geo: {
          map: 'china',
          aspectScale: 0.75, // scale 地图长宽比
          zoom: 1.1 // 当前地图视角缩放比
        },
        series: [
          {
            type: 'map',
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: '#1DE9b6',
                  fontSize: '8'
                }
              },
              emphasis: {
                textStyle: {
                  color: 'rgb(183,185,14)',
                  fontSize: '10'
                }
              }
            },
            itemStyle: {
              normal: {
                borderColor: 'rgb(147, 235, 248)',
                borderWidth: 1,
                areaColor: {
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgb(31,54,150)'
                    },
                    {
                      offset: 1,
                      color: 'rgb(89,120,142)'
                    }
                  ]
                }
              },
              emphasis: {
                areaColor: 'rgb(45, 229, 206)',
                borderWidth: 0.1
              }
            },
            zoom: 1.1,
            map: 'china'
          },
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            symbolSize: 10,
            zlevel: 1,
            itemStyle: {
              color: '#b02a02'
            },
            data: points
          },
          {
            type: 'lines',
            zLevel: 2,
            large: true,
            // 线性特效
            effect: {
              show: true,
              // color: '#0fff17',
              trailLength: 0.1,
              period: 4, // 时间
              symbol: 'arrow', // 图标 或者  brushType: 'stroke',
              symbolSize: 7 // 图标大小
            },
            lineStyle: {
              normal: {
                color: '#1DE9B8',
                width: 1,
                opacity: 0.3,
                curvenss: 0.3 // 曲直度
              }
            },
            data: linePoints
          }
        ]
      }
      this.myEcharts.setOption(this.mapOption)

      this.myEcharts.on('click', params => {
        console.warn(params)
      })
    }
  }
}
</script>

<style scoped>
.chart {
  width: 995px;
  height: 619px;
  margin: 0 auto;
}
</style>
