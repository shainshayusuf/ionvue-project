<template>
    <base-layout :page-title="loadedMemory ? loadedMemory.title : 'Loading ...'" page-default-back-link="/memories">
    <h2 v-if="!loadedMemory">Could not find memory</h2>
    <h2 v-else>Loaded it</h2>
    </base-layout>
</template>

<script>

export default {
  components: { },
  data(){
    return{
      memoryId:this.$route.params.id
    }
  },
  computed:{
   loadedMemory(){
     return this.$store.getters.memory(this.memoryId)
   }
  },
  // watch:{
  //   '$route'(currentRoute){
  //     this.memoryId = currentRoute.params.id
  //   }
  // }
    
}
</script>