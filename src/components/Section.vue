<template>
  <div class="section">
    <h2 class="section-title">{{ title }}</h2>
    <slot />
  </div>
</template>

<script>
export default {
  name: "Section",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.section {
  margin-bottom: 7mm;
}

.section:hover .section-title::after {
  width: 18mm;
  height: 0.9mm;
  background-color: var(--carmine);
}

.section-title {
  position: relative;
  padding-bottom: 2.5mm;
  margin-bottom: 4mm;
}

.section-title::after {
  position: absolute;
  bottom: 0;
  left: 0;
  content: "";
  background-color: var(--heavy-metal);
  width: 6.6mm;
  height: 1.2mm;
  transition: 0.3s all;
}
</style>
