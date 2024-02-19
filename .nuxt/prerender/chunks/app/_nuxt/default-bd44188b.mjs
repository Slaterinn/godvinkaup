import { _ as __nuxt_component_0$1 } from './nuxt-link-b2e5ab4b.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode } from 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/h3/dist/index.mjs';
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

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-50 flex justify-between items-center space-x-1 bg-[#3E3737] text-[#FDA47E] p-4 shadow-md" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "text-3xl font-teko",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`G\xF3\xF0 V\xEDnkaup`);
      } else {
        return [
          createTextVNode("G\xF3\xF0 V\xEDnkaup")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</header>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NavBar = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#3E3737]" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-bd44188b.mjs.map
