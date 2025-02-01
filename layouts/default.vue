<template>
  <div class="flex flex-row w-full mb-4">
    <div class="flex flex-column justify-content-between align-items-center m-auto text-center"
      style="max-width:900px;">
      <img alt="Can my deck quack this ?" src="/public/logo.png" class="w-6">
      <span style="color: #eded00;" class="text-xl"> Can Deck Quack
        This Game ??</span>
      <span style="color: #eded00;" class="text-sm"> Here we index what
        quacked games run in steamos or in windows and how you can contribute <a
          href="https://github.com/vinicioslc/quack-deck">here at github <i class="pi pi-github"> </i></a> only need
        send a PR adding a .md file to folder content/games and will be included as soon as possible.</span>
    </div>
  </div>
  <div class="flex flex-row justify-content-center align-items-center m-auto">
    <slot />
  </div>
  <div class="flex flex-column justify-content-between align-items-center m-auto text-center mb-4"
    style="max-width: 800px">
    <img alt="Can my deck quack this ?" src="/public/logo.png" class="w-6">
    <span style="font-family: Comic Sans MS, Comic Sans, cursive; color: #eded00;" class="text-xl mb-4">
      Disclaimer - DeckCanQuackThis
    </span>
    <p>
      DeckCanQuackThis is an independent project and is not affiliated with Valve, Steam, Steam Deck, or SteamOS in any
      way. Our goal is to provide information to facilitate offline software installation, without relying on external
      platforms, aiming at digital preservation and user accessibility.
    </p>
    <p>
      All trademarks and names mentioned belong to their respective owners. The use of the information provided on this
      site is the sole responsibility of the user.
    </p>

  </div>
</template>

<script setup>
import { ref } from "vue";
useSeoMeta({
  title: 'QuackDeck - Can your Game quack! on Steam Deck ? search here',
  ogTitle: 'QuackDeck - The Ultimate Guide to Running Games on Steam Deck',
  description: 'Learn how to run any game on your Steam Deck using Lutris, Proton, and other tools. Get step-by-step guides for the best gaming experience.',
  ogDescription: 'Discover how to play any game on your Steam Deck with Lutris, Proton, and custom tweaks. The ultimate guide for seamless gaming!',
  ogImage: 'https://quack-deck.info/public/logo.png',
  twitterCard: 'summary_large_image',
  keywords: 'Steam Deck, Lutris, Proton, run games on Steam Deck, non-Steam games, gaming on Linux, Steam Deck compatibility',
  robots: 'index, follow'
});
</script>
