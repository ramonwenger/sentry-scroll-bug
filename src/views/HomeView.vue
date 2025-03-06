<script setup lang="ts"></script>

<template>
  <main>
    <h1>A very long Page</h1>

    <div class="long"></div>
    <router-link :to="{ name: 'about' }">Other Page Link</router-link>
  </main>
</template>

<style lang="postcss">
.long {
  height: 2000px;
}
</style>
