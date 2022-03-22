<script setup lang="ts">
import { ref, reactive, onMounted, onUpdated, onBeforeUnmount } from 'vue';
import Glide from '@glidejs/glide'
import "@glidejs/glide/dist/css/glide.core.css";
interface iGride {
  gap: number,
  perView: number,
  type: "carousel",
  hideNav: boolean
}
const props = withDefaults(defineProps<iGride>(), {
  gap: 2,
  perView: 1,
  type: "carousel",
  breakpoints: {
    0: {
      perView: 1
    },
  },
  hideNav: false,
  draggable: true
})

const carouselImages = ref(null)
const state = reactive({
  total: 0,
  mountTimeOut: -1,
  resizeTimeOut: -1,
  selfWidth: 0,
  glideCarousel: null
})

function initGlide() {
  state.selfWidth = carouselImages.value.offsetWidth
  state.glideCarousel = new Glide(carouselImages.value, {
    gap: 2,
    perView: 1,
    type: "carousel",
    breakpoints: {
      0: {
        perView: 1
      },
    },
    hideNav: false,
  })
  state.glideCarousel.mount()
  state.total = state.glideCarousel._c.Html.slides.length
  state.glideCarousel.on('resize', onResize)
  state.mountTimeOut = setTimeout(() => {
    let _event = new Event('resize', { bubbles: false, cancelable: false })
    window.dispatchEvent(_event)
  }, 500);
}

function destroyGlide() {
  clearTimeout(state.resizeTimeOut);
  clearTimeout(state.mountTimeOut);
  if (state.glideCarousel) {
    state.glideCarousel.destroy();
  }
}

function onResize() {
  clearTimeout(state.resizeTimeOut);
  state.selfWidth = carouselImages.value.offsetWidth;
  state.resizeTimeOut = setTimeout(() => {
    if (carouselImages.value.offsetWidth !== state.selfWidth) {
      state.glideCarousel.update();
    }
    state.resizeTimeOut = -1;
  }, 500);
}

onMounted(() => initGlide())
onUpdated(() => {
  destroyGlide(),
    initGlide()
})

onBeforeUnmount(() => destroyGlide())
</script>

<template>
  <div class="glide" ref="carouselImages">
    <div data-glide-el="track" class="glide__track">
      <div class="glide__slides">
        <slot name="body"></slot>
      </div>
    </div>
    <div class="arrow-controls" data-glide-el="controls">
      <button class="glide__arrow glide__arrow--left left-arrow btn btn-link text-gray-400" data-glide-dir="<">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button class="glide__arrow glide__arrow--right right-arrow btn btn-link text-gray-400" data-glide-dir=">">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style>
.arrow-controls {
  @apply w-full absolute flex justify-between -mt-40;
}

.btn-link {
  @apply border border-transparent p-0.5 text-base;
}

.btn-link:active {
  @apply rounded-full border bg-gray-100 p-0.5;
}

.glide {
  /* @apply w-full h-full sm:max-w-lg md:max-w-md lg:max-w-lg md:ml-auto md:mr-auto; */
  @apply w-full h-full md:ml-auto md:mr-auto;

}

.glide__slides {
  @apply h-[100%] sm:h-[17rem];
}
</style>