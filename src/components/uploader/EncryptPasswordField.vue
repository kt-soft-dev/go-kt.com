<template>
  <div class="encrypt-password-field">
    <input
      :placeholder="$t('uploader.encrypt-password-placeholder')"
      :type="isVisible ? 'text' : 'password'"
      :value="modelValue"
      autocomplete="off"
      class="encrypt-password-input"
      @input="(event: InputEvent) => emit('update:modelValue', (event.target as HTMLInputElement).value)"
    />
    <img
      :draggable="false"
      :src="isVisible ? '/static/hide.svg' : '/static/show.svg'"
      alt="Toggle password visibility button"
      class="toggle-visibility-icon"
      @click="isVisible = !isVisible"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

export interface EncryptPasswordField {
  modelValue: string;
}

withDefaults(defineProps<EncryptPasswordField>(), {
  modelValue: ''
});

const emit = defineEmits(['update:modelValue']);

const isVisible = ref(false);
</script>

<style lang="scss" scoped>
@import 'src/css/app';

.encrypt-password-field {
  background: #fff;
  border: 2px solid #828cfc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  height: auto;
  padding: 12px 10px;
  border-radius: 14px;
  @media (min-width: $breakpoint-sm-min),
  (min-width: $breakpoint-md-min) and (orientation: landscape) {
    height: auto;
    padding: 11px 10px;
    border-radius: 13px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    height: auto;
    padding: 11px 10px;
    border-radius: 14px;
  }
  @media (min-width: $breakpoint-lg-min) {
    height: auto;
    padding: 11px 10px;
    border-radius: 14px;
  }
  @media (min-width: $breakpoint-xl-min) {
    height: 42px;
    padding: 10px;
    border-radius: 14px;
  }
}

.encrypt-password-input {
  display: block;
  border: none;
  outline: none;
  flex-grow: 1;
  color: #302c3a;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: inherit; // This prevents extra expansion for Firefox

  font-size: 14px;
  letter-spacing: -0.28px;
  @media (min-width: $breakpoint-sm-min),
  (min-width: $breakpoint-md-min) and (orientation: landscape) {
    font-size: 11px;
    letter-spacing: -0.22px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    font-size: 14px;
    letter-spacing: -0.28px;
  }
  @media (min-width: $breakpoint-lg-min) {
    font-size: 13px;
    letter-spacing: -0.26px;
  }
  @media (min-width: $breakpoint-xl-min) {
    font-size: 16px;
    letter-spacing: -0.32px;
  }

  &:focus {
    outline: none; // Disables the default outline for Firefox
  }

  -webkit-text-security: none; // This disables Chrome's default eye icon
  &::-ms-reveal {
    display: none; // This hides Edge's default password reveal button
  }
}

.encrypt-password-input::placeholder {
  opacity: 0.5;
  pointer-events: none;
  color: #495963;
}

.toggle-visibility-icon {
  cursor: pointer;
  flex-shrink: 0;

  width: 16px;
  height: 16px;
  @media (min-width: $breakpoint-sm-min),
  (min-width: $breakpoint-md-min) and (orientation: landscape) {
    width: 16px;
    height: 16px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    width: 18px;
    height: 18px;
  }
  @media (min-width: $breakpoint-lg-min) {
    width: 18px;
    height: 18px;
  }
  @media (min-width: $breakpoint-xl-min) {
    width: 18px;
    height: 18px;
  }
}
</style>
