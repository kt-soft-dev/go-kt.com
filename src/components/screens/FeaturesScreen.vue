<template>
  <div class="features-screen">
    <div class="screen-heading features-heading">
      <img
        :draggable="false"
        alt="Features icon"
        class="screen-heading-icon"
        src="/static/combine.svg"
      />
      <div class="screen-title" v-html="$t('features-screen.header')" />
    </div>
    <div class="features">
      <FeatureCard
        :cover-image-src="
          adaptiveValue(
            '/static/cats/respectful/xs.svg',
            '/static/cats/respectful/sm.svg',
            '/static/cats/respectful/md.svg',
            '/static/cats/respectful/lg.svg',
            '/static/cats/respectful/xl.svg'
          )
        "
      >
        <template #title>
          <div v-html="$t('features-screen.encryption.title')" />
        </template>
        <template #description>
          <div v-html="$t('features-screen.encryption.description')" />
        </template>
      </FeatureCard>
      <FeatureCard
        :cover-image-src="
          adaptiveValue(
            '/static/cats/in_glass/xs.svg',
            '/static/cats/in_glass/sm.svg',
            '/static/cats/in_glass/md.svg',
            '/static/cats/in_glass/lg.svg',
            '/static/cats/in_glass/xl.svg'
          )
        "
      >
        <template #badge>
          <TiltedBadge class="beta-badge">beta</TiltedBadge>
        </template>
        <template #title>
          <div v-html="$t('features-screen.online.title')" />
        </template>
        <template #description>
          <div v-html="$t('features-screen.online.description')" />
        </template>
      </FeatureCard>
      <FeatureCard
        :cover-image-src="
          adaptiveValue(
            '/static/cats/secure/xs.svg',
            '/static/cats/secure/sm.svg',
            '/static/cats/secure/md.svg',
            '/static/cats/secure/lg.svg',
            '/static/cats/secure/xl.svg'
          )
        "
      >
        <template #title>
          <div v-html="$t('features-screen.security.title')" />
        </template>
        <template #description>
          <div v-html="$t('features-screen.security.description')" />
        </template>
      </FeatureCard>
      <FeatureCard
        :cover-image-src="
          adaptiveValue(
            '/static/cats/paw/xs.svg',
            '/static/cats/paw/sm.svg',
            '/static/cats/paw/md.svg',
            '/static/cats/paw/lg.svg',
            '/static/cats/paw/xl.svg'
          )
        "
      >
        <template #title>
          <div v-html="$t('features-screen.inexpensive.title')" />
        </template>
        <template #description>
          <div v-html="$t('features-screen.inexpensive.description')" />
        </template>
      </FeatureCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
import FeatureCard from 'components/FeatureCard.vue';
import TiltedBadge from 'components/TiltedBadge.vue';
import { adaptiveValue } from 'src/utils';
</script>

<style lang="scss" scoped>
@import 'src/css/app';

.features-screen {
  @extend .screen;
  background-color: #ffffff;

  padding-top: 50px;
  padding-bottom: 50px;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    padding-top: 70px;
    padding-bottom: 70px;
  }
  @media (min-width: $breakpoint-lg-min) {
    padding-top: 70px;
    padding-bottom: 70px;
  }
  @media (min-width: $breakpoint-xl-min) {
    padding-top: 100px;
    padding-bottom: 80px;
  }
}

.features-heading {
  align-items: start;
  @media (min-width: $breakpoint-sm-min) {
    align-items: inherit;
  }
}

.features {
  display: grid;
  justify-content: center;
  align-items: start;
  margin-top: 30px;
  gap: 20px;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    margin-top: 26px;
    gap: 18px 12px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    margin-top: 56px;
    gap: 20px 16px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: $breakpoint-lg-min) {
    margin-top: 56px;
    gap: 20px 16px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: $breakpoint-xl-min) {
    margin-top: 64px;
    gap: 20px 30px;
    grid-template-columns: repeat(4, 1fr);
  }
}

.beta-badge {
  background: linear-gradient(248deg, #ec536f 29.91%, #ea2347 127.22%);

  height: auto;
  width: 72.431px;
  padding: 6px 0;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    height: auto;
    width: 64px;
    padding: 6px 0;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    height: 40px;
    width: 84px;
    padding: 0;
  }
  @media (min-width: $breakpoint-lg-min) {
    height: 40px;
    width: 84px;
    padding: 0;
  }
  @media (min-width: $breakpoint-xl-min) {
    height: 40px;
    width: 96px;
    padding: 0;
  }

  transform: rotate(4deg) translate(5.33px, calc(-50% + 2px));
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    transform: rotate(4deg) translate(6.86px, calc(-50% + 1px));
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    transform: rotate(4deg) translate(8.5px, calc(-50% + 3px));
  }
  @media (min-width: $breakpoint-lg-min) {
    transform: rotate(4deg) translate(8.5px, calc(-50% - 2px));
  }
  @media (min-width: $breakpoint-xl-min) {
    transform: rotate(4deg) translate(19.24px, calc(-50% + 3px));
  }
}
</style>
