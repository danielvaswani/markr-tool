<template>

  <!-- <TitleAsset  :name="$props.name"></TitleAsset> -->

  <SubtitleAsset v-if="$props.type === 'text' && $props.content.variant === 'subtitle' "></SubtitleAsset>

  <ParagraphAsset v-if="$props.type === 'text' && $props.content.variant === 'paragraph' "></ParagraphAsset>

  <ImageAsset v-if="$props.type === 'image' && $props.content.variant === 'regular' "></ImageAsset>

  <BigImageAsset v-if="$props.type === 'image' && $props.content.variant === 'big' "></BigImageAsset>

  <BannerImageAsset v-if="$props.type === 'image' && $props.content.variant === 'banner' "></BannerImageAsset>

  <EditButton></EditButton>

</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import TitleAsset from "./TitleAsset.vue";
import ParagraphAsset from "./ParagraphAsset.vue";
import ImageAsset from "./ImageAsset.vue";
import BigImageAsset from "./BigImageAsset.vue";
import BannerImageAsset from "./BannerImageAsset.vue";
import ColorPalette from "./ColorPalette.vue";
import SubtitleAsset from "./SubtitleAsset.vue";
import EditButton from "./EditButton.vue";
import VideoAsset from "./VideoAsset.vue";


const store = useStore();

const props = defineProps({
  name: String,
  content: Object,
  type: String
})

</script>

<style scoped>

</style>