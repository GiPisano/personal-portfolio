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
          technologies: ["HTML", "CSS", "vue.js", "bootstrap", "localStorage"],
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
        {
          id: 10,
          category: "frontend",
          technologies: ["HTML", "CSS"],
          responsive: true,
          title: "wannabe",
          imgSrc: "/src/assets/wannabe.png",
          demoLink: "https://gipisano.github.io/html-css-resp-wannabe/",
          codeLink: "https://github.com/GiPisano/html-css-resp-wannabe",
        },
        {
          id: 9,
          category: "frontend",
          technologies: ["HTML", "CSS", "bootstrap"],
          responsive: true,
          title: "freelancer",
          imgSrc: "/src/assets/freelancer.png",
          demoLink: "https://gipisano.github.io/html-css-bootstrap-freelancer/",
          codeLink: "https://github.com/GiPisano/html-css-bootstrap-freelancer",
        },
        {
          id: 10,
          category: "frontend",
          technologies: ["HTML", "CSS", "bootstrap", "javascript"],
          responsive: true,
          title: "biglietto treno form",
          imgSrc: "/src/assets/biglietto-treno-form.png",
          demoLink: "https://gipisano.github.io/js-biglietto-treno-form/",
          codeLink: "https://github.com/GiPisano/js-biglietto-treno-form",
        },
        {
          id: 11,
          category: "frontend",
          technologies: ["HTML", "CSS", "javascript"],
          responsive: false,
          title: "Boolzapp",
          imgSrc: "/src/assets/vue-boolzapp.png",
          demoLink: "https://gipisano.github.io/vue-boolzapp/",
          codeLink: "https://github.com/GiPisano/vue-boolzapp",
        },
        {
          id: 12,
          category: "frontend",
          technologies: ["HTML", "CSS", "javascript"],
          responsive: true,
          title: "todolist",
          imgSrc: "/src/assets/todolist.png",
          demoLink: "https://gipisano.github.io/vue-todolist/",
          codeLink: "https://github.com/GiPisano/vue-todolist",
        },
        {
          id: 13,
          category: "frontend",
          technologies: ["HTML", "CSS", "javascript", "vue.js", "axios"],
          responsive: true,
          title: "Vue Email List",
          imgSrc: "/src/assets/vue-email-list.png",
          demoLink: "https://gipisano.github.io/vue-email-list/",
          codeLink: "https://github.com/GiPisano/vue-email-list",
        },
        {
          id: 14,
          category: "frontend",
          technologies: [
            "HTML",
            "CSS",
            "javascript",
            "vue.js",
            "axios",
            "database",
          ],
          responsive: true,
          title: "boolando Axios",
          imgSrc: "/src/assets/boolandoAxios.png",
          demoLink: "https://vite-boolando-eta.vercel.app/",
          codeLink: "https://github.com/GiPisano/vite-boolando",
        },
        {
          id: 15,
          category: "frontend",
          technologies: [
            "HTML",
            "CSS",
            "javascript",
            "vue.js",
            "axios",
            "postman",
          ],
          responsive: true,
          title: "boolflix",
          imgSrc: "/src/assets/boolflix.png",
          demoLink: "https://boolflix-brown.vercel.app/",
          codeLink: "https://github.com/GiPisano/clone-netflix",
        },
      ],

      types: [
        "HTML",
        "CSS",
        "SCSS",
        "BOOTSTRAP",
        "JAVASCRIPT",
        "VUE.JS",
        "AXIOS",
        "DATABASE",
        "MYSQL",
        "PHP",
        "POSTMAN",
        "LARAVEL",
      ],
      selectedFilters: [],
    };
  },
  computed: {
    filteredProjects() {
      if (this.selectedFilters.length === 0) {
        return this.Projects; // Mostra tutti i progetti se non ci sono filtri
      }
      return this.Projects.filter((project) =>
        this.selectedFilters.every((filter) =>
          project.technologies
            .map((tech) => tech.toUpperCase())
            .includes(filter)
        )
      );
    },
  },
  methods: {
    toggleFilter(filter) {
      if (this.selectedFilters.includes(filter)) {
        this.selectedFilters = this.selectedFilters.filter(
          (selected) => selected !== filter
        );
      } else {
        this.selectedFilters.push(filter);
      }
    },
  },
};
</script>

<template>
  <h1 class="text-center">My Projects</h1>
  <div class="container">
    <!-- Sezione dei filtri -->
    <section class="filters">
      <div v-for="type in types" :key="type">
        <button
          class="btn"
          :class="
            selectedFilters.includes(type) ? 'btn-success' : 'btn-primary'
          "
          @click="toggleFilter(type)"
        >
          {{ type }}
        </button>
      </div>
    </section>

    <!-- Sezione dei progetti -->
    <div class="row g-4">
      <div
        v-for="project in filteredProjects"
        :key="project.id"
        class="col-md-4"
      >
        <!-- Card -->
        <div class="card position-relative h-100">
          <!-- Immagine della card -->
          <img :src="project.imgSrc" :alt="project.title" />

          <!-- Overlay nascosto che appare al hover -->
          <div class="card-overlay">
            <h5>{{ project.title }}</h5>
            <p><strong>Category:</strong> {{ project.category }}</p>
            <p>
              <strong>Technologies:</strong>
              {{ project.technologies.join(", ") }}
            </p>
            <p>
              <strong>Responsive:</strong>
              {{ project.responsive ? "Yes" : "No" }}
            </p>
            <div class="btn-cards">
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
  </div>
</template>

<style lang="scss" scoped>
.filters {
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
/* Immagine */
img {
  width: 100%;
  height: auto;
}

/* Overlay */
.card {
  position: relative;
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05); /* Effetto zoom */
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Sfondo semitrasparente */
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  padding: 20px;
  text-align: center;
}

.card:hover .card-overlay {
  opacity: 1; /* Mostra l'overlay al hover */
}

.card-overlay h5 {
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.card-overlay p {
  margin: 5px 0;
  font-size: 0.9rem;
}

.card-overlay strong {
  font-weight: bold;
}

/* Pulsanti */
.pagination .page-item.active .page-link {
  background-color: #007bff;
  border-color: #007bff;
}

.pagination .page-link {
  cursor: pointer;
}

.btn-cards {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
</style>
