<template>
    <q-layout>
        <q-header class="bg-transparent landing-header q-py-lg">
            <q-toolbar>
                <q-btn flat round dense icon="menu" class="q-mr-sm" />
                <q-img
                    src="/assets/logo-192x192.png"
                    width="48px"
                    height="48px"
                />

                <q-toolbar-title>
                    <TextBlock
                        :message-id="'title'"
                        class="text-h5 text-blue-grey-8"
                        inline
                    />
                </q-toolbar-title>

                <q-btn color="black" flat href="https://t.me/kt_service_bot">
                    Запросить доступ
                </q-btn>
            </q-toolbar>
        </q-header>
        <q-page-container>
            <router-view />
        </q-page-container>
        <q-footer>
            <div class="row" style="padding: 1%;">
                <div class="col-3" />
                <div class="col-6" />
                <div class="col-3 self-end" style="text-align: right">
                    <q-img src="~/assets/demhack.svg" class="partner-icon" />
                    <q-img src="~/assets/pa.svg" class="partner-icon" />
                    <p>
                        &copy; ktSoftware, 2019-2023
                    </p>
                </div>
            </div>
        </q-footer>
    </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TextBlock from 'components/TextBlock.vue'

export default defineComponent({
    name: 'MainLayout',
    components: { TextBlock },

    setup() {
        return {}
    },
})
</script>

<style>
    .partner-icon {
        width: 8rem;
    }

    .landing-header {
        padding-left: 10%;
        padding-right: 10%;
        padding-top: 1rem;
    }
</style>
