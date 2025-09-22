<template>
  <RouterView />
</template>

<script setup lang="ts">
import { useRedirectEventListener } from './router/model/redirect/utils'

useRedirectEventListener()

</script>