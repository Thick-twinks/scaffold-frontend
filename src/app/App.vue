<template>
  <RouterView />
</template>

<script setup lang="ts">
import { useApiClientConfig } from './api/useApiClientConfig'
import { useRedirectEventListener } from './router/model/redirect/utils'

useRedirectEventListener()
useApiClientConfig()

</script>