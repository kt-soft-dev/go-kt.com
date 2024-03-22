<template>
  <div class="terminal-screen">
    <div class="screen-heading">
      <img
        :draggable="false"
        alt="Terminal icon"
        class="screen-heading-icon"
        src="/static/terminal.svg"
      />
      <div class="screen-title" v-html="$t('terminal-screen.header')" />
    </div>
    <div class="terminal-wrapper">
      <TiltedBadge class="in-develop-badge">In develop</TiltedBadge>
      <div class="terminal">
        <div class="terminal-heading">
          <div class="terminal-buttons-holder">
            <img
              :draggable="false"
              alt="Window control panel"
              class="terminal-buttons"
              src="/static/terminal-buttons.svg"
            />
          </div>
          <div
            class="terminal-header"
            v-html="$t('terminal-screen.terminal.header')"
          />
        </div>
        <div class="terminal-body">
          <div
            class="terminal-body-content"
            v-html="
              // noinspection TypeScriptValidateTypes
              $t('terminal-screen.terminal.body', {
                link: githubLink,
              })
            "
          />
          <q-btn
            :href="githubLink"
            :padding="
              adaptiveValue(
                '12px 30px',
                '12px 30px',
                '12px 30px',
                '12px 30px',
                '10px 30px'
              )
            "
            class="github-button"
            flat
            no-caps
          >
            <div class="github-button-content">
              <img
                :draggable="false"
                alt="Github icon"
                class="github-icon"
                src="/static/github.svg"
              />
              <div v-html="$t('terminal-screen.terminal.go-to-github')" />
            </div>
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { adaptiveValue } from 'src/utils';
import TiltedBadge from 'components/TiltedBadge.vue';

const githubLink = 'https://github.com/kt-soft-dev/kt-cli';
</script>

<style lang="scss" scoped>
@import 'src/css/app';

.terminal-screen {
  @extend .screen;
  background-color: #ffffff;

  padding-top: 40px;
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
    padding-top: 80px;
    padding-bottom: 80px;
  }
}

.terminal-wrapper {
  position: relative;

  width: 332px;
  margin-top: 30px;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    width: 388px;
    margin-top: 26px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    width: 706px;
    margin-top: 56px;
  }
  @media (min-width: $breakpoint-lg-min) {
    width: 774px;
    margin-top: 56px;
  }
  @media (min-width: $breakpoint-xl-min) {
    width: 906px;
    margin-top: 64px;
  }
}

.terminal {
  display: flex;
  flex-direction: column;
  overflow: hidden;

  border-radius: 18px;
  height: 234px;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    border-radius: 17px;
    height: 210px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    border-radius: 26px;
    height: 280px;
  }
  @media (min-width: $breakpoint-lg-min) {
    border-radius: 24px;
    height: 270px;
  }
  @media (min-width: $breakpoint-xl-min) {
    border-radius: 30px;
    height: 400px;
  }
}

.terminal-heading {
  width: 100%;
  background: #f5f5f5;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: left;

  height: 48px;
  padding: 0 16px;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    height: 44px;
    padding: 0 16px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    height: 48px;
    padding: 0 16px;
  }
  @media (min-width: $breakpoint-lg-min) {
    height: 48px;
    padding: 0 16px;
  }
  @media (min-width: $breakpoint-xl-min) {
    height: 48px;
    padding: 0 15px;
  }
}

.terminal-header {
  width: 100%;
  color: #302c3a;
  text-align: center;
  font-style: normal;
  font-weight: 700;

  font-size: 12px;
  line-height: 16px; /* 133.333% */
  margin-top: 1px;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    font-size: 11px;
    line-height: 15px; /* 136.364% */
    margin-top: 0.5px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    font-size: 14px;
    line-height: 18px; /* 128.571% */
    margin-top: 0;
  }
  @media (min-width: $breakpoint-lg-min) {
    font-size: 14px;
    line-height: 18px; /* 128.571% */
    margin-top: 0;
  }
  @media (min-width: $breakpoint-xl-min) {
    font-size: 14px;
    line-height: 18px; /* 128.571% */
    margin-top: 0;
  }
}

.terminal-buttons-holder {
  width: 0;

  margin-top: 0;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    margin-top: 1px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    margin-top: 0;
  }
  @media (min-width: $breakpoint-lg-min) {
    margin-top: 0;
  }
  @media (min-width: $breakpoint-xl-min) {
    margin-top: 0;
  }
}

.terminal-buttons {
  width: 50px;
  height: 12px;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    width: 50px;
    height: 12px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    width: 64px;
    height: 16px;
  }
  @media (min-width: $breakpoint-lg-min) {
    width: 64px;
    height: 16px;
  }
  @media (min-width: $breakpoint-xl-min) {
    width: 64px;
    height: 16px;
  }
}

.terminal-body {
  position: relative;
  width: 100%;
  flex-grow: 1;
  background: #131313;
  padding: 8px 8px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.terminal-body-content {
  width: 100%;
  height: 100%;
  color: #f9f9f9;
  font-family: 'Roboto Mono', monospace;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;

  font-size: 10px;
  line-height: 16px; /* 160% */
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    font-size: 10px;
    line-height: 16px; /* 160% */
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    font-size: 12px;
    line-height: 18px; /* 150% */
  }
  @media (min-width: $breakpoint-lg-min) {
    font-size: 12px;
    line-height: 18px; /* 150% */
  }
  @media (min-width: $breakpoint-xl-min) {
    font-size: 12px;
    line-height: 18px; /* 150% */
  }
}

.github-button {
  position: absolute;
  background: #fff;
  display: flex;
  align-items: center;

  bottom: 20px;
  border-radius: 14px;
  width: 240px;
  height: auto;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    bottom: 16px;
    border-radius: 12px;
    width: 252px;
    height: auto;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    bottom: 28px;
    border-radius: 14px;
    width: 338px;
    height: 44px;
  }
  @media (min-width: $breakpoint-lg-min) {
    bottom: 28px;
    border-radius: 14px;
    width: 338px;
    height: 44px;
  }
  @media (min-width: $breakpoint-xl-min) {
    bottom: 30px;
    border-radius: 14px;
    width: auto;
    height: auto;
  }
}

.github-button-content {
  display: flex;
  align-items: center;
  color: #131313;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  gap: 10px;
  font-size: 16px;
  letter-spacing: -0.32px;
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    gap: 8px;
    font-size: 13px;
    letter-spacing: -0.26px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    gap: 10px;
    font-size: 16px;
    letter-spacing: -0.32px;
  }
  @media (min-width: $breakpoint-lg-min) {
    gap: 10px;
    font-size: 15px;
    letter-spacing: -0.3px;
  }
  @media (min-width: $breakpoint-xl-min) {
    gap: 10px;
    font-size: 18px;
    letter-spacing: -0.36px;
  }
}

.github-icon {
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

.in-develop-badge {
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
    width: 130px;
    height: 40px;
    padding: 0;
  }
  @media (min-width: $breakpoint-lg-min) {
    width: 130px;
    height: 40px;
    padding: 0;
  }
  @media (min-width: $breakpoint-xl-min) {
    width: auto;
    height: 44px;
    padding: 0 14.212px;
  }

  transform: rotate(4deg) translate(5.3px, -50%);
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    transform: rotate(4deg) translate(7.38px, calc(-50% + 1.5px));
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    transform: rotate(4deg) translate(8.45px, calc(-50% + 4.5px));
  }
  @media (min-width: $breakpoint-lg-min) {
    transform: rotate(4deg) translate(8.45px, calc(-50% - 0.5px));
  }
  @media (min-width: $breakpoint-xl-min) {
    transform: rotate(4deg) translate(20.42px, -50%);
  }
}
</style>
