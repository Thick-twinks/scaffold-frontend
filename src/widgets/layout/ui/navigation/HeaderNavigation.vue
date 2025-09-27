<template>
  <ul class="header-navigation">
    <li
      v-for="navObjectConfig of headerNavigationConfig"
      :key="navObjectConfig.label"
      class="header-navigation__item"
    >
      <RouterLink
        v-if="navObjectConfig.type === 'link'"
        :to="navObjectConfig.to"
        class="header-navigation__item__link"
      >
        {{ navObjectConfig.label }}
      </RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { HeaderNavigationConfig } from '../../model/types'

interface HeaderNavigationProps {
	headerNavigationConfig: HeaderNavigationConfig;
}

defineProps<HeaderNavigationProps>()
</script>

<style lang="scss" scoped>
@use '../AppHeader.scss' as *;

.header-navigation {
    @include app-header;

    display: flex;

    .header-navigation__item {
        color: var(--app-header-text-color);

        .header-navigation__item__link {
            color: var(--app-header-text-color);
            font-weight: 600;
        }
    }
}
</style>