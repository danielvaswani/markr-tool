<template>
  <!-- <TitleAsset  :name="$props.name"></TitleAsset> -->

  <SubtitleAsset v-if="$props.type === 'text' && $props.content.variant === 'subtitle'" :value="$props.content.value">
  </SubtitleAsset>

  <ParagraphAsset v-if="$props.type === 'text' && $props.content.variant === 'paragraph'" :value="$props.content.value">
  </ParagraphAsset>

  <ImageAsset v-if="$props.type === 'image' && $props.content.variant === 'regular'" :url="$props.content.url">
  </ImageAsset>

  <BigImageAsset v-if="$props.type === 'image' && $props.content.variant === 'big'" :url="$props.content.url">
  </BigImageAsset>

  <BannerImageAsset v-if="$props.type === 'image' && $props.content.variant === 'banner'" :url="$props.content.url">
  </BannerImageAsset>

  <ColorPalette v-if="$props.type === 'color'" :colors="$props.content.colors">
  </ColorPalette>
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
  type: String,
});


</script>

<style scoped></style>
