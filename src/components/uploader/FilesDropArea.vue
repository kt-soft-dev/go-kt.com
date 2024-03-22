<template>
  <div
    :class="{
      'drag-active': isDragActive,
      'cursor-pointer': !disabled,
    }"
    class="drop-area"
    @click="pickFiles"
    @dragover.prevent="dragOver"
    @dragenter.prevent.stop="dragCounter++"
    @dragleave.prevent.stop="dragCounter--"
    @drop.prevent.stop="handleDrop"
  >
    <slot
      :onlyFilesError="onlyFilesError"
      :tooManyFilesError="tooManyFilesError"
    />

    <!-- Hide it inside -->
    <q-file
      ref="fileInput"
      :max-files="maxFiles"
      :multiple="maxFiles > 1"
      accept="*/*"
      class="hidden"
      @update:model-value="(value) => $emit('update:modelValue', value)"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import { QFile, QFileProps } from 'quasar';

type ValidDragEvent = DragEvent & { dataTransfer: DataTransfer };

export type FileDropAreaProps = Pick<QFileProps, 'modelValue' | 'maxFiles'>;

const props = withDefaults(defineProps<FileDropAreaProps>(), {
  modelValue: null,
  maxFiles: 1,
});

const emit = defineEmits(['update:modelValue']);

const disabled = computed(() => {
  if (props.modelValue instanceof FileList || Array.isArray(props.modelValue))
    return !!props.modelValue.length;
  return !!props.modelValue;
}); // TODO: took out this logic

const fileInput = ref<QFile>();

const dragCounter = ref(0);
const isDragActive = computed(() => dragCounter.value > 0 && !disabled.value);

const onlyFilesError = ref(false);
const tooManyFilesError = ref(false);

watch(isDragActive, (active) => {
  if (!active) {
    onlyFilesError.value = false;
    tooManyFilesError.value = false;
  }
});

const error = computed(() => onlyFilesError.value || tooManyFilesError.value);

function checkErrors(event: ValidDragEvent): boolean {
  onlyFilesError.value = Array.from(event.dataTransfer.items).some(
    (item) => item.kind !== 'file'
  );
  tooManyFilesError.value = event.dataTransfer.items.length > props.maxFiles;
  return error.value;
}

function handleDrop(event: ValidDragEvent) {
  dragCounter.value = 0;
  if (!checkErrors(event)) emit('update:modelValue', event.dataTransfer.files);
}

function dragOver(event: ValidDragEvent) {
  checkErrors(event);
  event.dataTransfer.dropEffect = error.value ? 'none' : 'copy';
}

function pickFiles(event: Event) {
  if (!disabled.value) fileInput?.value?.pickFiles(event);
}

defineExpose({
  pickFiles,
});
</script>

<style lang="scss" scoped>
@import 'src/css/app';

.drop-area {
  transition: background-color 0.2s ease-in-out;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #e9ebfe;

  &.drag-active {
    background-color: #d8dcff;
  }

  height: 130px;
  border-radius: 18px;
  background-image: url('/static/border-xs.svg');
  @media (min-width: $breakpoint-sm-min),
    (min-width: $breakpoint-md-min) and (orientation: landscape) {
    height: 120px;
    border-radius: 20px;
    background-image: url('/static/border-sm.svg');
  }
  @media (min-width: $breakpoint-md-min) and (orientation: portrait) {
    height: 190px;
    border-radius: 26px;
    background-image: url('/static/border-md.svg');
  }
  @media (min-width: $breakpoint-lg-min) {
    height: 186px;
    border-radius: 26px;
    background-image: url('/static/border-lg.svg');
  }
  @media (min-width: $breakpoint-xl-min) {
    height: 186px;
    border-radius: 30px;
    background-image: url('/static/border-xl.svg');
  }
}
</style>
