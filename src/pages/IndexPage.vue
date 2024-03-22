<template>
  <q-page>
    <NavigationHeader />
    <MainScreen />
    <FeaturesScreen />
    <q-separator :spaced="false" class="site-width q-mx-auto" />
    <TerminalScreen />
    <BetaAccessScreen />
    <CopyrightFooter />
  </q-page>
</template>

<script lang="ts" setup>
import MainScreen from 'components/screens/MainScreen.vue';
import FeaturesScreen from 'components/screens/FeaturesScreen.vue';
import TerminalScreen from 'components/screens/TerminalScreen.vue';
import BetaAccessScreen from 'components/screens/BetaAccessScreen.vue';
import NavigationHeader from 'components/NavigationHeader.vue';
import CopyrightFooter from 'components/CopyrightFooter.vue';
</script>
