<template>
  <Section :title="courses.title">
    <div v-for="(c, i) in courses.courses" :key="i" class="course">
      <small class="bold uppercase">{{ c.date }}</small>
      <p class="bold uppercase accent">{{ c.degree }}</p>
      <p v-if="!c.url" class="bold">
        {{ c.institution }}
      </p>
      <a v-else :href="c.url" target="_blank" class="bold link">
        {{ c.institution }}
      </a>
    </div>
  </Section>
</template>

<script>
import Section from "./Section";

export default {
  name: "Education",
  components: { Section },
  props: {
    courses: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.course:not(:last-child) {
  margin-bottom: 3mm;
}
</style>
