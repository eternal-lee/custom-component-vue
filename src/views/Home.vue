<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <h3>Installed CLI Plugins</h3>
    <h3>Essential Links</h3>
    <h3>Ecosystem</h3>
    <buoy-popup></buoy-popup>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>
