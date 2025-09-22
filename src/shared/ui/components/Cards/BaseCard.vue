<template>
  <div class="widget-card">
    <div class="widget-card__content">
      <div class="widget-card__title">
        <slot name="title"></slot>
      </div>

      <div class="widget-card__info">
        <slot name="content"></slot>
      </div>
    </div>

    <div class="widget-card__btn-box">
      <slot name="buttons"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.widget-card {
    @include flex-column;
    width: 500px;
    height: 500px;
    padding: $padding-xl;
    border-radius: $card-border-radius;
    box-shadow: $base-box-shadow;
    background-color: var(--s-color-background-secondary);
    color: var(--s-color-accent);
    font-weight: $font-weight-bold;
    transition: color $base-animation-duration ease-in-out;
    gap: $gap-m;

    &__icon {
        display: flex;
        justify-content: center;
        height: 50px;
        width: 50px;
    }

    &__info {
        color: var(--s-color-text)
    }

    &__content {
        width: 100%;
        height: 100%;
        text-align: center;
    }

    &__title {
        width: 100%;
        text-align: center;
        font-size: $font-size-l;
    }

    &__btn-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
}
</style>