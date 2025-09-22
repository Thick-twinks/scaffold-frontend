<template>
  <RouterView />
</template>

<script setup lang="ts">

interface AppLayoutProps {
	profilePagePath: string;
}

defineProps<AppLayoutProps>()

</script>