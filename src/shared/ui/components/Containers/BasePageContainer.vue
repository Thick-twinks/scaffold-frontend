<template>
  <FullPageContainer class="my-3 mb-6 flex-grow-1">
    <h1 class="mb-4">
      <slot name="title"></slot>
    </h1>

    <BaseCard>
      <template #content>
        <slot></slot>
      </template>
    </BaseCard>
  </FullPageContainer>
</template>

<script setup lang="ts">
import FullPageContainer from './FullPageContainer.vue'
import BaseCard from '../Cards/BaseCard.vue'

</script>