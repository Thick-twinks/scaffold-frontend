<template>
  <FullPageContainer class="my-3 mb-6 flex-grow-1">
    <h1 class="mb-4">
      <slot name="title"></slot>
    </h1>

    <div>
      <slot></slot>
    </div>
  </FullPageContainer>
</template>

<script setup lang="ts">

</script>