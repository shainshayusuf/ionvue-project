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
  computed:{
memories(){
  return this.$store.getters.memories;
}
  },
  data() {
    return {
      
    };
  },
};
</script>

<style scoped>
</style>