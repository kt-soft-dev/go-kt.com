<template>
  <div class="file-header">
    <div class="file-details">
      <div class="file-info">
        <div class="file-name">{{ file.name }}</div>
        <div class="file-size">
          {{ (file.size / 1024 / 1024).toFixed(2) }}
          {{ $t('uploader.mb') }}
        </div>
      </div>
      <!-- TODO: make it button -->
      <img
        :draggable="false"
        :src="error ? '/static/cancel.svg' : '/static/close_solid.svg'"
        alt="Reset uploader file button"
        class="reset-icon"
        @click.stop="$emit('reset')"
      />
    </div>
    <div
      :class="{ error: error }"
      class="file-header-caption"
      v-html="caption"
    />
  </div>
</template>

<script lang="ts" setup>
export interface FileHeaderProps {
  file: File;
  caption: string;
  error: boolean;
}

withDefaults(defineProps<FileHeaderProps>(), {
  error: false,
});

defineEmits(['reset']);
</script>

<style lang="scss" scoped>
@import 'src/css/app';

.file-header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  gap: 6px;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    gap: 6px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    gap: 10px;
  }
  @media (min-width: $breakpoint-lg-min) {
    gap: 10px;
  }
  @media (min-width: $breakpoint-xl-min) {
    gap: 10px;
  }
}

.file-details {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  gap: 4px;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    gap: 4px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    gap: 6px;
  }
  @media (min-width: $breakpoint-lg-min) {
    gap: 6px;
  }
  @media (min-width: $breakpoint-xl-min) {
    gap: 8px;
  }
}

.file-info {
  display: flex;
  align-items: center;
  max-width: 100%;

  gap: 8px;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    gap: 8px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    gap: 8px;
  }
  @media (min-width: $breakpoint-lg-min) {
    gap: 7px;
  }
  @media (min-width: $breakpoint-xl-min) {
    gap: 10px;
  }
}

.file-name {
  color: #534963;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

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
}

.file-size {
  color: #bcc0c6;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

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
}

.reset-icon {
  cursor: pointer;
  flex-shrink: 0;

  width: 18px;
  height: 18px;
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

.file-header-caption {
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  color: #828cfc;

  &.error {
    color: #ec4361;
  }

  font-size: 12px;
  letter-spacing: -0.24px;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    font-size: 9px;
    letter-spacing: -0.18px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    font-size: 12px;
    letter-spacing: -0.24px;
  }
  @media (min-width: $breakpoint-lg-min) {
    font-size: 11px;
    letter-spacing: -0.22px;
  }
  @media (min-width: $breakpoint-xl-min) {
    font-size: 14px;
    letter-spacing: -0.28px;
  }
}
</style>
