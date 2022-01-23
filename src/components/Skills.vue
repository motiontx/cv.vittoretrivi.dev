<template>
  <Section :title="skills.title">
    <ul>
      <li v-for="(set, i) in skills.skills" :key="i" class="set">
        <template v-for="(s, j) in set">
          {{ j != 0 ? "|" : "" }}
          <a
            target="_blank"
            :href="s.url"
            :key="j"
            :style="{ '--overflow-color': s.color }"
            class="skill"
            >{{ s.skill }}</a
          >
        </template>
      </li>
    </ul>
  </Section>
</template>

<script>
import Section from "./Section";

export default {
  name: "Skills",
  components: { Section },
  props: {
    skills: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.skill {
  transition: color 0.3s ease-in;
}

.skill[href]:hover {
  color: var(--overflow-color);
  text-decoration: underline;
}
</style>
