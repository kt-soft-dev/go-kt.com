<template>
    <q-input
        ref="passwordInput"
        :label="$t('password')"
        :type="showPassword ? 'text' : 'password'"
        v-model="password"
        :rules="[(v) => !!v]"
        no-error-icon
        dense
        filled
        bg-color="bg-grey-2"
        hide-bottom-space
        :disable="!encrypt"
    >
        <template v-slot:append>
            <q-icon
                :name="showPassword ? 'visibility' : 'visibility_off'"
                class="cursor-pointer"
                @click="showPassword = !showPassword"
            />
        </template>
        <template v-slot:before>
            <q-toggle
                style="font-size: 0.6em; margin-left: -12px"
                :label="$t('encrypt-toggle')"
                v-model="encrypt"
            />
        </template>
    </q-input>
    <q-btn color="primary" class="full-width q-mt-sm" @click="uploaderProxy?.click()">
        <q-icon name="upload" />
        Выбрать файлы
    </q-btn>
    <input type="file" ref="uploaderProxy" @change="encryptAndUpload()" style="display: none" />
    <q-uploader
        class="bg-grey-2 q-mt-lg shadow full-width"
        v-bind="$attrs"
        :style="{ height }"
        ref="uploader"
        @uploaded="onUploaded"
        :form-fields="[{name: 'anon', value: '1'}, {name: 'crypto', value: encrypt ? '1' : '0'}]"
        :url="url"
        field-name="file"
        multiple auto-upload
    >
        <template v-slot:header="scope">
            <div class="row no-wrap items-center q-pa-sm q-gutter-xs">
                <q-spinner v-if="scope.isUploading" class="q-uploader__spinner" />
                <div class="col">
                    <div class="q-uploader__subtitle">{{ scope.uploadSizeLabel }} / {{ scope.uploadProgressLabel }}</div>
                </div>
                <q-btn v-if="scope.canUpload" icon="cloud_upload" @click="scope.upload" round dense flat >
                    <q-tooltip>Upload Files</q-tooltip>
                </q-btn>

                <q-btn v-if="scope.isUploading" icon="clear" @click="scope.abort" round dense flat >
                    <q-tooltip>Abort Upload</q-tooltip>
                </q-btn>
            </div>
        </template>
        <template v-slot:list="scope">
            <q-list separator>
                <q-item v-for="file in scope.files" :key="file.__key">
                    <q-item-section>
                        <q-item-label class="full-width ellipsis">
                            {{ file.name }}
                        </q-item-label>
                        <q-item-label caption>
                            {{ $t('uploader-status') }}: {{ file.__status }}
                        </q-item-label>
                        <q-item-label caption>
                            {{ file.__sizeLabel }} /
                            {{ file.__progressLabel }}
                        </q-item-label>
                    </q-item-section>
                    <q-item-section v-if="file.__img" thumbnail>
                        <img :src="file.__img.src" alt="" />
                    </q-item-section>
                    <q-item-section top side>
                        <q-btn
                            flat
                            dense
                            round
                            icon="delete"
                            @click="scope.removeFile(file)"
                        />
                    </q-item-section>
                </q-item>
            </q-list>
        </template>
    </q-uploader>
</template>

<script lang="ts" setup>
import { QInput, QUploader, useQuasar } from 'quasar'
import { ref, watch } from 'vue'
import * as openpgp from 'openpgp';

const $q = useQuasar();
defineProps({height: String, url: String});
const uploaderProxy = ref<HTMLInputElement | null>(null);
const uploader = ref<QUploader | null>(null);
const showPassword = ref(false);
const encrypt = ref(false);
const password = ref('');
const passwordInput = ref<QInput | null>(null);

const encryptAndUpload = async () => {
    if (!uploaderProxy.value) {
        return;
    }

    const files = uploaderProxy.value.files as FileList;
    for (let x = 0; x < files.length; x++) {
        const fileItem = files.item(Number(x));
        if (!fileItem) {
            continue;
        }

        if (!encrypt.value) {
          uploader.value?.addFiles([fileItem]);
          continue;
        }

        const blob = await fileItem.arrayBuffer();
        const message = await openpgp.createMessage({ binary: new Uint8Array(blob) });
        const encrypted = await openpgp.encrypt({
            message,
            format: 'binary',
            passwords: [password.value],
            config: { preferredCompressionAlgorithm: openpgp.enums.compression.zlib }
        });
        const file = new File([new Blob([encrypted as BlobPart])], fileItem.name);
        uploader.value?.addFiles([file]);
    }
};

interface UploadResult {
    files: readonly File[];
    xhr: XMLHttpRequest;
}

const onUploaded = (s: UploadResult) => {
    const response = JSON.parse(s?.xhr?.response);
    if (!response?.result?.file_id) {
        return;
    }

    const url = 'https://ktcloud.app/view/' + response?.result?.file_id;
    window.open(url);
    $q.dialog({
        title: 'Файл загружен',
        message: 'Ссылка на ваш файл: ' + url,
    })
}

watch(encrypt, (value) => {
    if (!value) {
        password.value = ''
        passwordInput.value?.resetValidation()
    }
});
</script>
