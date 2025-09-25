<template>
  <FullPageContainer class="my-3 mb-6 flex-grow-1">
    <h1 class="mb-4">
      <slot name="title"></slot>
    </h1>

    <div class="bg-white p-3">
      <slot></slot>
    </div>
  </FullPageContainer>
</template>

<script setup lang="ts">
import FullPageContainer from './FullPageContainer.vue'

</script>