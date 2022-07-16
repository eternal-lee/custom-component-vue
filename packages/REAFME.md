### package

#### 引入组件

```html
import customCom from 'custom-component-vue'

import 'custom-component-vue/lib/custom-component-vue.css' 

Vue.use(customCom)
```

Tips: 暂时只支持全部引入

注意：发布的时候只需lib packag.json 文件、其他不必要的文件临时删除