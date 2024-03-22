<template>
  <div class="relative-position">
    <slot name="badge" />
    <div class="card">
      <div class="container">
        <div class="title">
          <slot name="title"></slot>
        </div>
        <div class="description">
          <slot name="description"></slot>
        </div>
      </div>
      <img
        :draggable="false"
        :src="coverImageSrc"
        alt="Card background"
        class="cover-image"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
export interface FeatureCardProps {
  coverImageSrc: string;
}

defineProps<FeatureCardProps>();
</script>

<style lang="scss" scoped>
@import 'src/css/app';

.card {
  overflow: hidden;
  background: #e9ebfe;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  border-radius: 18px;
  width: 332px;
  height: 234px;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    border-radius: 17px;
    width: 188px;
    height: 210px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    border-radius: 26px;
    width: 345px;
    height: 240px;
  }
  @media (min-width: $breakpoint-lg-min) {
    border-radius: 24px;
    width: 379px;
    height: 210px;
  }
  @media (min-width: $breakpoint-xl-min) {
    border-radius: 30px;
    width: 204px;
    height: 363px;
  }
}

.cover-image {
  width: 100%;
  position: absolute;
  bottom: 0;
}

.container {
  display: flex;
  flex-direction: column;

  gap: 8px;
  padding-top: 20px;
  padding-left: 20px;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    gap: 6px;
    padding-top: 16px;
    padding-left: 16px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    gap: 14px;
    padding-top: 28px;
    padding-left: 28px;
  }
  @media (min-width: $breakpoint-lg-min) {
    gap: 12px;
    padding-top: 22px;
    padding-left: 22px;
  }
  @media (min-width: $breakpoint-xl-min) {
    gap: 20px;
    padding-top: 26px;
    padding-left: 26px;
  }
}

.title {
  color: #302c3a;
  font-style: normal;
  font-weight: 600;

  font-size: 16px;
  line-height: 18px; /* 112.5% */
  letter-spacing: -0.32px;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    font-size: 13px;
    line-height: 15px; /* 115.385% */
    letter-spacing: -0.26px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    font-size: 16px;
    line-height: 18px; /* 112.5% */
    letter-spacing: -0.32px;
  }
  @media (min-width: $breakpoint-lg-min) {
    font-size: 15px;
    line-height: 17px; /* 113.333% */
    letter-spacing: -0.3px;
  }
  @media (min-width: $breakpoint-xl-min) {
    font-size: 18px;
    line-height: 20px; /* 111.111% */
    letter-spacing: -0.36px;
  }
}

.description {
  color: #534963;
  font-style: normal;
  font-weight: 400;

  font-size: 14px;
  line-height: normal;
  letter-spacing: -0.28px;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    font-size: 11px;
    line-height: normal;
    letter-spacing: -0.22px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    font-size: 14px;
    line-height: normal;
    letter-spacing: -0.28px;
  }
  @media (min-width: $breakpoint-lg-min) {
    font-size: 12px;
    line-height: normal;
    letter-spacing: -0.24px;
  }
  @media (min-width: $breakpoint-xl-min) {
    font-size: 15px;
    line-height: normal;
    letter-spacing: -0.3px;
  }
}
</style>
