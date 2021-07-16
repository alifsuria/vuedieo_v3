<template>
  <div class="mini-sidebar">
    <ul>
      <router-link to="/" custom v-slot="{ href, navigate }">
        <li @click="navigate" class="link active" :href="href">
          <span class="link-icon">
            <font-awesome-icon :icon="['fas', 'home']" size="lg"
          /></span>
          <span class="link-text">Home</span>
        </li>
      </router-link>
      <router-link to="/explore" custom v-slot="{ href, navigate }">
        <li @click="navigate" class="link" :href="href">
          <span class="link-icon">
            <font-awesome-icon :icon="['fas', 'compass']" size="lg"
          /></span>
          <span class="link-text">Explore</span>
        </li>
      </router-link>
      <router-link to="/subscription" custom v-slot="{ href, navigate }">
        <li @click="navigate" :href="href" class="link">
          <span class="link-icon">
            <font-awesome-icon :icon="['fas', 'wallet']" size="lg"
          /></span>
          <span class="link-text">Subscription</span>
        </li>
      </router-link>
      <router-link to="/library" custom v-slot="{ href, navigate }">
        <li @click="navigate" class="link" :href="href">
          <span class="link-icon">
            <font-awesome-icon :icon="['fas', 'window-restore']" size="lg" />
          </span>
          <span class="link-text">Library</span>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.mini-sidebar {
  width: 79px;
  height: 100vh;
  position: fixed;
  z-index: 9;
  background-color: #212529;
}

ul {
  list-style-type: none;
  margin: 5px 0px;
  padding: 0;
}
li {
  padding: 12px 10px;
  cursor: pointer;
  color: #909090;
}
li.active,
li.active.link .link-text {
  color: white;
  text-decoration: none;
}
li:hover {
  background-color: rgb(73, 78, 82);
}
.link-icon{
  display: block;
  font-size: 1.1rem;
  margin: 4px 0px;
}
.link-text {
  font-size: 0.7rem;
  color: #909090;
}
li .link a:hover {
  font-size: 0.7rem;
  text-decoration: none;
}
</style>