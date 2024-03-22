<template>
  <q-btn
    :class="{ active: active }"
    :padding="
      adaptiveValue(
        '8px 14px',
        '8px 14px',
        '10px 14px',
        '10px 14px',
        '10px 14px'
      )
    "
    :ripple="false"
    class="encrypt-button btn--no-hover"
    flat
    no-caps
    @click.stop="$emit('update:modelValue', !modelValue)"
  >
    <div class="encrypt-button-content">
      <img
        :draggable="false"
        :src="active ? '/static/lock_closed.svg' : '/static/lock_opened.svg'"
        alt="Encrypt"
        class="encrypt-icon"
      />
      <div v-html="$t('uploader.encrypt')" />
    </div>
  </q-btn>
</template>

<script lang="ts" setup>
import { adaptiveValue } from 'src/utils';

defineProps<{ modelValue: boolean; active: boolean }>();
defineEmits(['update:modelValue']);
</script>

<style lang="scss" scoped>
@import 'src/css/app';

// increase the specificity of the selector
// (otherwise priority is low - idk why)
.encrypt-button.encrypt-button {
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  border-radius: 20px;

  &::before {
    position: absolute;
    pointer-events: none;
    border: 2px solid #828cfc;
  }

  background: transparent;

  &.active {
    background: #828cfc;
  }

  &:disabled {
    opacity: 0.5 !important;
  }
}

.encrypt-button-content {
  display: flex;
  align-items: center;
  color: #828cfc;
  font-style: normal;
  font-weight: 500;

  gap: 8px;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.28px;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    gap: 6px;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: -0.22px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    gap: 7px;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.28px;
  }
  @media (min-width: $breakpoint-lg-min) {
    gap: 7px;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.26px;
  }
  @media (min-width: $breakpoint-xl-min) {
    gap: 8px;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.32px;
  }
}

.encrypt-button.active .encrypt-button-content {
  color: #fff;
}

.encrypt-icon {
  flex-shrink: 0;

  width: 16px;
  height: 16px;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    width: 14px;
    height: 14px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    width: 16px;
    height: 16px;
  }
  @media (min-width: $breakpoint-lg-min) {
    width: 16px;
    height: 16px;
  }
  @media (min-width: $breakpoint-xl-min) {
    width: 18px;
    height: 18px;
  }
}
</style>
