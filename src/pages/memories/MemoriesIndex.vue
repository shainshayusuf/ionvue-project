<template>
  <base-layout page-title="AllMemories">
    <ion-list>
      <ion-item
        v-for="memory in memories"
        :key="memory.id"
        :router-link="`/memories/${memory.id}`"
      >
      <ion-thumbnail slot="start">
      <ion-img :src="memory.image" :alt="memory.title">
      </ion-img>
      </ion-thumbnail>
        {{ memory.title }}</ion-item
      >
    </ion-list>
  </base-layout>
</template>

<script>
import { IonList, IonItem, IonImg,IonThumbnail } from "@ionic/vue";

export default {
  components: {
    IonList,
    IonItem,
    IonImg,
    IonThumbnail
  },
  data() {
    return {
      memories: [
        {
          id: "m1",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Mighty_Mountains_with_Snow.jpg/640px-Mighty_Mountains_with_Snow.jpg",
          title: "A trip into the mountains",
          description: "It was a really nice trip!",
        },
        {
          id: "m2",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/A_surfer_surfing_on_the_ocean_%28Unsplash%29.jpg/640px-A_surfer_surfing_on_the_ocean_%28Unsplash%29.jpg",
          title: "Surfing the sea side",
          description: "Feeling the cool breeze",
        },
        {
          id: "m3",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Indian_-_Food.jpg/640px-Indian_-_Food.jpg",
          title: "Good eating",
          description: "Really tasty!",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>