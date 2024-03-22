<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="copyright" v-html="$t('footer.copyright')" />
      <div class="brands">
        <img
          :draggable="false"
          alt="Demhack"
          class="demhack"
          src="/static/demhack.svg"
        />
        <img
          :draggable="false"
          alt="Privacy Accelerator"
          class="privacy-accelerator"
          src="/static/privacy-accelerator.svg"
        />
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '/src/css/app';

.footer {
  @extend .main-container;
  background: #f5f3f7;
}

.footer-content {
  display: flex;
  align-items: center;
  position: relative;
  border-top: 1px #d5d8dd solid;

  padding: 0;
  height: 117px;
  flex-direction: column-reverse;
  justify-content: center;
  gap: 24px;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    padding: 0 1px;
    height: 64px;
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    padding: 0 2px;
    height: 84px;
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
  @media (min-width: $breakpoint-lg-min) {
    padding: 0 1px;
    height: 84px;
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
  @media (min-width: $breakpoint-xl-min) {
    padding: 0 2px;
    height: 90px;
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
}

.copyright {
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

.brands {
  display: flex;

  gap: 24px;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    gap: 20px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    gap: 28px;
  }
  @media (min-width: $breakpoint-lg-min) {
    gap: 28px;
  }
  @media (min-width: $breakpoint-xl-min) {
    gap: 30px;
  }
}

.demhack {
  width: 134px;
  height: 28px;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    width: 114px;
    height: 24px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    width: 148px;
    height: 30px;
  }
  @media (min-width: $breakpoint-lg-min) {
    width: 140px;
    height: 28px;
  }
  @media (min-width: $breakpoint-xl-min) {
    width: 164px;
    height: 34px;
  }
}

.privacy-accelerator {
  width: 84px;
  height: 28px;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    width: 71px;
    height: 24px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    width: 92px;
    height: 30px;
  }
  @media (min-width: $breakpoint-lg-min) {
    width: 87px;
    height: 28px;
  }
  @media (min-width: $breakpoint-xl-min) {
    width: 84px;
    height: 28px;
  }
}
</style>
