import { reactive, toRefs } from "vue";

const state = reactive({
  isOpen: true,
});

export function useSidebar() {
  return {
    ...toRefs(state),
  };
}