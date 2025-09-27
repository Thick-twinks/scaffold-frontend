<template>
  <div class="app-logo">
    <LogoIcon class="app-logo__icon" />

    <span class="app-logo__text">
      <span class="app-logo__text__acent">Scaff</span>old
    </span>
  </div>
</template>

<script setup lang="ts">
import { LogoIcon } from '@/shared/ui/assets/icons'

</script>

<style scoped lang="scss">
@use './AppHeader.scss' as *;

.app-logo {
    @include app-header;

    display: flex;
    align-items: center;
    margin-top: 0.5rem;
    margin-left: 1rem;

    z-index: 120 !important;

    .app-logo__icon {
        width: 60px;
        height: 60px;

        fill: var(--app-header-text-acent-color);

        margin-bottom: 1rem;
    }

    .app-logo__text {
       font-size: 35px;
       font-weight: 600;
       color: var(--app-header-text-color);

       .app-logo__text__acent {
            color: var(--app-header-text-acent-color);
       }
    }
}
</style>