<template>
  <div class="side-bar" v-if="!printMode">
    <div class="container">
      <router-link v-if="lang == 'es'" to="/en" replace>
        <a class="button button-flag" aria-label="English">
          <ARGFlag class="flag" />
        </a>
      </router-link>
      <router-link v-else-if="lang === 'en'" to="/es" replace>
        <a class="button button-flag" aria-label="Español">
          <USFlag class="flag" />
        </a>
      </router-link>
      <a
        class="button button--red"
        :href="cv.url"
        :download="cv.filename"
        @click="downloadCv"
      >
        <span>{{ cv.display }}</span>
      </a>
      <a
        v-for="(link, i) in links"
        class="button"
        :key="i"
        target="_blank"
        :href="link.url"
      >
        <span>{{ link.display }}</span>
      </a>
    </div>
  </div>
</template>

<script>
import { Bus } from "../main";

import USFlag from "./USFlag.vue";
import ARGFlag from "./ARGFlag.vue";

export default {
  name: "SideBar",
  components: {
    USFlag,
    ARGFlag,
  },
  props: {
    links: {
      type: Array,
      required: true,
    },
    cv: {
      type: Object,
      required: true,
    },
    lang: {
      type: String,
      required: true,
    },
    printMode: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    downloadCv() {
      this.$gtag.event("CV Download", {
        event_category: this.lang,
      });
      Bus.$emit("download-cv");
    },
  },
};
</script>

<style scoped>
.side-bar {
  position: absolute;
  right: -40px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.container {
  position: sticky;
  top: 30mm;
  width: min-content;
  margin-top: 30mm;
}

.button {
  display: flex;
  border: none;
  background: var(--heavy-metal);
  padding: 10px 20px 10px 30px;
  border-radius: 0 2mm 2mm 0;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-bottom: 4mm;
  filter: drop-shadow(0 20px 20px rgba(81, 29, 37, 0.3));
}

.button.button-flag {
  padding-right: 0;
}

.flag {
  width: 1rem;
  height: 1rem;
  transform: rotate(90deg) scale(2) translate(0, 0.25rem);
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.button:hover {
  transform: translatex(10px);
  filter: drop-shadow(0 20px 20px rgba(81, 29, 37, 0.6));
}

.button--red {
  background: var(--carmine);
}

.button span {
  color: var(--cararra);
  font-size: 1.2rem;
  font-weight: bold;
  writing-mode: vertical-lr;
  line-height: 0;
}

@media screen and (max-width: 240mm) {
  .side-bar {
    right: 0;
    z-index: 1;
    top: 0;
    height: unset;
    position: fixed;
    top: 30mm;
  }

  .container {
    display: contents;
  }

  .button {
    border-radius: 2mm 0 0 2mm;
    padding: 8px 24px 8px 16px;

    margin-bottom: 4mm;
    filter: drop-shadow(0 16px 16px rgba(81, 29, 37, 0.3));
    transform: translatex(8px);
  }

  .flag {
    width: 0.8rem;
    height: 0.8rem;
    transform: rotate(90deg) scale(2) translate(0, 0.2rem);
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
  }

  .button span {
    font-size: 0.8rem;
  }

  .button:hover {
    transform: translatex(0);
  }
}
</style>
