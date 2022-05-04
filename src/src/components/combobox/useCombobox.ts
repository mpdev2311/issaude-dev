import { reactive, Ref, ref, watchEffect, nextTick } from "vue";
import { onClickOutside, useActiveElement } from "@vueuse/core";

export default function useCombobox(
  container: Ref<HTMLElement | null>,
  inputRef: Ref<HTMLInputElement | null>
) {
  const activeElement = useActiveElement();
  const isOpen = ref(false);
  const selected = ref(-1);

  onClickOutside(container, () => {
    isOpen.value = false;
  });

  function arrowDown() {
    const optionsList = container.value?.querySelectorAll(
      "#options-combobox > li"
    );
    const lengthOptions =
      container.value?.querySelectorAll("#options-combobox > li").length || 0;
    if (optionsList && lengthOptions > 0) {
      if (selected.value == -1) {
        selected.value = 0;
        //@ts-ignore
        optionsList[selected.value].focus();
        return;
      }

      if (
        selected.value + 1 <= lengthOptions &&
        optionsList[selected.value + 1] != undefined
      ) {
        selected.value++;
        //@ts-ignore
        optionsList[selected.value].focus();
        return;
      }
    }
  }

  function arrowUp() {
    const optionsList = container.value?.querySelectorAll(
      "#options-combobox > li"
    );
    const lengthOptions =
      container.value?.querySelectorAll("#options-combobox > li").length || 0;
    if (selected.value - 1 < 0) {
      selected.value = -1;
      inputRef.value?.focus();
      return;
    }
    selected.value--;
    if (optionsList) {
      //@ts-ignore
      optionsList[selected.value].focus();
      return;
    }
  }

  const openCombobox = () => {
    isOpen.value = true;
    nextTick(() => inputRef.value?.focus());
  };

  const closeCombobox = () => {
    isOpen.value = false;
  };

  const toggleCombobox = () => {
    isOpen.value = !isOpen.value;
  };

  watchEffect(() => {
    if (activeElement.value?.id == "input_combobox") {
      selected.value = -1;
    }
    if (isOpen && activeElement.value?.id == "button-input") {
      inputRef.value?.focus();
    }
    if (!isOpen.value) {
      container.value
        ?.querySelector("#options-combobox")
        ?.classList.add("hidden");
    } else {
      container.value
        ?.querySelector("#options-combobox")
        ?.classList.remove("hidden");
    }
  });

  return reactive({
    isOpen,
    openCombobox,
    closeCombobox,
    toggleCombobox,
    arrowDown,
    arrowUp,
  });
}
