<script lang="ts">
import { h, PropType } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import { defineComponent, computed } from 'vue';
import { RouterLink } from 'vue-router'

type VButtonColor = 'primary'|
'success'|
'danger'|
'warning'|
'info'|
'white'|
'dark'

type VButtonSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export default defineComponent({
  props: {
    to: {
      type: [Object, String] as PropType<RouteLocationRaw>,
      default: undefined,
    },
    href: {
      type: String,
      default: undefined,
    },
    color: {
      type: String as PropType<VButtonColor>,
      default: undefined,
      validator: (value: VButtonColor) => {
        // The value must match one of these strings
        if (
          [
            undefined,
            'primary',
            'success',
            'danger',
            'warning',
            'info',
            'white',
            'dark'
          ].indexOf(value) === -1
        ) {
          console.warn(
            `VButton: invalid "${value}" color. Should be primary, info, success, warning, danger, dark, light, white or undefined`
          )
          return false
        }

        return true
      },
    },
    size: {
      type: String as PropType<VButtonSize>,
      default: 'md'
    },
    bold: {
      type: Boolean,
      default: false,
    },
    raised: {
      type: Boolean,
      default: false,
    },
    elevated: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { slots, attrs }) {
    const classes = computed(() => {
      const primary = `bg-blue-600 hover:bg-blue-500 focus:bg-blue-600 text-white outline-none focus:outline-none ${props.raised ? 'shadow-lg shadow-blue-500/50' : ''} ${props.disabled ? 'disabled:bg-blue-400' : ''}`
      const success = `bg-green-500 hover:bg-green-600 focus:bg-green-700 text-white  outline-none focus:outline-none ${props.raised ? 'shadow-lg shadow-green-500/50' : ''} ${props.disabled ? 'disabled:bg-green-400' : ''}`
      const danger = `bg-red-500 hover:gr-red-600 focus:bg-red-700 outline-none focus:outline-none ${props.raised ? 'shadow-lg shadow-red-500/50' : ''} ${props.disabled ? 'disabled:bg-red-400' : ''}`
      const warning = `bg-yellow-500 hover:bg-yellow-600 focus:bg-yellow-700 text-white outline-none focus:outline-none ${props.raised ? 'shadow-lg shadow-yellow-500/50' : ''} ${props.disabled ? 'disabled:bg-yellow-400' : ''}`
      const info = `bg-indigo-600 hover:bg-indigo-700 focus:bg-indigo-700 text-white outline-none focus:outline-none ${props.raised ? 'shadow-lg shadow-indigo-500/50' : ''} ${props.disabled ? 'disabled:bg-indigo-400' : ''}`
      const white = `bg-white-500 text-black`
      const dark = `bg-black text-white`
      const classButton = [ 
        'inline-flex items-center font-medium transition ease-in-out justify-center rounded-full',
        props.size === 'sm' && 'p-1 text-xs',
        props.size === 'md' && 'p-1.5 text-sm',
        props.size === 'lg' && 'p-2 text-sm',
        props.size === 'xl' && 'p-2 text-base',
        props.size === '2xl' && 'p-3 text-base',
        props.elevated && 'delay-75 hover:-translate-y-1 hover:scale-110 duration-300',
        props.disabled && 'disabled:cursor-not-allowed transform-none disabled:cursor-not-allowed',
        props.color === 'success' && success,
        props.color === 'primary' && primary,
        props.color === 'danger' && danger,
        props.color === 'warning' && warning,
        props.color === 'info' && info,
        props.color === 'white' && white,
        props.color === 'dark' && dark
      ]
      const defaultClasses = (attrs?.class ?? []) as string[]
      return [
        ...defaultClasses,
        ...classButton
      ]
    })

    const getChildrens = () => {
      const childrens = []

      childrens.push(h('span', slots.default?.()))
      return childrens
    }

    return () => {
      if(props.to) {
        return h(
          RouterLink,
          {
            ...attrs,
            'aria-hidden': true,
            to: props.to,
            class: classes.value,
          },
          {
            default: getChildrens,
          }
        )
      } else if (props.href) {
        return h(
          'a',
          {
            ...attrs,
            'aria-hidden': true,
            href: props.href,
            class: classes.value,
          },
          {
            default: getChildrens,
          }
        )
      }

      return h(
        'button',
        {
          type: 'button',
          ...attrs,
          'aria-hidden': true,
          disabled: props.disabled,
          class: classes.value,
        },
        {
          default: getChildrens,
        }
      )
    }
  }
})
</script>