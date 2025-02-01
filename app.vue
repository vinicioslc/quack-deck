<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
    <Toast position="top-left" group="tl" />
    <Toast position="top-right" group="tr" />
    <Toast position="bottom-center" group="bc" />
    <Toast position="bottom-left" group="bl" />
    <Toast position="bottom-right" group="br" />
    <ConfirmDialog></ConfirmDialog>
  </NuxtLayout>
  <link rel="stylesheet" href="https://unpkg.com/primeflex@latest/primeflex.css">
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2763884853307133"
    crossorigin="anonymous"></script>

</template>
<script setup>
import "primeflex/primeflex.css"
import Toast from "primevue/toast";
</script>

<style>
html {
  background-color: black;
}

.p-inputtext {
  padding: 0.75rem 0.75rem;
  /* padding-left: 2.5rem; */
}

.layout-topbar {
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.layout-topbar .topbar-start {
  display: flex;
  align-items: center;
}

.p-icon-field .p-inputtext {
  padding: 0.75rem 0.75rem;
  padding-left: 2.5rem;
}

.header-view-page>.p-card-body {
  padding: 0;
}

.header-view-page {
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
}

.header-view-page>.p-card-body>.p-card-footer>.p-divider {
  margin-bottom: 5px;
  margin-top: 0;
}

.flag {
  width: 10px;
  height: 10px;
  border-radius: 2px;
}

.flag.flag-low {
  background-color: #a0d76a;
}

.flag.flag-medium {
  background-color: #4da1ff;
}

.flag.flag-high {
  background-color: #ffd012;
}

.flag.flag-urgent {
  background-color: #ff5959;
}
</style>
