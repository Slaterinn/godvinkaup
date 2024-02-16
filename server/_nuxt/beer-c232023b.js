import { u as useHead } from "../server.mjs";
import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
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
import "tailwind-merge";
const _sfc_main = {
  __name: "beer",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Bjórar"
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
export {
  _sfc_main as default
};
//# sourceMappingURL=beer-c232023b.js.map
