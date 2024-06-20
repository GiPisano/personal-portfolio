<script>
export default {
  data() {
    return {
      skills: {
        frontEnd: [
          {
            name: "HTML",
            image: "https://skillicons.dev/icons?i=html",
          },
          {
            name: "CSS",
            image: "https://skillicons.dev/icons?i=css",
          },
          {
            name: "SCSS",
            image: "https://skillicons.dev/icons?i=scss",
          },
          {
            name: "Bootstrap",
            image: "https://skillicons.dev/icons?i=bootstrap",
          },
          {
            name: "JavaScript",
            image: "https://skillicons.dev/icons?i=js",
          },
          {
            name: "Vue",
            image: "https://skillicons.dev/icons?i=vue",
          },
        ],
        backEnd: [
          {
            name: "PHP",
            image: "https://skillicons.dev/icons?i=php",
          },
          {
            name: "Laravel",
            image: "https://skillicons.dev/icons?i=laravel",
          },
          {
            name: "MySQL",
            image: "https://skillicons.dev/icons?i=mysql",
          },
        ],
        otherTechnologies: [
          {
            name: "Git",
            image: "https://skillicons.dev/icons?i=git",
          },
          {
            name: "Github",
            image: "https://skillicons.dev/icons?i=github",
          },
          {
            name: "Postman",
            image: "https://skillicons.dev/icons?i=postman",
          },
          {
            name: "VSCode",
            image: "https://skillicons.dev/icons?i=vscode",
          },
        ],
      },
    };
  },
};
</script>

<template>
  <section id="about" class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="profile-picture">
          <img src="/src/assets/PHOTO-portfolio.jpg" alt="photo" />
        </div>
      </div>
      <div class="col-md-6 description">
        <p>
          Welcome! My name is
          <span class="text-warning">Giacomo Pisano</span>, a web developer
          passionate about technology and always looking for new challenges. I
          recently completed an intensive six-month course where I deepened my
          knowledge and skills. During this training, I had the opportunity to
          work on several practical projects that allowed me to apply the skills
          I learned in real-life situations. I consider myself a curious person,
          eager to improve and learn. Currently, I am looking for opportunities
          to further grow as a web developer and significantly contribute to
          interesting projects.
        </p>
        <div class="text-center">
          <a href="/cv/cvGiacomoPisano.pdf" download>
            <button class="btn btn-warning">DOWNLOAD MY CV</button>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section id="skills">
    <h2 class="text-center">MY SKILLS</h2>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-header">
              <h3>Front-End</h3>
            </div>
            <div class="card-body">
              <ul>
                <li v-for="skill in skills.frontEnd" :key="skill.name">
                  <div class="container-img">
                    <img :src="skill.image" />
                  </div>
                  <span>{{ skill.name }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-header">
              <h3>Back-End</h3>
            </div>
            <div class="card-body">
              <ul>
                <li v-for="skill in skills.backEnd" :key="skill">
                  <div class="container-img">
                    <img :src="skill.image" />
                  </div>
                  <span>{{ skill.name }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-header">
              <h3>Other-Technologies</h3>
            </div>
            <div class="card-body">
              <ul>
                <li v-for="tech in skills.otherTechnologies" :key="tech">
                  <div class="container-img">
                    <img :src="tech.image" />
                  </div>
                  <span>{{ tech.name }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#about {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.profile-picture {
  width: 380px;
  height: 380px;
  border-radius: 50%;
  margin: auto;
  background-color: gray;
  overflow: hidden;
}

.description {
  margin: auto 0;
  p {
    font-size: larger;
  }
}

img {
  width: 100%;
  height: 100%;
}

#skills {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #4d4d4d;
  h2 {
    padding: 10px;
  }
}

.container-img {
  width: 30px;
  height: 30px;
}

.card-body li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
}

ul {
  padding-left: 0;
}
</style>
