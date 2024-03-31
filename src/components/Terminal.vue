<template>
    <div class="terminal shadow bg-grey-2">
        <div class="terminal-top" />
        <code class="terminal-code text-left block full-width">
            <slot />
        </code>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'KtTerminal',
})
</script>

<style lang="scss" scoped>
@import 'quasar/src/css/variables';

.terminal-top {
    height: 26px;
    background-image: url(/assets/terminal-top.svg);
    background-repeat: no-repeat;
    background-color: $primary;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.terminal {
    width: fit-content;
    border-radius: 5px;
}

.terminal-code {
    padding: 25px 20px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    white-space: pre-line;
}
</style>
