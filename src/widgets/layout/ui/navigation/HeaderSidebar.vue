<template>
  <template v-if="visible">
    <div
      class="header-sidebar d-lg-none"
      @click.stop
    >
      <div class="header-sidebar__header"></div>

      <div
        class="header-sidebar__content"
      >
        <HeaderNavigation :header-navigation-config="headerNavigationConfig" />
      </div>
    </div>

    <div
      class="blue-bg"
      @click="hideSidebar"
    ></div>
  </template>
</template>

<script setup lang="ts">
import HeaderNavigation from './HeaderNavigation.vue'
import type { HeaderNavigationConfig } from '../../model/types'

interface HeaderSidebarProps {
	headerNavigationConfig: HeaderNavigationConfig;
}

defineProps<HeaderSidebarProps>()

const visible = defineModel<boolean>('visible')

const showSidebar = (): void => {
	visible.value = true
}

const hideSidebar = (): void => {
	visible.value = false
}

interface SidebarExpose {
	showSidebar: () => void;
	hideSidebar: () => void;
}

defineExpose<SidebarExpose>({
	showSidebar,
	hideSidebar
})

</script>

<style lang="scss" scoped>
  @use '../AppHeader.scss' as *;

  .header-sidebar {
    @include app-header;

    position: fixed;
    height: 100vh;
    width: fit-content;
    right: 0;
    top: 0;
    z-index: 110;

    background-color: var(--app-header-sidebar-bg-color);

    .header-sidebar__header {
        height: var(--app-header-height);
    }

    .header-sidebar__content {
        padding: 1rem 0 4rem;
        overflow-y: scroll;
        height: 100%;
    }
  }

  .blue-bg {
    position: fixed;
    backdrop-filter: blur(2px);
    height: 100vh;
    width: 100vw;

    z-index: 50;
  }
</style>