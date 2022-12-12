<template>
  <Section :title="languages.title">
    <div v-for="(l, i) in languages.languages" :key="i" class="language">
      <p class="bold uppercase">{{ l.name }} | {{ l.level }}</p>
    </div>
  </Section>
</template>

<script>
import Section from "./Section";

export default {
  name: "Languages",
  components: { Section },
  props: {
    languages: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.language:not(:last-child) {
  margin-bottom: 2mm;
}
</style>
