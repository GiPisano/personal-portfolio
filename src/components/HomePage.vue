<script></script>

<template>
  <div class="intro">
    <h1 class="text-center">
      Hello, I'm <span class="text-warning">Giacomo Pisano,</span>
    </h1>
    <h2 class="text-center">Jr full stack web developer</h2>

    <!-- SOCIAL LINKS -->
    <div class="socials" id="socials">
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/giacomo-pisano"
            target="_blank"
            class="linkedin"
            aria-label="LinkedIn"
            rel="noopener"
            >LinkedIn<i class="fi-snsuxl-linkedin"></i
          ></a>
        </li>
        <li>
          <a
            href="https://github.com/GiPisano"
            target="_blank"
            class="github"
            aria-label="GitHub"
            rel="noopener"
            >GitHub<i class="fi-snsuxl-github-alt"></i
          ></a>
        </li>
        <li>
          <a
            href="mailto:giacomopisano33@proton.me"
            target="_blank"
            class="email"
            aria-label="Email"
            rel="noopener"
            >Email<i class="fi-xwsuxl-envelope-solid"></i
          ></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.intro {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

//////////////////////////////////////// SOCIAL LINKS ////////////////////////////////////////
.socials {
  position: absolute;
  top: 15%;
  left: -8.5rem;
  ul {
    list-style: none;
    li {
      a {
        text-decoration: none;
        color: #fff;
        font-size: 1.2rem;
        padding: 1.2rem;
        display: block;
        text-align: right;
        font-weight: bold;
        transition: 0.3s ease;
        i {
          padding-left: 1.5rem;
        }
      }
      .linkedin {
        background: var(--blue);
      }
      .github {
        background: #2e3031;
      }
      .email {
        background: var(--red);
      }
      a:hover {
        transform: translate(100px, 0);
      }
    }
  }
}
</style>
