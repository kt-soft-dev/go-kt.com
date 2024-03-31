<template>
    <q-page class="col">
        <div
            class="row flex-center q-col-gutter-xxl q-gutter-y-md q-pb-xl q-px-lg"
            :class="{ 'q-py-md': !$q.screen.lt.md }"
        >
            <q-space class="col-12 col-lg-2" />
            <div
                class="col-12 col-md col-sm-6"
                :class="{ 'text-right': !$q.screen.lt.sm }"
            >
                <TextBlock
                    :message-id="'uploader-title'"
                    class="text-h5 q-pb-md"
                />
                <TextBlock
                    :message-id="'uploader-description'"
                    class="q-pb-md"
                />
                <KtUploader
                    height="220px"
                    :class="{ 'float-right': !$q.screen.lt.sm }"
                    :url="uploadUrl"
                />
                <q-resize-observer @resize="onUploaderBlockResize" debounce="0" />
            </div>
            <TextBlock
                :message-id="'uploader-or-cli'"
                class="col-12 text-center text-h6 text-weight-regular"
                v-if="$q.screen.lt.sm"
            />
            <div class="col-12 col-md-7 col-sm-6">
                <KtTerminal :style="terminalStyle">{{ $t('terminal-code') }}</KtTerminal>
            </div>
        </div>

        <div
            class="row column flex bg-primary q-py-xl q-px-lg"
            :class="{ 'flex-center': !$q.screen.lt.sm }"
        >
            <TextBlock message-id="also-features" class="text-white text-h5" />
        </div>

        <div
            class="row flex bg-blue-grey-1 q-py-xl q-px-lg"
            :class="{ 'flex-center': !$q.screen.lt.sm }"
        >
            <div
                v-for="(icon, messageId) in ourFeatures"
                v-bind:key="messageId"
                class="col-6 row flex items-center no-wrap q-mb-md"
                :class="{
                    'q-px-md': !$q.screen.lt.sm,
                }"
            >
                <div class="col-4">
                    <q-img :src="icon" class="q-mr-lg" width="150px" />
                </div>
                <div class="col-8">
                    <TextBlock
                        :message-id="messageId"
                        class="text-h6 text-weight-regular"
                    />
                </div>
            </div>
        </div>


        <div
            class="col column flex bg-blue-grey-1 q-py-xl q-px-lg"
            :class="{ 'flex-center': !$q.screen.lt.sm }"
        >
            <TextBlock :message-id="'register-title'" class="text-h4 q-mb-lg" />
            <TextBlock :message-id="'register-description'" class="text-h5" />
            <ul class="text-h6 text-weight-regular">
                <li>{{ $t('why-register-1') }}</li>
                <li>{{ $t('why-register-2') }}</li>
                <li>{{ $t('why-register-3') }}</li>
            </ul>
            <q-btn
                no-caps
                square
                ripple
                class="kt-btn-round"
                color="primary"
                :label="$t('register')"
                size="lg"
                href="https://t.me/kt_service_bot"
            />
        </div>
    </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import KtTerminal from 'components/Terminal.vue'
import KtUploader from 'components/UploaderBlock.vue'
import TextBlock from 'components/TextBlock.vue'
import { useQuasar } from 'quasar'

import money from 'assets/money.png'
import nsfw from 'assets/nsfw.png'
import oops from 'assets/oops.png'
import secret from 'assets/secret_kitten.png'

export default defineComponent({
    name: 'IndexPage',
    components: { TextBlock, KtUploader, KtTerminal },
    setup() {
        const $q = useQuasar()
        const terminalStyle = {} as { height: string }
        const uploadUrl = 'https://dinglebob.go-kt.com/upload';

        const ourFeatures = ref({
            'our-feature-1': oops,
            'our-feature-2': secret,
            'our-feature-3': nsfw,
            'our-feature-4': money,
        })

        function onUploaderBlockResize({ height }: { height: number }) {
            terminalStyle.height = $q.screen.lt.sm ? 'unset' : `${height}px`
        }

        return {
            ourFeatures,
            terminalStyle,
            onUploaderBlockResize,
            uploadUrl
        }
    },
})
</script>

<style lang="scss">

.q-col-gutter-xxl > * {
    padding-left: 32px;
}

.q-px-xxl {
    padding-left: 32px;
    padding-right: 32px;
}

p {
    font-size: 1rem;
}

sup {
    color: red;
}

.kt-btn-round {
    border-radius: 0.3rem;
    box-shadow: 1px 5px 5px gray;
}
</style>
