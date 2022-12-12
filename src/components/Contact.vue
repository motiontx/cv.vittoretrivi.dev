<template>
  <div class="container__info">
    <p v-for="(c, i) in contact" :key="i" class="item">
      <span class="bold icon">{{ c.icon }}</span>
      <a target="_blank" :href="c.url" class="link">{{ c.display }}</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {
    contact: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.container__info {
  display: flex;
  margin-top: auto;
  justify-content: center;
}

.item {
  margin-right: 3mm;
}

.icon {
  margin-right: 1.5mm;
  font-size: 1.25em;
}
@media screen and (max-width: 240mm) {
  .container__info {
    margin-top: 4.1mm;
  }
}
@media screen and (max-width: 180mm) {
  .container__info {
    flex-direction: column;
  }
}
</style>
