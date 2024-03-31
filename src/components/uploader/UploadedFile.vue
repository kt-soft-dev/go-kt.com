<template>
  <div class="uploaded-file">
    <div class="file-header">
      <div class="one-file">1 file</div>
      <div class="file-size">
        {{ (modelValue.size / 1024 / 1024).toFixed(2) }}
        {{ $t('uploader.mb') }} / 100.00%
      </div>
    </div>
    <div class="file-info">
      <div class="file-name">{{ modelValue.name }}</div>
      <div class="controls">
        <img
          :draggable="false"
          alt="Delete uploaded file button"
          class="delete-icon"
          src="/static/delete.svg"
          @click.stop="$emit('delete')"
        />
        <img
          :draggable="false"
          alt="Copy uploaded file url"
          class="copy-icon"
          src="/static/copy.svg"
          @click.stop="copyToClipboard(modelValue.url)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CloudFile } from 'src/uploader';
import { copyToClipboard } from 'quasar';

export interface UploadedFileProps {
  modelValue: CloudFile;
}

defineProps<UploadedFileProps>();

defineEmits(['delete']);
</script>

<style lang="scss" scoped>
@import 'src/css/app';

.uploaded-file {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(108deg, #fff 0.75%, #f6f6f6 94.83%);
  box-shadow: 0 3px 10px 0 rgba(130, 140, 252, 0.1);

  border-radius: 18px;
  height: 130px;
  padding: 22px 20px 29px;
  @media (min-width: $breakpoint-sm-min),
  (min-width: $breakpoint-md-min) and (orientation: landscape) {
    border-radius: 20px;
    height: 120px;
    padding: 22px 22px 28px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    border-radius: 26px;
    height: 190px;
    padding: 40.5px 40px 48px;
  }
  @media (min-width: $breakpoint-lg-min) {
    border-radius: 26px;
    height: 186px;
    padding: 41px 40px 49px;
  }
  @media (min-width: $breakpoint-xl-min) {
    border-radius: 30px;
    height: 186px;
    padding: 40px 30px 41px;
  }
}

.file-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  padding-bottom: 10px;
  @media (min-width: $breakpoint-sm-min),
  (min-width: $breakpoint-md-min) and (orientation: landscape) {
    padding-bottom: 8px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    padding-bottom: 12px;
  }
  @media (min-width: $breakpoint-lg-min) {
    padding-bottom: 11px;
  }
  @media (min-width: $breakpoint-xl-min) {
    padding-bottom: 14px;
  }
  border-bottom: 1px solid #d5d8dd;
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

.file-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  gap: 8px; // FIXME: check
}

.file-name {
  color: #302c3a;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  font-size: 16px;
  letter-spacing: -0.32px;
  @media (min-width: $breakpoint-sm-min),
  (min-width: $breakpoint-md-min) and (orientation: landscape) {
    font-size: 13px;
    letter-spacing: -0.26px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    font-size: 16px;
    letter-spacing: -0.32px;
  }
  @media (min-width: $breakpoint-lg-min) {
    font-size: 15px;
    letter-spacing: -0.3px;
  }
  @media (min-width: $breakpoint-xl-min) {
    font-size: 20px;
    letter-spacing: -0.4px;
  }
}

.controls {
  display: flex;

  gap: 10px;
  @media (min-width: $breakpoint-sm-min),
  (min-width: $breakpoint-md-min) and (orientation: landscape) {
    gap: 8px;
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

.delete-icon,
.copy-icon {
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
    width: 20px;
    height: 20px;
  }
}

.one-file {
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
</style>
