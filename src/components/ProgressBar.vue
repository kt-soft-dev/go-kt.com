<template>
  <div :style="trackStyle" class="progress-track">
    <div :style="progressBarStyle" class="progress-bar"></div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

// Define props with types
const props = defineProps({
  value: { type: Number, required: true },
  color: { type: String, required: true },
  trackColor: { type: String, required: true },
  size: { type: String, required: true },
  animationSpeed: { type: String, required: true }
});

// Compute width based on value
const width = computed(() => Math.min(Math.max(props.value, 0), 1) * 100 + '%');

// Style bindings for progress bar and track
const progressBarStyle = computed(() => ({
  width: width.value,
  backgroundColor: props.color,
  height: props.size,
  borderRadius: props.size,
  transition: `width ${props.animationSpeed}ms linear`
}));

const trackStyle = computed(() => ({
  backgroundColor: props.trackColor,
  height: props.size,
  borderRadius: props.size
}));
</script>

<style scoped>
.progress-track {
  width: 100%;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
}
</style>
