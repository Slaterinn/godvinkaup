import { _ as _export_sfc, a as useAppConfig, i as useState, f as useNuxtApp } from '../server.mjs';
import { useSSRContext, defineComponent, watch, ref, computed, withAsyncContext, mergeProps, unref, createVNode, resolveDynamicComponent } from 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode, ssrRenderSlot, ssrInterpolate } from 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/vue/server-renderer/index.mjs';
import { Icon } from 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/@iconify/vue/dist/offline.mjs';
import { addAPIProvider, loadIcon } from 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/@iconify/vue/dist/iconify.mjs';
import { r as resolveIconName } from './index-7a71a440.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/unstorage/drivers/memory.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/pathe/dist/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: ""
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const nuxtApp = useNuxtApp();
    const appConfig = useAppConfig();
    const props = __props;
    watch(() => {
      var _a;
      return (_a = appConfig.nuxtIcon) == null ? void 0 : _a.iconifyApiOptions;
    }, () => {
      var _a, _b, _c, _d, _e, _f;
      if (!((_b = (_a = appConfig.nuxtIcon) == null ? void 0 : _a.iconifyApiOptions) == null ? void 0 : _b.url))
        return;
      try {
        new URL(appConfig.nuxtIcon.iconifyApiOptions.url);
      } catch (e) {
        console.warn("Nuxt Icon: Invalid custom Iconify API URL");
        return;
      }
      if ((_d = (_c = appConfig.nuxtIcon) == null ? void 0 : _c.iconifyApiOptions) == null ? void 0 : _d.publicApiFallback) {
        addAPIProvider("custom", {
          resources: [(_e = appConfig.nuxtIcon) == null ? void 0 : _e.iconifyApiOptions.url],
          index: 0
        });
        return;
      }
      addAPIProvider("", {
        resources: [(_f = appConfig.nuxtIcon) == null ? void 0 : _f.iconifyApiOptions.url]
      });
    }, { immediate: true });
    const state = useState("icons", () => ({}));
    const isFetching = ref(false);
    const iconName = computed(() => {
      var _a, _b;
      if ((_b = (_a = appConfig.nuxtIcon) == null ? void 0 : _a.aliases) == null ? void 0 : _b[props.name]) {
        return appConfig.nuxtIcon.aliases[props.name];
      }
      return props.name;
    });
    const resolvedIcon = computed(() => resolveIconName(iconName.value));
    const iconKey = computed(() => [resolvedIcon.value.provider, resolvedIcon.value.prefix, resolvedIcon.value.name].filter(Boolean).join(":"));
    const icon = computed(() => {
      var _a;
      return (_a = state.value) == null ? void 0 : _a[iconKey.value];
    });
    const component = computed(() => nuxtApp.vueApp.component(iconName.value));
    const sSize = computed(() => {
      var _a, _b, _c;
      if (!props.size && typeof ((_a = appConfig.nuxtIcon) == null ? void 0 : _a.size) === "boolean" && !((_b = appConfig.nuxtIcon) == null ? void 0 : _b.size)) {
        return void 0;
      }
      const size = props.size || ((_c = appConfig.nuxtIcon) == null ? void 0 : _c.size) || "1em";
      if (String(Number(size)) === size) {
        return `${size}px`;
      }
      return size;
    });
    const className = computed(() => {
      var _a2;
      var _a;
      return (_a2 = (_a = appConfig == null ? void 0 : appConfig.nuxtIcon) == null ? void 0 : _a.class) != null ? _a2 : "icon";
    });
    async function loadIconComponent() {
      var _a;
      if (component.value) {
        return;
      }
      if (!((_a = state.value) == null ? void 0 : _a[iconKey.value])) {
        isFetching.value = true;
        state.value[iconKey.value] = await loadIcon(resolvedIcon.value).catch(() => void 0);
        isFetching.value = false;
      }
    }
    watch(iconName, loadIconComponent);
    !component.value && ([__temp, __restore] = withAsyncContext(() => loadIconComponent()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      if (isFetching.value) {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: className.value,
          style: { width: sSize.value, height: sSize.value }
        }, _attrs))} data-v-bd832875></span>`);
      } else if (icon.value) {
        _push(ssrRenderComponent(unref(Icon), mergeProps({
          icon: icon.value,
          class: className.value,
          width: sSize.value,
          height: sSize.value
        }, _attrs), null, _parent));
      } else if (component.value) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(component.value), mergeProps({
          class: className.value,
          width: sSize.value,
          height: sSize.value
        }, _attrs), null), _parent);
      } else {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: className.value,
          style: { fontSize: sSize.value, lineHeight: sSize.value, width: sSize.value, height: sSize.value }
        }, _attrs))} data-v-bd832875>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`${ssrInterpolate(__props.name)}`);
        }, _push, _parent);
        _push(`</span>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-icon/dist/runtime/Icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bd832875"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=Icon-0a5d12be.mjs.map
