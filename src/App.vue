<template>
  <router-view />
</template>

<script lang="ts" setup>
import { Screen } from 'quasar';
import { watch } from 'vue';
import { getAdaptiveLocale } from 'boot/i18n';
import { useI18n } from 'vue-i18n';

Screen.setSizes({
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
});

const i18n = useI18n();

watch(
  () => Screen.width,
  () => (i18n.locale.value = getAdaptiveLocale())
);
</script>
