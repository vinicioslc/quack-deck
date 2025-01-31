import { useAppwrite } from "~/composables/useAppwrite";
const appwrite = useAppwrite()
export default defineEventHandler(async (event) => {

  const query = getQuery(event)
  // @ts-ignore

  const appwriteQuacks = await appwrite.queries.findQuacks(query?.name)
  // const games = await $fetch("https://store.steampowered.com/search/?term=" + 'Prototype')
  // console.log("feching featured", games);


  return { data: appwriteQuacks.documents }

})