<template>
  <div class="uploader">
    <UploadedFile
      v-if="cloudFile"
      v-model="cloudFile"
      @delete="handleCloudFileDeleting"
    />
    <FilesDropArea v-else v-model="file" :max-files="1">
      <template v-slot:default="{ tooManyFilesError }">
        <div v-if="!file" class="drop-area-content default">
          <div
            class="drop-message"
            v-html="
              tooManyFilesError
                ? $t('uploader.too-many-files')
                : $t('uploader.drop-message')
            "
          />
          <div class="drop-hint" v-html="$t('uploader.drop-hint')" />
        </div>
        <div v-else-if="progress" class="drop-area-content loading">
          <FileHeader
            :caption="$t('uploader.file-loading-caption')"
            :file="file"
            @reset="reset"
            :error="false"
          />
          <ProgressBar
            :value="progress / 100"
            animation-speed="50"
            class="progress-bar"
            color="#828cfc"
            size="4px"
            track-color="#f6f6f6"
          />
        </div>
        <div v-else class="drop-area-content chosen">
          <FileHeader
            :caption="
              (() => {
                if (isFileBig) return $t('uploader.file-is-big-caption');
                if (error) return $t('uploader.file-unknown-error-caption');
                return $t('uploader.file-chosen-caption');
              })()
            "
            :error="error"
            :file="file"
            @reset="reset"
          />
          <EncryptButton
            v-model="encryptIntent"
            :active="encrypt"
            :disable="error"
          />
        </div>
      </template>
    </FilesDropArea>
    <div class="uploader-controls">
      <EncryptPasswordField
        v-if="encrypt && !progress && !cloudFile"
        v-model="encryptPassword"
      />
      <q-btn
        v-if="!cloudFile"
        :disable="
          !file ||
          error ||
          (encryptIntent && !encryptPassword.length) ||
          !!progress
        "
        :label="
          progress
            ? $t('uploader.upload-button-loading')
            : $t('uploader.upload-button')
        "
        :padding="
          adaptiveValue(
            '12px 30px',
            '12px 30px',
            '12px 30px',
            '12px 30px',
            '10px 30px'
          )
        "
        :ripple="false"
        class="upload-button"
        flat
        no-caps
        @click.stop="handleUploading"
      />
      <q-btn
        v-else
        :label="$t('uploader.open-button')"
        :padding="
          adaptiveValue(
            '12px 30px',
            '12px 30px',
            '12px 30px',
            '12px 30px',
            '10px 30px'
          )
        "
        :ripple="false"
        class="open-button"
        flat
        no-caps
        @click="openCloudFile"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { adaptiveValue } from 'src/utils';
import { CloudFile, uploader } from 'src/uploader';
import ProgressBar from 'components/ProgressBar.vue';
import FilesDropArea from 'components/uploader/FilesDropArea.vue';
import FileHeader from 'components/uploader/FileHeader.vue';
import EncryptButton from 'components/uploader/EncryptButton.vue';
import UploadedFile from 'components/uploader/UploadedFile.vue';
import EncryptPasswordField from 'components/uploader/EncryptPasswordField.vue';

const progress = ref(0);

const file = ref<File>();
const cloudFile = ref<CloudFile>();

const isFileBig = computed(() => (file.value?.size ?? 0) > 100 * 1024 * 1024);
const uploadFailed = ref(false);
const error = computed(() => isFileBig.value || uploadFailed.value);

const encryptIntent = ref(false);
const encrypt = computed(() => encryptIntent.value && !error.value);
const encryptPassword = ref('');

function reset() {
  file.value = undefined;
  encryptIntent.value = false;
  encryptPassword.value = '';
  progress.value = 0;
}

async function handleUploading() {
  if (!file.value) return;
  try {
    cloudFile.value = await uploader.upload(
      file.value,
      encrypt.value ? encryptPassword.value : undefined,
      (percent) => {
        progress.value = percent;
      }
    );
  } catch (e) {
    uploadFailed.value = true;
  }
  reset();
}

function openCloudFile() {
  if (cloudFile.value) {
    window.open(cloudFile.value.url, '_blank');
  }
}

async function handleCloudFileDeleting() {
  if (cloudFile.value) await uploader.delete(cloudFile.value);
  cloudFile.value = undefined;
}
</script>

<style lang="scss" scoped>
@import 'src/css/app';

.uploader {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 332px;
  gap: 20px;
  @media (min-width: $breakpoint-sm-min),
  (min-width: $breakpoint-md-min) and (orientation: landscape) {
    width: 388px;
    gap: 18px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    width: 522px;
    gap: 24px;
  }
  @media (min-width: $breakpoint-lg-min) {
    width: 510px;
    gap: 22px;
  }
  @media (min-width: $breakpoint-xl-min) {
    width: 498px;
    gap: 24px;
  }
}

.drop-area-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;

  // FIXME: check
  padding: 21.5px 20px;
  @media (min-width: $breakpoint-sm-min),
  (min-width: $breakpoint-md-min) and (orientation: landscape) {
    padding: 20.5px 30px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    padding: 40px 30px;
  }
  @media (min-width: $breakpoint-lg-min) {
    padding: 40px 30px;
  }
  @media (min-width: $breakpoint-xl-min) {
    padding: 40px 30px 41px;
  }
}

.drop-area-content.default {
  justify-content: center;
  gap: 10px;
  @media (min-width: $breakpoint-sm-min),
  (min-width: $breakpoint-md-min) and (orientation: landscape) {
    gap: 8px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    gap: 10px;
  }
  @media (min-width: $breakpoint-lg-min) {
    gap: 10px;
  }
  @media (min-width: $breakpoint-xl-min) {
    gap: 10px;
  }
}

.drop-message,
.drop-hint {
  transition: color 0.2s ease-in-out;
}

.drop-message {
  color: #534963;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  font-size: 14px;
  letter-spacing: -0.28px;
  @media (min-width: $breakpoint-sm-min),
  (min-width: $breakpoint-md-min) and (orientation: landscape) {
    font-size: 11px;
    letter-spacing: -0.22px;
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

.drop-hint {
  color: #828cfc;
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
    font-size: 12px;
    letter-spacing: -0.24px;
  }
  @media (min-width: $breakpoint-lg-min) {
    font-size: 11px;
    letter-spacing: -0.22px;
  }
  @media (min-width: $breakpoint-xl-min) {
    font-size: 14px;
    letter-spacing: -0.28px;
  }
}

.uploader-controls {
  width: 100%;
  display: grid;

  gap: 14px;
  @media (min-width: $breakpoint-sm-min),
  (min-width: $breakpoint-md-min) and (orientation: landscape) {
    gap: 14px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    gap: 20px;
  }
  @media (min-width: $breakpoint-lg-min) {
    gap: 20px;
  }
  @media (min-width: $breakpoint-xl-min) {
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  }
}

.uploader-controls > * {
  margin: 0 auto;
}

.upload-button,
.open-button {
  background: #828cfc;
  color: #fff;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  font-size: 16px;
  letter-spacing: -0.32px;
  border-radius: 14px;
  width: 240px;
  height: auto;
  @media (min-width: $breakpoint-sm-min),
  (min-width: $breakpoint-md-min) and (orientation: landscape) {
    font-size: 13px;
    letter-spacing: -0.26px;
    border-radius: 12px;
    width: 252px;
    height: auto;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    font-size: 16px;
    letter-spacing: -0.32px;
    border-radius: 14px;
    width: 338px;
    height: 44px;
  }
  @media (min-width: $breakpoint-lg-min) {
    font-size: 15px;
    letter-spacing: -0.3px;
    border-radius: 14px;
    width: 338px;
    height: 44px;
  }
  @media (min-width: $breakpoint-xl-min) {
    font-size: 18px;
    letter-spacing: -0.36px;
    border-radius: 14px;
    width: 100%;
    height: auto;
  }
}

.upload-button:disabled {
  opacity: 1 !important;
  background: #e8e8e9;
  color: #bfc0c2;
}

.progress-bar {
  width: 276px;
  margin-bottom: 14.5px;
  @media (min-width: $breakpoint-sm-min),
  (min-width: $breakpoint-md-min) and (orientation: landscape) {
    width: 191px;
    margin-bottom: 12.5px;
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    width: 341px;
    margin-bottom: 16px;
  }
  @media (min-width: $breakpoint-lg-min) {
    width: 329px;
    margin-bottom: 16px;
  }
  @media (min-width: $breakpoint-xl-min) {
    width: 382px;
    margin-bottom: 18px;
  }
}
</style>
