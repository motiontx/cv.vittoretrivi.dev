<template>
  <div class="heading-container">
    <div class="heading">
      <h1>
        {{ heading.greeting }}<br />
        {{ heading.introduction }}<span class="accent">{{ heading.name }}</span
        >.
      </h1>
      <QRCode class="qr-code" :language="heading.qr" />
    </div>
    <p class="uppercase bold title">{{ heading.title }}</p>
    <p class="description" v-html="formattedDescription" />
  </div>
</template>

<script>
import QRCode from "./QRCode.vue";

export default {
  name: "Heading",
  components: {
    QRCode,
  },
  props: {
    heading: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedDescription() {
      return this.heading.description
        .map((item) => {
          return item.type === "bold"
            ? `<span class="bold">${item.text}</span>`
            : item.type === "link"
            ? `<a href="${item.link}" target="_blank" class="bold link">${item.text}</a>`
            : item.text;
        })
        .join("");
    },
  },
};
</script>

<style scoped>
.heading-container {
  display: contents;
}

.heading {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3.8mm;
}

.qr-code {
  width: 25mm;
  height: 25mm;
}

.title {
  margin-top: 2mm;
  margin-bottom: 2mm;
}

.description {
  margin-top: 2mm;
  margin-bottom: 2mm;
}

@media screen and (max-width: 202mm) {
  .qr-code {
    display: none;
  }
}
</style>
