# vue-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

* 引入vant步骤：
  * npm install vant --save
  * npm install vant@next --save

* babel-plugin-import 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式：安装插件 npm i babel-plugin-import -D

* 在babel.config.js文件里面加入

```

plugins: [
  ['import', {
    libraryName: 'vant',
    libraryDirectory: 'es',
    style: true
  }, 'vant']
]
```

### vue eslint检测 Prettierrc

* 依赖：npm install @vue/cli-plugin-eslint babel-eslint eslint eslint-plugin-vue prettier prettier-eslint –-save-dev

* 1、修改VsCode文件
  * 点击文件-首选项-设置，在搜索框里输入Json即可看到修改配置：
  ![https://pic3.zhimg.com/80/v2-ecacb793786b26974c96696b1fedba1e_720w.jpg](https://pic3.zhimg.com/80/v2-ecacb793786b26974c96696b1fedba1e_720w.jpg)
  * 然后输入以下配置：
  <pre><code>
  {
    "prettier.requireConfig": true,
    "editor.formatOnSave": true
  }
  </code></pre>
* 2、配置Prettierrc文件
  * 在Vue的根目录下创建 ".prettierrc"文件，然后输入以下规范：
  <pre><code>
  module.exports = {
    semi: false, // 行位是否使用分号，默认为true
    trailingComma: 'es5', // 是否使用尾逗号，有三个可选值"<none|es5|all>"
    singleQuote: true, //字符串是否使用单引号，默认为false，使用双引号
    printWidth: 100, // 一行的字符数，如果超过会进行换行，默认为80
    tabWidth: 4, // 一个tab代表几个空格数
    useTabs: true, // 启用tab缩进
    bracketSpacing: true, // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  }

  {
    "eslintIntegration": true,
    "singleQuote": true,
    "semi": false,
    "endOfLine": "auto",
    "tabWidth": 2,
    "trailingComma": "none",
    "bracketSpacing": true,
    "arrowParens": "avoid"
  }
  </code></pre>
