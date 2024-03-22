<template>
  <div class="badge">
    <div class="badge-content">
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup></script>

<style lang="scss" scoped>
@import 'src/css/app';

.badge {
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  // then define transform property on each badge.
  transform: rotate(4deg) translate(10%, -50%);
}

.badge-content {
  color: #fff;
  text-align: center;
  font-style: normal;
  font-weight: 500;

  font-size: 14px;
  line-height: 17px; /* 121.429% */
  letter-spacing: -0.14px;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    font-size: 12px;
    line-height: 15px; /* 125% */
    letter-spacing: -0.12px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    font-size: 20px;
    line-height: 20px; /* 100% */
    letter-spacing: -0.2px;
  }
  @media (min-width: $breakpoint-lg-min) {
    font-size: 20px;
    line-height: 20px; /* 100% */
    letter-spacing: -0.2px;
  }
  @media (min-width: $breakpoint-xl-min) {
    font-size: 22px;
    line-height: 22px; /* 100% */
    letter-spacing: -0.22px;
  }
}
</style>
