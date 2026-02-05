<template>
  <div class="wrapper">
    <div class="noise" :class="{ 'noise--printmode': printMode }" />
    <SideBar
      :links="currentCv.links"
      :cv="currentCv.cv"
      :lang="lang"
      :printMode="printMode"
    />
    <div class="resume" :class="{ 'resume--printmode': printMode }">
      <div class="container">
        <Heading :heading="currentCv.heading" />
        <div class="desktop">
          <div class="column--1">
            <Education :courses="currentCv.courses" />
            <Skills :skills="currentCv.skills" />
            <Languages :languages="currentCv.languages" />
          </div>
          <div class="column--2">
            <Experience :jobs="currentCv.jobs" />
            <Education :courses="currentCv.studies" />
          </div>
        </div>
        <div class="mobile">
          <Experience :jobs="currentCv.jobs" />
          <Education :courses="currentCv.studies" />
          <Education :courses="currentCv.courses" />
          <Languages :languages="currentCv.languages" />
          <Skills :skills="currentCv.skills" />
        </div>
        <Contact :contact="currentCv.contact" />
      </div>
      <p class="version">
        v{{ cv.options.version }} - {{ lang.toUpperCase() }}
      </p>
    </div>
  </div>
</template>

<script>
import SideBar from "./SideBar.vue";

import Heading from "./Heading";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Languages from "./Languages.vue";
import Contact from "./Contact.vue";

import CV from "../data";

export default {
  name: "Resume",
  components: {
    SideBar,
    Heading,
    Skills,
    Experience,
    Education,
    Languages,
    Contact,
  },
  metaInfo() {
    return this.currentCv.meta;
  },
  data() {
    return {
      cv: CV,
      lang: "en",
      printMode: false,
    };
  },
  mounted() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    this.printMode = params.printmode;
  },
  created() {
    this.lang = this.$route.params.locale;
    document.documentElement.lang = this.lang;
  },
  watch: {
    $route() {
      this.lang = this.$route.params.locale;
      document.documentElement.lang = this.lang;
    },
  },
  computed: {
    currentCv() {
      return this.cv.languages[this.lang];
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: relative;
}

.noise {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  content: "";
  opacity: 0.05;
  mix-blend-mode: color-burn;
  background-image: url(~@/assets/images/noise.gif);
  pointer-events: none;
  z-index: 0;
}

.noise--printmode {
  display: none;
}

.resume {
  max-width: 210mm;
  height: 297mm;
  background-color: var(--cararra);
  background-blend-mode: color-burn;
  background-image: url(data:image/png;base64,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);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s all;
  position: relative;
  filter: drop-shadow(0 20px 20px rgba(81, 29, 37, 0.5));
}

.resume--printmode {
  filter: none;
  background-image: none;
  background-color: white;
}

.container {
  border: 2mm black solid;
  width: calc(100% - 8.2mm * 2);
  height: calc(100% - 8.2mm * 2);
  padding: 8mm;
  padding-bottom: 4mm;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.desktop {
  display: grid;
  margin-top: 8mm;
  grid-template-columns: 58mm 1fr;
  grid-column-gap: 8mm;
}

.mobile {
  margin-top: 8mm;
  display: none;
}

.column--1 {
  grid-column: 1;
}

.column--2 {
  grid-column: 2;
}

.version {
  position: absolute;
  right: 8mm;
  bottom: 2.5mm;
  opacity: 0.25;
  font-size: 0.5rem;
}

@media screen and (max-width: 240mm) {
  .wrapper {
    padding: 4mm;
    height: unset;
  }
  .container {
    width: unset;
    margin: 8mm;
    padding: 8mm;
    padding-bottom: 4mm;
  }

  .resume {
    height: unset;
  }
}

@media screen and (max-width: 202mm) {
  .desktop {
    display: none;
  }

  .mobile {
    display: block;
  }

  .column--1,
  .column--2 {
    grid-column: 1/3;
  }

  .column--2 {
    grid-row: 1;
  }

  .wrapper {
    padding: 4mm;
  }

  .container {
    border-width: 1mm;
    width: unset;
    margin: 2mm;
    padding: 2mm;
  }

  .version {
    display: none;
  }
}
</style>
