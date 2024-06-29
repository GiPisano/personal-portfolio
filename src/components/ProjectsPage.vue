<script></script>

<template>
  <h1 class="text-center">My Projects</h1>
  <div class="container">
    <div class="row">
      <!-- campoMinato -->
      <div class="col-4">
        <div class="card">
          <div class="card-header">
            <img src="/src/assets/campoMinato.png" alt="" />
          </div>
          <div class="card-body">
            <button class="btn btn-warning">
              <a
                href="https://gipisano.github.io/js-campominato-grid/"
                target="_blank"
                >Demo</a
              >
            </button>
            <button class="btn btn-warning">
              <a
                href="https://github.com/GiPisano/js-campominato-grid"
                target="_blank"
                >Code</a
              >
            </button>
          </div>
        </div>
      </div>

      <!-- proj-html-vuejs -->
      <div class="col-4">
        <div class="card">
          <div class="card-header">
            <img src="/src/assets/proj-html-vuejs.png" alt="" />
          </div>
          <div class="card-body">
            <button class="btn btn-warning">
              <a
                href="https://gipisano.github.io/proj-html-vuejs/"
                target="_blank"
                >Demo</a
              >
            </button>
            <button class="btn btn-warning">
              <a
                href="https://github.com/GiPisano/proj-html-vuejs"
                target="_blank"
                >Code</a
              >
            </button>
          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="card">
          <div class="card-header">
            <img src="/src/assets/vue-slider.png" alt="" />
          </div>
          <div class="card-body">
            <button class="btn btn-warning">
              <a href="https://gipisano.github.io/vue-slider/" target="_blank"
                >Demo</a
              >
            </button>
            <button class="btn btn-warning">
              <a href="https://github.com/GiPisano/vue-slider" target="_blank"
                >Code</a
              >
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
