<script></script>

<template>
  <div class="nav">
    <router-link
      :to="{ name: 'home' }"
      class="nav-link"
      :class="{ active: $route.name === 'home' }"
      >Home</router-link
    >
    <router-link
      :to="{ name: 'about' }"
      class="nav-link"
      :class="{ active: $route.name === 'about' }"
      >About</router-link
    >
    <router-link
      :to="{ name: 'projects' }"
      class="nav-link"
      :class="{ active: $route.name === 'projects' }"
      >Projects</router-link
    >
  </div>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  z-index: 1;
  position: fixed;
  bottom: 0;
  left: 50%;
  padding: 5px 1px;
  border-radius: 50px;
  transform: translate(-50%, -50%);
}

.nav-link {
  text-decoration: none;
  color: white;
  margin: 0 5px;
  border-radius: 50px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: rgb(61, 61, 61);
}

.active {
  background-color: rgb(61, 61, 61);
}

@media screen and (max-width: 600px) {
  .nav {
    top: 0;
    bottom: auto;
    transform: translate(-50%, 0%);
  }
}
</style>
