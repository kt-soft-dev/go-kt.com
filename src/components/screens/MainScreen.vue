<template>
  <div class="main-screen">
    <img
      :draggable="false"
      alt="Logo"
      class="logo-cat"
      src="/static/main-logo.svg"
    />

    <div class="main-header" v-html="$t('main-screen.header')" />

    <div class="sub-header" v-html="$t('main-screen.sub-header')" />

    <div class="uploader-wrapper">
      <FileUploader />
    </div>
  </div>
</template>

<script lang="ts" setup>
import FileUploader from 'components/uploader/FileUploader.vue';
</script>

<style lang="scss" scoped>
@import 'src/css/app';

.main-screen {
  @extend .screen;
  background-color: #f5f3f7;

  padding-top: 50px;
  padding-bottom: 50px;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    padding-top: 60px;
    padding-bottom: 70px;
  }
  @media (min-width: $breakpoint-lg-min) {
    padding-top: 60px;
    padding-bottom: 70px;
  }
  @media (min-width: $breakpoint-xl-min) {
    padding-top: 40px;
    padding-bottom: 80px;
  }
}

.logo-cat {
  display: none;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    display: none;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    display: block;
    width: 166px;
    height: 166px;
  }
  @media (min-width: $breakpoint-lg-min) {
    display: block;
    width: 154px;
    height: 154px;
  }
  @media (min-width: $breakpoint-xl-min) {
    display: block;
    width: 200px;
    height: 200px;
  }
}

.main-heading {
  text-align: left;
  width: 332px;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    text-align: left;
    width: 388px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    text-align: center;
    width: auto;
  }
  @media (min-width: $breakpoint-lg-min) {
    text-align: center;
    width: auto;
  }
  @media (min-width: $breakpoint-xl-min) {
    text-align: center;
    width: auto;
  }
}

.main-header {
  @extend .main-heading;
  color: #302c3a;
  font-style: normal;
  font-weight: 800;

  font-size: 30px;
  line-height: 36px; /* 120% */
  letter-spacing: -0.6px;
  margin-top: 0;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    font-size: 30px;
    line-height: 36px; /* 120% */
    letter-spacing: -0.6px;
    margin-top: 0;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    font-size: 44px;
    line-height: 50px; /* 113.636% */
    letter-spacing: -0.88px;
    margin-top: 26px;
  }
  @media (min-width: $breakpoint-lg-min) {
    font-size: 44px;
    line-height: 50px; /* 113.636% */
    letter-spacing: -0.88px;
    margin-top: 26px;
  }
  @media (min-width: $breakpoint-xl-min) {
    font-size: 46px;
    line-height: 52px; /* 113.043% */
    letter-spacing: -0.92px;
    margin-top: 25px;
  }
}

.sub-header {
  @extend .main-heading;
  color: #534963;
  font-style: normal;
  font-weight: 400;

  font-size: 18px;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.36px;
  margin-top: 12px;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    font-size: 14px;
    line-height: 20px; /* 142.857% */
    letter-spacing: -0.28px;
    margin-top: 10px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    font-size: 20px;
    line-height: 26px; /* 130% */
    letter-spacing: -0.4px;
    margin-top: 20px;
  }
  @media (min-width: $breakpoint-lg-min) {
    font-size: 20px;
    line-height: 26px; /* 130% */
    letter-spacing: -0.4px;
    margin-top: 20px;
  }
  @media (min-width: $breakpoint-xl-min) {
    font-size: 22px;
    line-height: 28px; /* 127.273% */
    letter-spacing: -0.44px;
    margin-top: 22px;
  }
}

.uploader-wrapper {
  margin-top: 28px;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    margin-top: 26px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    margin-top: 28px;
  }
  @media (min-width: $breakpoint-lg-min) {
    margin-top: 28px;
  }
  @media (min-width: $breakpoint-xl-min) {
    margin-top: 30px;
  }
}
</style>
