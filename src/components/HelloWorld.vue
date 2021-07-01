<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the.
    </p>
    <h3>Installed CLI Plugins</h3>
    <p>{{ title }}</p>
    <h3>Essential Links</h3>
    <h3>Ecosystem</h3>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  /*
   * setup 返回的是一个对象
   */
  setup() {
    const count = ref(0);
    const object = reactive({
      foo: "bar"
    });

    onMounted(() => {})

    return {
      count,
      object,
      title: "组件标题"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
