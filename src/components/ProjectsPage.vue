<script>
export default {
  data() {
    return {
      Projects: [
        {
          id: 1,
          title: "Campo Minato",
          category: "frontend",
          technologies: ["HTML", "CSS", "javascript"],
          responsive: true,
          imgSrc: "/src/assets/campoMinato.png",
          demoLink: "https://gipisano.github.io/js-campominato-grid/",
          codeLink: "https://github.com/GiPisano/js-campominato-grid",
        },
        {
          id: 2,
          title: "Proj HTML VueJS",
          category: "frontend",
          technologies: ["HTML", "CSS", "vue.js", "bootstrap"],
          responsive: true,
          imgSrc: "/src/assets/proj-html-vuejs.png",
          demoLink: "https://gipisano.github.io/proj-html-vuejs/",
          codeLink: "https://github.com/GiPisano/proj-html-vuejs",
        },
        {
          id: 3,
          title: "Vue Slider",
          category: "frontend",
          technologies: ["html", "CSS", "vue.js"],
          responsive: true,
          imgSrc: "/src/assets/vue-slider.png",
          demoLink: "https://gipisano.github.io/vue-slider/",
          codeLink: "https://github.com/GiPisano/vue-slider",
        },
        {
          id: 4,
          title: "Travel App",
          category: "frontend",
          technologies: ["HTML", "CSS", "vue.js", "bootstrap"],
          responsive: true,
          imgSrc: "/src/assets/travel-app.png",
          demoLink: "https://your-travel-diary.netlify.app/",
          codeLink: "https://github.com/GiPisano/travel-app",
        },
        {
          id: 5,
          category: "frontend",
          technologies: ["HTML", "CSS"],
          responsive: false,
          title: "boolando",
          imgSrc: "/src/assets/boolando.png",
          demoLink: "https://gipisano.github.io/html-css-boolando/",
          codeLink: "https://github.com/GiPisano/html-css-boolando",
        },
        {
          id: 6,
          category: "frontend",
          technologies: ["HTML", "CSS"],
          responsive: false,
          title: "Discord",
          imgSrc: "/src/assets/discord.png",
          demoLink: "https://gipisano.github.io/htmlcss-discord/",
          codeLink: "https://github.com/GiPisano/htmlcss-discord",
        },
        {
          id: 7,
          category: "frontend",
          technologies: ["HTML", "CSS"],
          responsive: false,
          title: "Dropbox",
          imgSrc: "/src/assets/dropbox.png",
          demoLink: "https://gipisano.github.io/htmlcss-dropbox/",
          codeLink: "https://github.com/GiPisano/htmlcss-dropbox",
        },
        {
          id: 8,
          category: "frontend",
          technologies: ["HTML", "CSS", "bootstrap"],
          responsive: true,
          title: "Responsive layout",
          imgSrc: "/src/assets/responsive-layout.png",
          demoLink: "https://gipisano.github.io/htmlcss-responsive-layout/",
          codeLink: "https://github.com/GiPisano/htmlcss-responsive-layout",
        },
        {
          id: 9,
          category: "frontend",
          technologies: ["HTML", "CSS"],
          responsive: true,
          title: "Spotify",
          imgSrc: "/src/assets/spotify.png",
          demoLink: "https://gipisano.github.io/html-css-spotifyweb/",
          codeLink: "https://github.com/GiPisano/html-css-spotifyweb",
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
      <div v-for="project in Projects" :key="project.id" class="col-md-4">
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
