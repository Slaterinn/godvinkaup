import { u as useHead } from '../server.mjs';
import { ssrRenderAttrs } from 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/vue/index.mjs';
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

const _sfc_main = {
  __name: "beer",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Bj\xF3rar"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}> This is the beers site </div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/beer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=beer-c232023b.mjs.map
