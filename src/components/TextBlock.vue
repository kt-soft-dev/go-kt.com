<template>
    <span :class="{ block: !inline }" style="white-space: pre-line" v-html="$t(messageId)" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TextBlock',
    props: {
        messageId: {
            type: String,
            required: true,
        },
        inline: {
            type: Boolean,
            default: false,
        },
    },
})
</script>
