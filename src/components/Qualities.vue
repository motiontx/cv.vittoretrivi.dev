<template>
  <Section :title="qualities.title">
    <ul>
      <li v-for="(q, i) in qualities.qualities" :key="i">{{ q }}</li>
    </ul>
  </Section>
</template>

<script>
import Section from "./Section";

export default {
  name: "Qualities",
  components: { Section },
  props: {
    qualities: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
