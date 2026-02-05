<template>
  <Section :title="jobs.title">
    <div v-for="(j, i) in jobs.jobs" :key="i" class="job">
      <small class="bold uppercase date">{{ j.date }}</small>
      <p class="bold uppercase accent title">{{ j.position }}</p>
      <p class="bold title">
        <img
          v-if="j.logo"
          class="logo"
          :src="`images/${j.logo}`"
          :alt="`${j.company} logo`"
        />
        <a class="uppercase bold link" :href="j.url" target="_blank">{{
          j.company
        }}</a>

        | {{ j.city }},
        {{ j.country }}
      </p>
      <p class="description">{{ j.description }}</p>
    </div>
  </Section>
</template>

<script>
import Section from "./Section";

export default {
  name: "Experience",
  components: { Section },
  props: {
    jobs: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.job:not(:last-child) {
  margin-bottom: 1mm;
}

.date {
  display: block;
  line-height: 2;
}

.title {
  line-height: 1.2;
}

.company {
  display: inline-flex;
  align-items: center;
}

.logo {
  height: 0.50625rem;
  margin-right: 0.25rem;
}

.description {
  text-wrap: pretty;
}
</style>
