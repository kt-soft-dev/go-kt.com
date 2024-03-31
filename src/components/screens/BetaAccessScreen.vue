<template>
  <div class="beta-access-screen">
    <div class="screen-heading beta-access-heading">
      <div class="screen-title" v-html="$t('beta-access-screen.header')" />
    </div>
    <div
      class="beta-access-sub-header"
      v-html="$t('beta-access-screen.sub-header')"
    />
    <div class="full-access-offer">
      <TiltedBadge class="full-access-badge">Full access</TiltedBadge>
      <ul class="features-list">
        <li v-html="$t('beta-access-screen.full-access-list.first')" />
        <li v-html="$t('beta-access-screen.full-access-list.second')" />
        <li v-html="$t('beta-access-screen.full-access-list.third')" />
      </ul>
    </div>

    <q-btn
      :href="cloud"
      target="_blank"
      :padding="
        adaptiveValue(
          '12px 30px',
          '12px 30px',
          '12px 30px',
          '12px 30px',
          '10px 30px'
        )
      "
      class="register-button"
      flat
      no-caps
    >
      <div v-html="$t('beta-access-screen.register-button')" />
    </q-btn>
  </div>
</template>

<script lang="ts" setup>
import TiltedBadge from 'components/TiltedBadge.vue';
import { adaptiveValue } from 'src/utils';
import { config } from 'src/config';

const cloud = config.cloudURL;
</script>

<style lang="scss" scoped>
@import 'src/css/app';

// TODO: rename classes

.beta-access-screen {
  @extend .screen;
  background-color: #f5f3f7;

  padding-top: 50px;
  padding-bottom: 80px;
  @media (min-width: $breakpoint-sm-min),
  (min-width: $breakpoint-md-min) and (orientation: landscape) {
    padding-top: 40px;
    padding-bottom: 70px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    padding-top: 70px;
    padding-bottom: 90px;
  }
  @media (min-width: $breakpoint-lg-min) {
    padding-top: 70px;
    padding-bottom: 90px;
  }
  @media (min-width: $breakpoint-xl-min) {
    padding-top: 80px;
    padding-bottom: 100px;
  }
}

.beta-access-heading {
  width: auto;
  text-align: center;
}

.beta-access-sub-header {
  color: #534963;
  text-align: center;
  font-style: normal;
  font-weight: 400;

  margin-top: 12px;
  font-size: 18px;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.36px;
  @media (min-width: $breakpoint-sm-min),
  (min-width: $breakpoint-md-min) and (orientation: landscape) {
    margin-top: 10px;
    font-size: 14px;
    line-height: 20px; /* 142.857% */
    letter-spacing: -0.28px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    margin-top: 20px;
    font-size: 20px;
    line-height: 26px; /* 130% */
    letter-spacing: -0.4px;
  }
  @media (min-width: $breakpoint-lg-min) {
    margin-top: 20px;
    font-size: 20px;
    line-height: 26px; /* 130% */
    letter-spacing: -0.4px;
  }
  @media (min-width: $breakpoint-xl-min) {
    margin-top: 24px;
    font-size: 22px;
    line-height: 28px; /* 127.273% */
    letter-spacing: -0.44px;
  }
}

.full-access-offer {
  position: relative;

  background: linear-gradient(108deg, #fff 0.75%, #f6f6f6 94.83%);
  box-shadow: 0 3px 10px 0 rgba(130, 140, 252, 0.1);

  border-radius: 18px;
  width: 332px;
  height: 206px;
  padding: 26px 26px 34px;
  margin-top: 30px;
  @media (min-width: $breakpoint-sm-min),
  (min-width: $breakpoint-md-min) and (orientation: landscape) {
    border-radius: 17px;
    width: 388px;
    height: 116px;
    padding: 22px;
    margin-top: 26px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    border-radius: 26px;
    width: 522px;
    height: 174px;
    padding: 36px;
    margin-top: 56px;
  }
  @media (min-width: $breakpoint-lg-min) {
    border-radius: 26px;
    width: 522px;
    height: 162px;
    padding: 30px;
    margin-top: 56px;
  }
  @media (min-width: $breakpoint-xl-min) {
    border-radius: 30px;
    width: 594px;
    height: 192px;
    padding: 40px;
    margin-top: 40px;
  }
}

ul.features-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  flex-direction: column;

  gap: 16px;
  @media (min-width: $breakpoint-sm-min),
  (min-width: $breakpoint-md-min) and (orientation: landscape) {
    gap: 12px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    gap: 18px;
  }
  @media (min-width: $breakpoint-lg-min) {
    gap: 18px;
  }
  @media (min-width: $breakpoint-xl-min) {
    gap: 20px;
  }
}

ul.features-list li {
  display: flex;
  align-items: center;
  padding-left: 0;

  gap: 16px;
  @media (min-width: $breakpoint-sm-min),
  (min-width: $breakpoint-md-min) and (orientation: landscape) {
    gap: 12px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    gap: 16px;
  }
  @media (min-width: $breakpoint-lg-min) {
    gap: 18px;
  }
  @media (min-width: $breakpoint-xl-min) {
    gap: 20px;
  }
}

ul.features-list li::before {
  content: url('/static/confirm.svg');
  display: block;

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

ul.features-list li {
  color: #534963;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  font-size: 16px;
  letter-spacing: -0.32px;
  @media (min-width: $breakpoint-sm-min),
  (min-width: $breakpoint-md-min) and (orientation: landscape) {
    font-size: 13px;
    letter-spacing: -0.26px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    font-size: 18px;
    letter-spacing: -0.36px;
  }
  @media (min-width: $breakpoint-lg-min) {
    font-size: 18px;
    letter-spacing: -0.36px;
  }
  @media (min-width: $breakpoint-xl-min) {
    font-size: 20px;
    letter-spacing: -0.4px;
  }
}

.register-button {
  background: #828cfc;
  color: #fff;
  text-align: center;
  line-height: normal;
  font-style: normal;
  font-weight: 600;
  display: flex;
  align-items: center;

  border-radius: 14px;
  font-size: 16px;
  letter-spacing: -0.32px;
  margin-top: 30px;
  width: 240px;
  height: auto;
  @media (min-width: $breakpoint-sm-min),
  (min-width: $breakpoint-md-min) and (orientation: landscape) {
    border-radius: 12px;
    font-size: 13px;
    letter-spacing: -0.26px;
    margin-top: 22px;
    width: 252px;
    height: auto;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    border-radius: 14px;
    font-size: 16px;
    letter-spacing: -0.32px;
    margin-top: 30px;
    width: 338px;
    height: 44px;
  }
  @media (min-width: $breakpoint-lg-min) {
    border-radius: 14px;
    font-size: 15px;
    letter-spacing: -0.3px;
    margin-top: 28px;
    width: 338px;
    height: 44px;
  }
  @media (min-width: $breakpoint-xl-min) {
    border-radius: 14px;
    font-size: 18px;
    letter-spacing: -0.36px;
    margin-top: 40px;
    width: auto;
    height: auto;
  }
}

.full-access-badge {
  background: #191d5d;

  width: auto;
  height: auto;
  padding: 6px 14.212px;
  @media (min-width: $breakpoint-sm-min),
  (min-width: $breakpoint-md-min) and (orientation: landscape) {
    width: auto;
    height: auto;
    padding: 6px 14.212px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    width: 146px;
    height: 40px;
    padding: 0;
  }
  @media (min-width: $breakpoint-lg-min) {
    width: 146px;
    height: 40px;
    padding: 0;
  }
  @media (min-width: $breakpoint-xl-min) {
    width: 150px;
    height: 44px;
    padding: 0;
  }

  transform: rotate(4deg) translate(5.29px, -50%);
  @media (min-width: $breakpoint-sm-min),
  (min-width: $breakpoint-md-min) and (orientation: landscape) {
    transform: rotate(4deg) translate(7.37px, calc(-50% + 1.5px));
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    transform: rotate(4deg) translate(16.2px, calc(-50% + 5px));
  }
  @media (min-width: $breakpoint-lg-min) {
    transform: rotate(4deg) translate(16.43px, -50%);
  }
  @media (min-width: $breakpoint-xl-min) {
    transform: rotate(4deg) translate(24px, calc(-50% + 4px));
  }
}
</style>
