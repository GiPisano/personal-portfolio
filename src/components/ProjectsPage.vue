<script>
export default {
  data() {
    return {
      Projects: [
        {
          id: 1,
          title: "Campo Minato",
          imgSrc: "/src/assets/campoMinato.png",
          demoLink: "https://gipisano.github.io/js-campominato-grid/",
          codeLink: "https://github.com/GiPisano/js-campominato-grid",
        },
        {
          id: 2,
          title: "Proj HTML VueJS",
          imgSrc: "/src/assets/proj-html-vuejs.png",
          demoLink: "https://gipisano.github.io/proj-html-vuejs/",
          codeLink: "https://github.com/GiPisano/proj-html-vuejs",
        },
        {
          id: 3,
          title: "Vue Slider",
          imgSrc: "/src/assets/vue-slider.png",
          demoLink: "https://gipisano.github.io/vue-slider/",
          codeLink: "https://github.com/GiPisano/vue-slider",
        },
        {
          id: 4,
          title: "Travel App",
          imgSrc: "/src/assets/travel-app.png",
          demoLink: "https://your-travel-diary.netlify.app/",
          codeLink: "https://github.com/GiPisano/travel-app",
        },
      ],
    };
  },
};
</script>

<template>
  <h1 class="text-center">My Projects</h1>
  <div class="container">
    <div class="row g-4">
      <div v-for="project in Projects" :key="project.id" class="col-4">
        <div class="card">
          <div class="card-header">
            <img :src="project.imgSrc" :alt="project.title" />
          </div>
          <div class="card-body">
            <button class="btn btn-warning">
              <a :href="project.demoLink" target="_blank">Demo</a>
            </button>
            <button class="btn btn-warning">
              <a :href="project.codeLink" target="_blank">Code</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
}

.card-body {
  display: flex;
  justify-content: space-between;
}
</style>
