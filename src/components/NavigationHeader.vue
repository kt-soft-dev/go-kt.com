<template>
  <header class="header">
    <div class="header-content">
      <div class="logo-and-name">
        <img
          :draggable="false"
          alt="logo"
          class="logo"
          src="/static/logo.svg"
        />
        <div class="company-name" v-html="$t('header.company-name')" />
      </div>
      <nav class="nav">
        <a class="nav-link" href="#" v-html="$t('header.registration')" />
        <a class="nav-link" href="#" v-html="$t('header.support')" />
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '/src/css/app';

.header {
  @extend .main-container;
  background: #f5f3f7;
}

.header-content {
  display: flex;
  justify-content: space-between;
  position: relative;
  border-bottom: 1px #d5d8dd solid;

  height: 62px;
  padding-left: 1px;
  padding-right: 1px;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    height: 38px;
    padding-left: 1px;
    padding-right: 1px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    height: 62px;
    padding-left: 2px;
    padding-right: 2px;
  }
  @media (min-width: $breakpoint-lg-min) {
    height: 60px;
    padding-left: 1px;
    padding-right: 1px;
  }
  @media (min-width: $breakpoint-xl-min) {
    height: 70px;
    padding-left: 2px;
    padding-right: 2px;
  }
}

.logo-and-name {
  display: flex;

  gap: 6px;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    gap: 8px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    gap: 8px;
  }
  @media (min-width: $breakpoint-lg-min) {
    gap: 10px;
  }
  @media (min-width: $breakpoint-xl-min) {
    gap: 10px;
  }
}

.logo {
  width: 21.746px;
  height: 20px;
  margin-top: 24px;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    width: 17.398px;
    height: 16px;
    margin-top: 13px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    width: 25px;
    height: 22.993px;
    margin-top: 23px;
  }
  @media (min-width: $breakpoint-lg-min) {
    width: 27px;
    height: 24.833px;
    margin-top: 21px;
  }
  @media (min-width: $breakpoint-xl-min) {
    width: 40px;
    height: 36.788px;
    margin-top: 20px;
  }
}

.company-name {
  color: #302c3a;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: default;
  height: min-content;

  margin-top: 26px;
  font-size: 16px;
  letter-spacing: -0.32px;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    margin-top: 14px;
    font-size: 12px;
    letter-spacing: -0.24px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    margin-top: 24px;
    font-size: 18px;
    letter-spacing: -0.36px;
  }
  @media (min-width: $breakpoint-lg-min) {
    margin-top: 25px;
    font-size: 17px;
    letter-spacing: -0.34px;
  }
  @media (min-width: $breakpoint-xl-min) {
    margin-top: 30px;
    font-size: 20px;
    letter-spacing: -0.4px;
  }
}

$navLinkPadding: 5px;

.nav {
  margin-right: -$navLinkPadding;
  display: flex;
  height: fit-content;

  margin-top: 27px - $navLinkPadding;
  gap: 20px - 2 * $navLinkPadding;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    margin-top: 16px - $navLinkPadding;
    gap: 14px - 2 * $navLinkPadding;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    margin-top: 27px - $navLinkPadding;
    gap: 22px - 2 * $navLinkPadding;
  }
  @media (min-width: $breakpoint-lg-min) {
    margin-top: 28px - $navLinkPadding;
    gap: 20px - 2 * $navLinkPadding;
  }
  @media (min-width: $breakpoint-xl-min) {
    margin-top: 32px - $navLinkPadding;
    gap: 20px - 2 * $navLinkPadding;
  }
}

.nav-link {
  padding: $navLinkPadding;
  align-self: center;
  text-decoration: none;
  cursor: pointer;
  color: #534963;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  font-size: 12px;
  letter-spacing: -0.24px;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    font-size: 9px;
    letter-spacing: -0.18px;
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
