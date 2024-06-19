<script></script>

<template>
  <section id="about" class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="profile-picture">
          <img src="/src/assets/PHOTO-portfolio.jpg" alt="photo" />
        </div>
      </div>
      <div class="col-md-6 description">
        <p class="text-center">
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
</template>

<style lang="scss" scoped>
#about {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.intro {
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
  //   display: flex;
  //   align-items: center;
  margin: auto 0;
  p {
    font-size: larger;
  }
}

img {
  width: 100%;
  height: 100%;
}
</style>
