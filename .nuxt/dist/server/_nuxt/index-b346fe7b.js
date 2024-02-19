import __nuxt_component_0$4 from "./Icon-0a5d12be.js";
import { _ as _export_sfc, a as useAppConfig, m as mergeConfig, b as appConfig, u as useHead } from "../server.mjs";
import { defineComponent, computed, mergeProps, useSSRContext, createVNode, resolveDynamicComponent, withCtx, renderSlot, useAttrs, toValue, getCurrentInstance, inject, onUnmounted, toRef, openBlock, createBlock, createCommentVNode, toDisplayString, ref, toRefs } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderVNode, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as __nuxt_component_0$5 } from "./nuxt-link-b2e5ab4b.js";
import { isEqual } from "ohash";
import { twMerge, twJoin } from "tailwind-merge";
import { useScroll, useElementSize, useResizeObserver } from "@vueuse/core";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "./index-7a71a440.js";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "defu";
import "klona";
import "devalue";
function omit(object, keysToOmit) {
  const result = { ...object };
  for (const key of keysToOmit) {
    delete result[key];
  }
  return result;
}
function get(object, path, defaultValue) {
  if (typeof path === "string") {
    path = path.split(".").map((key) => {
      const numKey = Number(key);
      return isNaN(numKey) ? key : numKey;
    });
  }
  let result = object;
  for (const key of path) {
    if (result === void 0 || result === null) {
      return defaultValue;
    }
    result = result[key];
  }
  return result !== void 0 ? result : defaultValue;
}
const nuxtLinkProps = {
  to: {
    type: [String, Object],
    default: void 0
  },
  href: {
    type: [String, Object],
    default: void 0
  },
  // Attributes
  target: {
    type: String,
    default: void 0
  },
  rel: {
    type: String,
    default: void 0
  },
  noRel: {
    type: Boolean,
    default: void 0
  },
  // Prefetching
  prefetch: {
    type: Boolean,
    default: void 0
  },
  noPrefetch: {
    type: Boolean,
    default: void 0
  },
  // Styling
  activeClass: {
    type: String,
    default: void 0
  },
  exactActiveClass: {
    type: String,
    default: void 0
  },
  prefetchedClass: {
    type: String,
    default: void 0
  },
  // Vue Router's `<RouterLink>` additional props
  replace: {
    type: Boolean,
    default: void 0
  },
  ariaCurrentValue: {
    type: String,
    default: void 0
  },
  // Edge cases handling
  external: {
    type: Boolean,
    default: void 0
  }
};
const getNuxtLinkProps = (props) => {
  const keys = Object.keys(nuxtLinkProps);
  return keys.reduce((acc, key) => {
    if (props[key] !== void 0) {
      acc[key] = props[key];
    }
    return acc;
  }, {});
};
const _sfc_main$6 = defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    dynamic: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const appConfig2 = useAppConfig();
    const dynamic = computed(() => {
      var _a, _b;
      return props.dynamic || ((_b = (_a = appConfig2.ui) == null ? void 0 : _a.icons) == null ? void 0 : _b.dynamic);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      dynamic
    };
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$4;
  if (_ctx.dynamic) {
    _push(ssrRenderComponent(_component_Icon, mergeProps({ name: _ctx.name }, _attrs), null, _parent));
  } else {
    _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.name }, _attrs))}></span>`);
  }
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Icon.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_UIcon = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-screen w-100 bg-no-repeat bg-cover bg-bottom bg-[url('../assets/images/background.jpg')]" }, _attrs))}><div class="z-10 absolute w-full h-full flex justify-center items-center"><div class="text-center w-1/2"><h1 class="text-9xl font-montserrat mb-10 text-white">Góð vínkaup</h1><p class="mt-6 text-5xl tracking-wider font-teko text-white"> Hjálpar þér að gera betri kaup </p><div class="mt-10 flex items-center justify-center gap-x-6"><button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-montserrat font-medium text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Vín</button><button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-montserrat font-medium text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Bjór</button></div></div><div class="absolute text-[#ACAC9A] flex bottom-5 justify-center items-center grid grid-cols-1 gap-3 text-center"><p class="text-xl md:text-2xl">Nokkur góð kaup</p>`);
  _push(ssrRenderComponent(_component_UIcon, {
    name: "i-heroicons-arrow-small-down-solid",
    class: "text-7xl mx-auto"
  }, null, _parent));
  _push(`</div></div><div class="z-2 absolute w-full h-full bg-black opacity-50"></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/PageHero.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = defineComponent({
  inheritAttrs: false,
  props: {
    ...nuxtLinkProps,
    as: {
      type: String,
      default: "button"
    },
    type: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean,
      default: null
    },
    active: {
      type: Boolean,
      default: void 0
    },
    exact: {
      type: Boolean,
      default: false
    },
    exactQuery: {
      type: Boolean,
      default: false
    },
    exactHash: {
      type: Boolean,
      default: false
    },
    inactiveClass: {
      type: String,
      default: void 0
    }
  },
  setup(props) {
    function resolveLinkClass(route, $route, { isActive, isExactActive }) {
      if (props.exactQuery && !isEqual(route.query, $route.query)) {
        return props.inactiveClass;
      }
      if (props.exactHash && route.hash !== $route.hash) {
        return props.inactiveClass;
      }
      if (props.exact && isExactActive) {
        return props.activeClass;
      }
      if (!props.exact && isActive) {
        return props.activeClass;
      }
      return props.inactiveClass;
    }
    return {
      resolveLinkClass
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$5;
  if (!_ctx.to) {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({
      type: _ctx.type,
      disabled: _ctx.disabled
    }, _ctx.$attrs, {
      class: _ctx.active ? _ctx.activeClass : _ctx.inactiveClass
    }, _attrs), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "default", { isActive: _ctx.active }, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "default", { isActive: _ctx.active })
          ];
        }
      }),
      _: 3
    }), _parent);
  } else {
    _push(ssrRenderComponent(_component_NuxtLink, mergeProps(_ctx.$props, { custom: "" }, _attrs), {
      default: withCtx(({ route, href, target, rel, navigate, isActive, isExactActive, isExternal }, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<a${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
            href: !_ctx.disabled ? href : void 0,
            "aria-disabled": _ctx.disabled ? "true" : void 0,
            role: _ctx.disabled ? "link" : void 0,
            rel,
            target,
            class: _ctx.active !== void 0 ? _ctx.active ? _ctx.activeClass : _ctx.inactiveClass : _ctx.resolveLinkClass(route, _ctx.$route, { isActive, isExactActive })
          }))}${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "default", { isActive: _ctx.active !== void 0 ? _ctx.active : _ctx.exact ? isExactActive : isActive }, null, _push2, _parent2, _scopeId);
          _push2(`</a>`);
        } else {
          return [
            createVNode("a", mergeProps(_ctx.$attrs, {
              href: !_ctx.disabled ? href : void 0,
              "aria-disabled": _ctx.disabled ? "true" : void 0,
              role: _ctx.disabled ? "link" : void 0,
              rel,
              target,
              class: _ctx.active !== void 0 ? _ctx.active ? _ctx.activeClass : _ctx.inactiveClass : _ctx.resolveLinkClass(route, _ctx.$route, { isActive, isExactActive }),
              onClick: (e) => !isExternal && navigate(e)
            }), [
              renderSlot(_ctx.$slots, "default", { isActive: _ctx.active !== void 0 ? _ctx.active : _ctx.exact ? isExactActive : isActive })
            ], 16, ["href", "aria-disabled", "role", "rel", "target", "onClick"])
          ];
        }
      }),
      _: 3
    }, _parent));
  }
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Link.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const useUI = (key, $ui, $config, $wrapperClass, withAppConfig = false) => {
  const $attrs = useAttrs();
  const appConfig2 = useAppConfig();
  const ui = computed(() => {
    var _a;
    const _ui = toValue($ui);
    const _config = toValue($config);
    const _wrapperClass = toValue($wrapperClass);
    return mergeConfig(
      (_ui == null ? void 0 : _ui.strategy) || ((_a = appConfig2.ui) == null ? void 0 : _a.strategy),
      _wrapperClass ? { wrapper: _wrapperClass } : {},
      _ui || {},
      withAppConfig ? get(appConfig2.ui, key, {}) : {},
      _config || {}
    );
  });
  const attrs = computed(() => omit($attrs, ["class"]));
  return {
    ui,
    attrs
  };
};
function useInjectButtonGroup({ ui, props }) {
  const instance = getCurrentInstance();
  let parent = instance.parent;
  let groupContext;
  while (parent && !groupContext) {
    if (parent.type.name === "ButtonGroup") {
      groupContext = inject(`group-${parent.uid}`);
      break;
    }
    parent = parent.parent;
  }
  const positionInGroup = computed(() => groupContext == null ? void 0 : groupContext.value.children.indexOf(instance));
  onUnmounted(() => {
    groupContext == null ? void 0 : groupContext.value.unregister(instance);
  });
  return {
    size: computed(() => (groupContext == null ? void 0 : groupContext.value.size) || props.size),
    rounded: computed(() => {
      if (!groupContext || positionInGroup.value === -1)
        return ui.value.rounded;
      if (groupContext.value.children.length === 1)
        return groupContext.value.ui.rounded;
      if (positionInGroup.value === 0)
        return groupContext.value.rounded.start;
      if (positionInGroup.value === groupContext.value.children.length - 1)
        return groupContext.value.rounded.end;
      return "rounded-none";
    })
  };
}
const button = {
  base: "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0",
  font: "font-medium",
  rounded: "rounded-md",
  truncate: "text-left break-all line-clamp-1",
  block: "w-full flex justify-center items-center",
  inline: "inline-flex items-center",
  size: {
    "2xs": "text-xs",
    xs: "text-xs",
    sm: "text-sm",
    md: "text-sm",
    lg: "text-sm",
    xl: "text-base"
  },
  gap: {
    "2xs": "gap-x-1",
    xs: "gap-x-1.5",
    sm: "gap-x-1.5",
    md: "gap-x-2",
    lg: "gap-x-2.5",
    xl: "gap-x-2.5"
  },
  padding: {
    "2xs": "px-2 py-1",
    xs: "px-2.5 py-1.5",
    sm: "px-2.5 py-1.5",
    md: "px-3 py-2",
    lg: "px-3.5 py-2.5",
    xl: "px-3.5 py-2.5"
  },
  square: {
    "2xs": "p-1",
    xs: "p-1.5",
    sm: "p-1.5",
    md: "p-2",
    lg: "p-2.5",
    xl: "p-2.5"
  },
  color: {
    white: {
      solid: "shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      ghost: "text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    },
    gray: {
      solid: "shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      ghost: "text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      link: "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    },
    black: {
      solid: "shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      link: "text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    }
  },
  variant: {
    solid: "shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",
    outline: "ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    soft: "text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    ghost: "text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    link: "text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"
  },
  icon: {
    base: "flex-shrink-0",
    loading: "animate-spin",
    size: {
      "2xs": "h-4 w-4",
      xs: "h-4 w-4",
      sm: "h-5 w-5",
      md: "h-5 w-5",
      lg: "h-5 w-5",
      xl: "h-6 w-6"
    }
  },
  default: {
    size: "sm",
    variant: "solid",
    color: "primary",
    loadingIcon: "i-heroicons-arrow-path-20-solid"
  }
};
const arrow = {
  base: "invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",
  ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",
  rounded: "before:rounded-sm",
  background: "before:bg-gray-200 dark:before:bg-gray-800",
  shadow: "before:shadow",
  // eslint-disable-next-line quotes
  placement: `group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1`
};
const carousel = {
  wrapper: "relative",
  container: "relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth",
  item: "flex flex-none snap-center",
  arrows: {
    wrapper: "flex items-center justify-between"
  },
  indicators: {
    wrapper: "absolute flex items-center justify-center gap-3 bottom-4 inset-x-0",
    base: "rounded-full h-3 w-3",
    active: "bg-primary-500 dark:bg-primary-400",
    inactive: "bg-gray-100 dark:bg-gray-800 mix-blend-overlay"
  },
  default: {
    prevButton: {
      color: "black",
      class: "rtl:[&_span:first-child]:rotate-180 absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full",
      icon: "i-heroicons-chevron-left-20-solid"
    },
    nextButton: {
      color: "black",
      class: "rtl:[&_span:last-child]:rotate-180 absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full",
      icon: "i-heroicons-chevron-right-20-solid "
    }
  }
};
const inputMenu = {
  container: "z-20 group",
  trigger: "inline-flex w-full",
  width: "w-full",
  height: "max-h-60",
  base: "relative focus:outline-none overflow-y-auto scroll-py-1",
  background: "bg-white dark:bg-gray-800",
  shadow: "shadow-lg",
  rounded: "rounded-md",
  padding: "p-1",
  ring: "ring-1 ring-gray-200 dark:ring-gray-700",
  empty: "text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",
  option: {
    base: "cursor-default select-none relative flex items-center justify-between gap-1",
    rounded: "rounded-md",
    padding: "px-1.5 py-1.5",
    size: "text-sm",
    color: "text-gray-900 dark:text-white",
    container: "flex items-center gap-1.5 min-w-0",
    active: "bg-gray-100 dark:bg-gray-900",
    inactive: "",
    selected: "pe-7",
    disabled: "cursor-not-allowed opacity-50",
    empty: "text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",
    icon: {
      base: "flex-shrink-0 h-5 w-5",
      active: "text-gray-900 dark:text-white",
      inactive: "text-gray-400 dark:text-gray-500"
    },
    selectedIcon: {
      wrapper: "absolute inset-y-0 end-0 flex items-center",
      padding: "pe-2",
      base: "h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"
    },
    avatar: {
      base: "flex-shrink-0",
      size: "2xs"
    },
    chip: {
      base: "flex-shrink-0 w-2 h-2 mx-1 rounded-full"
    }
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    leaveActiveClass: "transition ease-in duration-100",
    leaveFromClass: "opacity-100",
    leaveToClass: "opacity-0"
  },
  popper: {
    placement: "bottom-end"
  },
  default: {
    selectedIcon: "i-heroicons-check-20-solid",
    trailingIcon: "i-heroicons-chevron-down-20-solid"
  },
  arrow: {
    ...arrow,
    ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",
    background: "before:bg-white dark:before:bg-gray-700"
  }
};
({
  ...inputMenu,
  select: "inline-flex items-center text-left cursor-default",
  input: "block w-[calc(100%+0.5rem)] focus:ring-transparent text-sm px-3 py-1.5 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border-0 border-b border-gray-200 dark:border-gray-700 sticky -top-1 -mt-1 mb-1 -mx-1 z-10 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none",
  required: "absolute inset-0 w-px opacity-0 cursor-default",
  label: "block truncate",
  option: {
    ...inputMenu.option,
    create: "block truncate"
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    leaveActiveClass: "transition ease-in duration-100",
    leaveFromClass: "opacity-100",
    leaveToClass: "opacity-0"
  },
  popper: {
    placement: "bottom-end"
  },
  default: {
    selectedIcon: "i-heroicons-check-20-solid",
    clearSearchOnClose: false,
    showCreateOptionWhen: "empty"
  },
  arrow: {
    ...arrow,
    ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",
    background: "before:bg-white dark:before:bg-gray-700"
  }
});
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.button, button);
const _sfc_main$3 = defineComponent({
  components: {
    UIcon: __nuxt_component_1,
    ULink: __nuxt_component_0$2
  },
  inheritAttrs: false,
  props: {
    ...nuxtLinkProps,
    type: {
      type: String,
      default: "button"
    },
    block: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: () => config$1.default.size,
      validator(value) {
        return Object.keys(config$1.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$1.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config$1.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config$1.default.variant,
      validator(value) {
        return [
          ...Object.keys(config$1.variant),
          ...Object.values(config$1.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config$1.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: null
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    truncate: {
      type: Boolean,
      default: false
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { slots }) {
    const { ui, attrs } = useUI("button", toRef(props, "ui"), config$1);
    const { size, rounded } = useInjectButtonGroup({ ui, props });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const isSquare = computed(() => props.square || !slots.default && !props.label);
    const buttonClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[props.color]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.font,
        rounded.value,
        ui.value.size[size.value],
        ui.value.gap[size.value],
        props.padded && ui.value[isSquare.value ? "square" : "padding"][size.value],
        variant == null ? void 0 : variant.replaceAll("{color}", props.color),
        props.block ? ui.value.block : ui.value.inline
      ), props.class);
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[size.value],
        props.loading && ui.value.icon.loading
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && ui.value.icon.loading
      );
    });
    const linkProps = computed(() => getNuxtLinkProps(props));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isLeading,
      isTrailing,
      isSquare,
      buttonClass,
      leadingIconName,
      trailingIconName,
      leadingIconClass,
      trailingIconClass,
      linkProps
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ULink = __nuxt_component_0$2;
  const _component_UIcon = __nuxt_component_1;
  _push(ssrRenderComponent(_component_ULink, mergeProps({
    type: _ctx.type,
    disabled: _ctx.disabled || _ctx.loading,
    class: _ctx.buttonClass
  }, { ..._ctx.linkProps, ..._ctx.attrs }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "leading", {
          disabled: _ctx.disabled,
          loading: _ctx.loading
        }, () => {
          if (_ctx.isLeading && _ctx.leadingIconName) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: _ctx.leadingIconName,
              class: _ctx.leadingIconClass,
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          if (_ctx.label) {
            _push2(`<span class="${ssrRenderClass([_ctx.truncate ? _ctx.ui.truncate : ""])}"${_scopeId}>${ssrInterpolate(_ctx.label)}</span>`);
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
        ssrRenderSlot(_ctx.$slots, "trailing", {
          disabled: _ctx.disabled,
          loading: _ctx.loading
        }, () => {
          if (_ctx.isTrailing && _ctx.trailingIconName) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: _ctx.trailingIconName,
              class: _ctx.trailingIconClass,
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "leading", {
            disabled: _ctx.disabled,
            loading: _ctx.loading
          }, () => [
            _ctx.isLeading && _ctx.leadingIconName ? (openBlock(), createBlock(_component_UIcon, {
              key: 0,
              name: _ctx.leadingIconName,
              class: _ctx.leadingIconClass,
              "aria-hidden": "true"
            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
          ]),
          renderSlot(_ctx.$slots, "default", {}, () => [
            _ctx.label ? (openBlock(), createBlock("span", {
              key: 0,
              class: [_ctx.truncate ? _ctx.ui.truncate : ""]
            }, toDisplayString(_ctx.label), 3)) : createCommentVNode("", true)
          ]),
          renderSlot(_ctx.$slots, "trailing", {
            disabled: _ctx.disabled,
            loading: _ctx.loading
          }, () => [
            _ctx.isTrailing && _ctx.trailingIconName ? (openBlock(), createBlock(_component_UIcon, {
              key: 0,
              name: _ctx.trailingIconName,
              class: _ctx.trailingIconClass,
              "aria-hidden": "true"
            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const useCarouselScroll = (el) => {
  const x = ref(0);
  function onMouseDown(e) {
    el.value.style.scrollSnapType = "none";
    el.value.style.scrollBehavior = "auto";
    x.value = e.pageX;
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  }
  function onMouseUp() {
    el.value.style.removeProperty("scroll-behavior");
    el.value.style.removeProperty("scroll-snap-type");
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  }
  function onMouseMove(e) {
    e.preventDefault();
    const delta = e.pageX - x.value;
    x.value = e.pageX;
    el.value.scrollBy(-delta, 0);
  }
  onUnmounted(() => {
    if (!el.value) {
      return;
    }
    el.value.removeEventListener("mousedown", onMouseDown);
  });
};
const Carousel_vue_vue_type_style_index_0_scoped_f5508169_lang = "";
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.carousel, carousel);
const _sfc_main$2 = defineComponent({
  components: {
    UButton: __nuxt_component_0$1
  },
  inheritAttrs: false,
  props: {
    items: {
      type: Array,
      default: () => []
    },
    arrows: {
      type: Boolean,
      default: false
    },
    indicators: {
      type: Boolean,
      default: false
    },
    prevButton: {
      type: Object,
      default: () => config.default.prevButton
    },
    nextButton: {
      type: Object,
      default: () => config.default.nextButton
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: void 0
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("carousel", toRef(props, "ui"), config, toRef(props, "class"));
    const carouselRef = ref();
    const itemWidth = ref(0);
    const { x, arrivedState } = useScroll(carouselRef, { behavior: "smooth" });
    const { width: carouselWidth } = useElementSize(carouselRef);
    const { left: isFirst, right: isLast } = toRefs(arrivedState);
    useCarouselScroll(carouselRef);
    useResizeObserver(carouselRef, (entries) => {
      var _a, _b;
      const [entry] = entries;
      itemWidth.value = ((_b = (_a = entry == null ? void 0 : entry.target) == null ? void 0 : _a.firstElementChild) == null ? void 0 : _b.clientWidth) || 0;
    });
    const currentIndex = computed(() => Math.round(x.value / itemWidth.value) + 1);
    const indicatorsCount = computed(() => {
      if (!itemWidth.value) {
        return 0;
      }
      return props.items.length - Math.round(carouselWidth.value / itemWidth.value) + 1;
    });
    function onClickNext() {
      x.value += itemWidth.value;
    }
    function onClickPrev() {
      x.value -= itemWidth.value;
    }
    function onClick(index) {
      x.value = (index - 1) * itemWidth.value;
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isFirst,
      isLast,
      carouselRef,
      indicatorsCount,
      currentIndex,
      onClickNext,
      onClickPrev,
      onClick,
      twMerge
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UButton = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))} data-v-f5508169><div class="${ssrRenderClass([_ctx.ui.container, "no-scrollbar"])}" data-v-f5508169><!--[-->`);
  ssrRenderList(_ctx.items, (item, index) => {
    _push(`<div class="${ssrRenderClass(_ctx.ui.item)}" data-v-f5508169>`);
    ssrRenderSlot(_ctx.$slots, "default", {
      item,
      index
    }, null, _push, _parent);
    _push(`</div>`);
  });
  _push(`<!--]--></div>`);
  if (_ctx.arrows) {
    _push(`<div class="${ssrRenderClass(_ctx.ui.arrows.wrapper)}" data-v-f5508169>`);
    ssrRenderSlot(_ctx.$slots, "prev", {
      onClick: _ctx.onClickPrev,
      disabled: _ctx.isFirst
    }, () => {
      var _a;
      if (_ctx.prevButton) {
        _push(ssrRenderComponent(_component_UButton, mergeProps({ disabled: _ctx.isFirst }, { ..._ctx.ui.default.prevButton, ..._ctx.prevButton }, {
          class: _ctx.twMerge(_ctx.ui.default.prevButton.class, (_a = _ctx.prevButton) == null ? void 0 : _a.class),
          "aria-label": "Prev",
          onClick: _ctx.onClickPrev
        }), null, _parent));
      } else {
        _push(`<!---->`);
      }
    }, _push, _parent);
    ssrRenderSlot(_ctx.$slots, "next", {
      onClick: _ctx.onClickNext,
      disabled: _ctx.isLast
    }, () => {
      var _a;
      if (_ctx.nextButton) {
        _push(ssrRenderComponent(_component_UButton, mergeProps({ disabled: _ctx.isLast }, { ..._ctx.ui.default.nextButton, ..._ctx.nextButton }, {
          class: _ctx.twMerge(_ctx.ui.default.nextButton.class, (_a = _ctx.nextButton) == null ? void 0 : _a.class),
          "aria-label": "Next",
          onClick: _ctx.onClickNext
        }), null, _parent));
      } else {
        _push(`<!---->`);
      }
    }, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.indicators) {
    _push(`<div class="${ssrRenderClass(_ctx.ui.indicators.wrapper)}" data-v-f5508169><!--[-->`);
    ssrRenderList(_ctx.indicatorsCount, (index) => {
      ssrRenderSlot(_ctx.$slots, "indicator", {
        onClick: _ctx.onClick,
        active: index === _ctx.currentIndex,
        index
      }, () => {
        _push(`<button type="button" class="${ssrRenderClass([
          _ctx.ui.indicators.base,
          index === _ctx.currentIndex ? _ctx.ui.indicators.active : _ctx.ui.indicators.inactive
        ])}"${ssrRenderAttr("aria-label", `set slide ${index}`)} data-v-f5508169></button>`);
      }, _push, _parent);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Carousel.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f5508169"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProductCarousel",
  __ssrInlineRender: true,
  props: {
    wines: Array
  },
  setup(__props) {
    const items1 = [{
      name: "Mucho mas tinto",
      img: "https://images.vivino.com/thumbs/nMRl6FutRX26zFRR1iqtqQ_pb_x600.png",
      description: "Ávaxtaríkt en samt djúprautt vín frá fjölskyldufyrirtækinu Félix Solís. Þetta vín nær jafnvægi á milli þess að vera þurrt og sætt en það má búast við því að finna keim af vanillu, eik og tóbaki auk þess hefur það sætan keim af rauðum kirsuberjum og plómu.",
      seller: "ÁTVR",
      price: "2.599 kr",
      grapes: "Shiraz/Syrah, Tempranillo",
      country: "Spánn"
    }, {
      name: "Marlborough sun",
      img: "https://images.vivino.com/thumbs/HUd1YqCsQjS657o-rAtXJg_pb_x600.png",
      description: "Þurrt og súrt hvítvín sem hefur ferskan ávaxtailm og bragð af sítrus, greip og ástaraldin.",
      seller: "ÁTVR",
      price: "2.799 kr",
      grapes: "Sauvignon Blanc",
      country: "Nýja-Sjáland"
    }, {
      name: "Torre Mora Scalunera Etna Rosato",
      img: "https://images.vivino.com/thumbs/SWRDzZF1RWyMhSPMdyAcMA_pb_x600.png",
      description: "Óvænt en kærkomin hlýja og krydd einkenna lyktina af þessu fölbleika rósavíni sem hefur bragð af sítrusávöxtum í bland við málm- og saltkeim. ",
      seller: "ÁTVR",
      price: "3.499 kr",
      grapes: "Nerello Mascalese",
      country: "Ítalía"
    }];
    const items2 = [{
      name: "Quattronotti Appassimento Negroamaro",
      img: "https://images.vivino.com/thumbs/Cu-HZ2XwR8evPLwpoR1kkA_pb_x600.png",
      description: "Dökkkirsuberjarautt, þétt og mikið vín frá Puglia á Ítalíu. Vínið 100% úr negroamaro þrúgunni sem gefur því ekki bara dökkan lit heldur bragð af brómberjum og þurrkuðu kryddi eins og blóðbergi.",
      seller: "ÁTVR",
      price: "3.716 kr",
      grapes: "Negroamaro 100%",
      country: "Ítalía"
    }, {
      name: "The Chocolate Block",
      img: "https://images.vivino.com/thumbs/jQ-ODF_jRpuqCxlRytxYLw_pb_x600.png",
      description: "Skemmtilegt vín frá Suður-Afríku með undirliggjandi kryddbragð og rifsberjakeim. Vín með mikið body og eftirbragð sem situr lengi eftir. Hentar vel með rauðu kjöti.",
      seller: "ÁTVR",
      price: "3.995 kr",
      grapes: "Syrah 73%, Grenache 11%, Cinsault 8%, Cabernet Sauvignon 7%, Viognier 1%",
      country: "Suður-Afríka"
    }, {
      name: "2011 Viña Bosconia Tinto Reserva",
      img: "https://images.vivino.com/thumbs/eDyHmY-EQcG28_Ezlpgq5A_pb_x600.png",
      description: "Þetta vín hefur yfir meira en áratug þróast yfir í djúpan rauðan lit með örlítilli appelsínugulu. Lyktin ber með sér ágenga ávexti og bragðið er þétt, mjúkt og fínt (þetta er ekki lýsing á rúminu mínu)",
      seller: "Sante",
      price: "4.900 kr",
      grapes: "Tempranillo 80%, Garnacha 15%, Mazuelo 3%, Graciano 2%.",
      country: "Spánn"
    }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCarousel = __nuxt_component_0;
      _push(`<!--[--><div class="h-screen w-100 flex justify-center items-center"><div class="max-w-4xl md:w-full font-teko"><div class="text-2xl font-montserrat mb-10 text-center text-[#FDA47E]"><h3>Verður að prófa</h3></div>`);
      _push(ssrRenderComponent(_component_UCarousel, {
        items: items1,
        ui: { item: "basis-full" },
        arrows: "",
        class: "bg-[#FFE7D4] rounded-lg p-[5%]"
      }, {
        default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", item.img)}${ssrRenderAttr("alt", item.name)} draggable="false" class="ml-[10%]"${_scopeId}><div class="grid grid-cols-1 gap-3 mx-[10%]"${_scopeId}><h2 class="text-5xl font-medium"${_scopeId}>${ssrInterpolate(item.name)}</h2><div${_scopeId}><div${_scopeId}><span class="text-md text-xl"${_scopeId}>${ssrInterpolate(item.seller)}</span></div><div${_scopeId}><span class="text-md text-lg text-[#7a7a7a]"${_scopeId}>SÖLUAÐILI</span></div></div><div${_scopeId}><div${_scopeId}><span class="text-md text-xl"${_scopeId}>${ssrInterpolate(item.price)}</span></div><div${_scopeId}><span class="text-md text-lg text-[#7a7a7a]"${_scopeId}>VERÐ</span></div></div><div${_scopeId}><div${_scopeId}><span class="text-md text-xl"${_scopeId}>Ítalía</span></div><div${_scopeId}><span class="text-md text-lg text-[#7a7a7a]"${_scopeId}>LAND</span></div></div><div${_scopeId}><div${_scopeId}><span class="text-md text-xl"${_scopeId}>4.2</span></div><div${_scopeId}><span class="text-md text-lg text-[#7a7a7a]"${_scopeId}>EINKUNN</span></div></div><div${_scopeId}><div${_scopeId}><span class="text-md text-xl"${_scopeId}>${ssrInterpolate(item.grapes)}</span></div><div${_scopeId}><span class="text-md text-lg text-[#7a7a7a]"${_scopeId}>ÞRÚGUR</span></div></div><div${_scopeId}><div${_scopeId}><span class="text-md text-xl"${_scopeId}>${ssrInterpolate(item.description)}</span></div><div${_scopeId}><span class="text-md text-lg text-[#7a7a7a]"${_scopeId}>LÝSING</span></div></div></div>`);
          } else {
            return [
              createVNode("img", {
                src: item.img,
                alt: item.name,
                draggable: "false",
                class: "ml-[10%]"
              }, null, 8, ["src", "alt"]),
              createVNode("div", { class: "grid grid-cols-1 gap-3 mx-[10%]" }, [
                createVNode("h2", { class: "text-5xl font-medium" }, toDisplayString(item.name), 1),
                createVNode("div", null, [
                  createVNode("div", null, [
                    createVNode("span", { class: "text-md text-xl" }, toDisplayString(item.seller), 1)
                  ]),
                  createVNode("div", null, [
                    createVNode("span", { class: "text-md text-lg text-[#7a7a7a]" }, "SÖLUAÐILI")
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", null, [
                    createVNode("span", { class: "text-md text-xl" }, toDisplayString(item.price), 1)
                  ]),
                  createVNode("div", null, [
                    createVNode("span", { class: "text-md text-lg text-[#7a7a7a]" }, "VERÐ")
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", null, [
                    createVNode("span", { class: "text-md text-xl" }, "Ítalía")
                  ]),
                  createVNode("div", null, [
                    createVNode("span", { class: "text-md text-lg text-[#7a7a7a]" }, "LAND")
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", null, [
                    createVNode("span", { class: "text-md text-xl" }, "4.2")
                  ]),
                  createVNode("div", null, [
                    createVNode("span", { class: "text-md text-lg text-[#7a7a7a]" }, "EINKUNN")
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", null, [
                    createVNode("span", { class: "text-md text-xl" }, toDisplayString(item.grapes), 1)
                  ]),
                  createVNode("div", null, [
                    createVNode("span", { class: "text-md text-lg text-[#7a7a7a]" }, "ÞRÚGUR")
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", null, [
                    createVNode("span", { class: "text-md text-xl" }, toDisplayString(item.description), 1)
                  ]),
                  createVNode("div", null, [
                    createVNode("span", { class: "text-md text-lg text-[#7a7a7a]" }, "LÝSING")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="h-screen w-100 flex justify-center items-center"><div class="max-w-4xl md:w-full font-teko"><div class="text-2xl font-montserrat mb-10 text-[#DBD2D2] text-center"><h3>Skemmtileg kaup</h3></div>`);
      _push(ssrRenderComponent(_component_UCarousel, {
        items: items2,
        ui: { item: "basis-full" },
        arrows: "",
        class: "bg-[#DBD2D2] rounded-lg p-[5%]"
      }, {
        default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", item.img)}${ssrRenderAttr("alt", item.name)} draggable="false" class="ml-[10%]"${_scopeId}><div class="grid grid-cols-1 gap-3 mx-[10%]"${_scopeId}><h2 class="text-5xl font-medium"${_scopeId}>${ssrInterpolate(item.name)}</h2><div${_scopeId}><div${_scopeId}><span class="text-md text-xl"${_scopeId}>${ssrInterpolate(item.seller)}</span></div><div${_scopeId}><span class="text-md text-[#7a7a7a]"${_scopeId}>SÖLUAÐILI</span></div></div><div${_scopeId}><div${_scopeId}><span class="text-md text-xl"${_scopeId}>${ssrInterpolate(item.price)}</span></div><div${_scopeId}><span class="text-md text-[#7a7a7a]"${_scopeId}>VERÐ</span></div></div><div${_scopeId}><div${_scopeId}><span class="text-md text-xl"${_scopeId}>Ítalía</span></div><div${_scopeId}><span class="text-md text-[#7a7a7a]"${_scopeId}>LAND</span></div></div><div${_scopeId}><div${_scopeId}><span class="text-md text-xl"${_scopeId}>4.2</span></div><div${_scopeId}><span class="text-md text-[#7a7a7a]"${_scopeId}>EINKUNN</span></div></div><div${_scopeId}><div${_scopeId}><span class="text-md text-xl"${_scopeId}>${ssrInterpolate(item.grapes)}</span></div><div${_scopeId}><span class="text-md text-[#7a7a7a]"${_scopeId}>ÞRÚGUR</span></div></div><div${_scopeId}><div${_scopeId}><span class="text-md text-xl"${_scopeId}>${ssrInterpolate(item.description)}</span></div><div${_scopeId}><span class="text-md text-[#7a7a7a]"${_scopeId}>Lýsing</span></div></div></div>`);
          } else {
            return [
              createVNode("img", {
                src: item.img,
                alt: item.name,
                draggable: "false",
                class: "ml-[10%]"
              }, null, 8, ["src", "alt"]),
              createVNode("div", { class: "grid grid-cols-1 gap-3 mx-[10%]" }, [
                createVNode("h2", { class: "text-5xl font-medium" }, toDisplayString(item.name), 1),
                createVNode("div", null, [
                  createVNode("div", null, [
                    createVNode("span", { class: "text-md text-xl" }, toDisplayString(item.seller), 1)
                  ]),
                  createVNode("div", null, [
                    createVNode("span", { class: "text-md text-[#7a7a7a]" }, "SÖLUAÐILI")
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", null, [
                    createVNode("span", { class: "text-md text-xl" }, toDisplayString(item.price), 1)
                  ]),
                  createVNode("div", null, [
                    createVNode("span", { class: "text-md text-[#7a7a7a]" }, "VERÐ")
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", null, [
                    createVNode("span", { class: "text-md text-xl" }, "Ítalía")
                  ]),
                  createVNode("div", null, [
                    createVNode("span", { class: "text-md text-[#7a7a7a]" }, "LAND")
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", null, [
                    createVNode("span", { class: "text-md text-xl" }, "4.2")
                  ]),
                  createVNode("div", null, [
                    createVNode("span", { class: "text-md text-[#7a7a7a]" }, "EINKUNN")
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", null, [
                    createVNode("span", { class: "text-md text-xl" }, toDisplayString(item.grapes), 1)
                  ]),
                  createVNode("div", null, [
                    createVNode("span", { class: "text-md text-[#7a7a7a]" }, "ÞRÚGUR")
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", null, [
                    createVNode("span", { class: "text-md text-xl" }, toDisplayString(item.description), 1)
                  ]),
                  createVNode("div", null, [
                    createVNode("span", { class: "text-md text-[#7a7a7a]" }, "Lýsing")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/ProductCarousel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Góð Vínkaup"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingPageHero = __nuxt_component_0$3;
      const _component_LandingProductCarousel = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_LandingPageHero, null, null, _parent));
      _push(ssrRenderComponent(_component_LandingProductCarousel, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-b346fe7b.js.map
