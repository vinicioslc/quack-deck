<template>
  <div>
    <h1>Conteudo</h1>
    {{ page?.title }}

    <ContentRenderer v-if="page" :value="page.body" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path('games').first()
})


</script>

<style scoped></style>