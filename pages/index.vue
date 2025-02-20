<template>
  <div class="flex flex-column">
    <NuxtRouteAnnouncer />
    <div class="flex flex-row align-items-center justify-content-center mb-4">
      <div style="max-width: 24rem;">
        <InputText v-model="updatedText" @input="updateSearch" :virtualScrollerOptions="{ itemSize: 44 }"
          placeholder="Select item" class="w-full md:w-80" />
      </div>
    </div>

    <div class="flex flex-row">
      <div class="flex flex-column gap-3">
        <div v-for="game in gamesFound" class="x">

          <Card style="width: 25rem; overflow: hidden">
            <template #header>
              <img v-if="game.steam_appid" alt="user header"
                :src="`https://steamcdn-a.akamaihd.net/steam/apps/${game.steam_appid}/header.jpg`" max-height="150px" />
            </template>
            <template #title>
              <h1 class="text-xl">
                {{ game.title }}
                <small class="text-sm text-color-secondary opacity-30">
                  <span>{{ game.steam_appid }}</span>
                </small>
              </h1>
            </template>
            <template #subtitle>
              <p class="mb-2">
                <Tag icon="pi pi-check" rounded></Tag>
                Where Compatible:
              </p>
              <div v-for="compat in game.compatibility"
                class="flex flex-column justify-content-start align-items-start mb-3 gap-2">
                <div class="flex flex-row">
                  <span>
                    <Tag v-if="compat.name === 'razor1911'" icon="pi pi-code" rounded></Tag>
                    <Tag v-if="compat.name === 'fitgirl'" icon="pi pi-user" rounded></Tag>
                    <Tag v-if="compat.name === 'xatab'" icon="pi pi-user" rounded></Tag>
                    <Tag v-if="compat.name === 'dodi'" icon="pi pi-user" rounded></Tag>
                    <Tag v-if="compat.name === 'steamrip'" icon="pi pi-download" rounded></Tag>
                    <Tag v-if="compat.name === 'empress'" icon="pi pi-crown" rounded></Tag>
                    - {{ compat.name }}
                  </span>
                  <div class="flex gap-2 ml-2">
                    <Button :disabled="!compat.steamos" v-tooltip.top="compat.steamos ? 'Compatible' : 'Not Compatible'"
                      size="small" :label="'steamos'" severity="help" icon="pi pi-discord" />
                    <Button :disabled="!compat.windows" v-tooltip.top="compat.windows ? 'Compatible' : 'Not Compatible'"
                      size="small" :label="'windows'" severity="info" icon="pi pi-microsoft" />
                  </div>
                </div>
                <div class="flex flex-row text-start ">
                  <p v-if="compat?.proton_tested" class="mr-1">
                    Proton Tested:
                  </p>
                  <div v-if="compat?.proton_tested" v-for="proton in compat.proton_tested"
                    class="flex flex-column gap-2">
                    <span> {{ proton }}</span>

                  </div>
                </div>
              </div>
            </template>
            <template #content>
              <p class="m-0">
                <ContentRenderer :value="game.body">
                </ContentRenderer>
              </p>
            </template>
            <template #footer>
              <div class="flex gap-4 mt-1">
              </div>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </div>

</template>


<script setup lang="ts">
const gamesFound = ref<any>(null)
const updatedText = ref('')
const home = ref({ title: "", description: "" })


const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path('games').first()
})

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})

// Reactive variables for form inputs
const email = ref<string>('');
const password = ref<string>('');
const name = ref<string>('');

const resetInputValues = (): void => {
  email.value = '';
  password.value = '';
  name.value = '';
};


async function searchGame(searchName: string) {
  const found = await queryCollection('games').where('title', 'LIKE', '%' + searchName + '%').order('date', 'DESC').limit(20).all()

  const route = useRoute()
  route.query.search = searchName

  gamesFound.value = found
  console.log("found values", found);

  return found;
}


async function updateSearch() {
  await searchGame(updatedText?.value ?? '')
}
onMounted(async () => {

  await updateSearch()
  const home = await queryCollection('games').first()


  // @ts-ignore
  home.value = home
})
</script>
