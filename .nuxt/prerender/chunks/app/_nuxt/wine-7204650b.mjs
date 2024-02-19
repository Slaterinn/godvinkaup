import { computed, withAsyncContext, watch, unref, useSSRContext, ref, mergeProps, toValue, reactive, shallowRef, toRef, getCurrentInstance, onServerPrefetch } from 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/vue/server-renderer/index.mjs';
import { u as useHead, d as useRoute, c as createError, _ as _export_sfc, e as useRouter, h as fetchDefaults, g as asyncDataDefaults, f as useNuxtApp } from '../server.mjs';
import { hash } from 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/ohash/dist/index.mjs';
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
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/unstorage/drivers/memory.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/lamthp/Documents/NUXT/godvinkaup/node_modules/pathe/dist/index.mjs';

const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "dark:bg-gray-900" }, _attrs))}><div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16"><h1 class="mb-4 text-4xl font-teko tracking-widest leading-none md:text-6xl lg:text-8xl text-[#FDA47E] dark:text-[#FDA47E] font-bold">G\xD3\xD0 V\xCDNKAUP</h1><p class="mb-8 text-lg font-montserrat text-[#FDA47E] lg:text-2xl sm:px-16 lg:px-48 dark:text-[#FDA47E]"> H\xE9r er h\xE6gt a\xF0 leita \xED v\xEDnlista \xC1TVR og Sante \xE1samt einkunn \xFEeirra fr\xE1 Vivino. Einungis er um a\xF0 r\xE6\xF0a 750ml fl\xF6skur \xFEv\xED allt anna\xF0 er bara rugl. </p></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/wine/wineJumbo.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$3 = {
  __name: "wineFilters",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useRouter();
    const searchInput = ref("");
    const wineAttributes = ref({
      category: "Allar",
      min: "",
      max: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-3xl md:w-full bg-[#FFE7D4] rounded-lg shadow m-5" }, _attrs))}><div class="m-2 max-w-screen-md"><div class="rounded-xl p-6"><h2 class="text-stone-700 text-xl font-bold">\xDErengdu ni\xF0urst\xF6\xF0urnar</h2><p class="mt-1 text-sm">Pr\xF3fa\xF0u s\xEDurnar. Me\xF0 leitinni er h\xE6gt a\xF0 leita a\xF0 \xFDmsum eiginleikum, eins og nafni, \xE1rger\xF0 og landi.</p><div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"><div class="flex flex-col"><label for="searchAll" class="text-stone-600 text-sm font-medium">Leit</label><input type="text"${ssrRenderAttr("value", unref(searchInput))} id="searchAll" placeholder="pr\xF3fa\xF0u leitina" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></div><div class="flex flex-col"><label for="wineType" class="text-stone-600 text-sm font-medium">Tegund</label><select id="wineType" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"><option${ssrIncludeBooleanAttr(Array.isArray(unref(wineAttributes).category) ? ssrLooseContain(unref(wineAttributes).category, null) : ssrLooseEqual(unref(wineAttributes).category, null)) ? " selected" : ""}>Allar</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(wineAttributes).category) ? ssrLooseContain(unref(wineAttributes).category, null) : ssrLooseEqual(unref(wineAttributes).category, null)) ? " selected" : ""}>Rau\xF0v\xEDn</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(wineAttributes).category) ? ssrLooseContain(unref(wineAttributes).category, null) : ssrLooseEqual(unref(wineAttributes).category, null)) ? " selected" : ""}>Hv\xEDtv\xEDn</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(wineAttributes).category) ? ssrLooseContain(unref(wineAttributes).category, null) : ssrLooseEqual(unref(wineAttributes).category, null)) ? " selected" : ""}>R\xF3sav\xEDn</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(wineAttributes).category) ? ssrLooseContain(unref(wineAttributes).category, null) : ssrLooseEqual(unref(wineAttributes).category, null)) ? " selected" : ""}>Frey\xF0iv\xEDn</option></select></div><div class="flex flex-col"><label for="winePriceMin" class="text-stone-600 text-sm font-medium">L\xE1gmarksver\xF0</label><input type="number" id="winePriceMin" placeholder="L\xE1gmarksver\xF0"${ssrRenderAttr("value", unref(wineAttributes).min)} class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></div><div class="flex flex-col"><label for="winePriceMin" class="text-stone-600 text-sm font-medium">H\xE1marksver\xF0</label><input type="number" id="winePriceMax" placeholder="H\xE1marksver\xF0"${ssrRenderAttr("value", unref(wineAttributes).max)} class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></div></div><div class="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex"><button class="active:scale-95 rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-600 outline-none focus:ring hover:opacity-90">Endurstilla</button><button class="active:scale-95 rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90">Leita</button></div></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/wine/wineFilters.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "wineCard",
  __ssrInlineRender: true,
  props: {
    wine: Object,
    link_vivino: String,
    link_store: String
  },
  setup(__props) {
    const props = __props;
    let wineColor;
    let wineType;
    const handleWineColor = () => {
      if (props.wine.category == "Red Wine") {
        wineColor = "text-[#a82548]";
        wineType = "Rau\xF0v\xEDn";
      } else if (props.wine.category == "White Wine") {
        wineColor = "text-[#a9ae03]";
        wineType = "Hv\xEDtv\xEDn";
      } else if (props.wine.category == "Rose") {
        wineColor = "text-[#f98e72]";
        wineType = "R\xF3sav\xEDn";
      } else {
        wineColor = "text-[#fec67a]";
        wineType = "Frey\xF0iv\xEDn";
      }
    };
    handleWineColor();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mx-auto max-w-3xl md:w-full bg-[#FFE7D4] rounded-lg shadow m-5"><div class="flex flex-col p-7 font-teko"><p class="${ssrRenderClass([`${unref(wineColor)}`, "text-lg"])}">${ssrInterpolate(unref(wineType))}</p><h2 class="mb-10 text-5xl font-medium dark:text-white">${ssrInterpolate(__props.wine.wine_name)}</h2><div class="grid grid-cols-2 gap-4"><div><div><span class="text-md text-xl">${ssrInterpolate(__props.wine.producer)}</span></div><div><span class="text-md text-[#7a7a7a]">FRAMLEI\xD0ANDI</span></div></div><div><div><span class="text-md text-xl">${ssrInterpolate(parseInt(__props.wine.price).toLocaleString("de-DE"))}</span></div><div><span class="text-md text-[#7a7a7a]">VER\xD0</span></div></div><div><div><span class="text-md text-xl">${ssrInterpolate(__props.wine.country)}</span></div><div><span class="text-md text-[#7a7a7a]">LAND</span></div></div><div><div><span class="text-md text-xl">${ssrInterpolate(__props.wine.rating)}</span></div><div><span class="text-md text-[#7a7a7a]">EINKUNN</span></div></div>`);
      if (__props.wine.taste_group) {
        _push(`<div><div><span class="text-md text-xl">${ssrInterpolate(__props.wine.taste_group)}</span></div><div><span class="text-md text-[#7a7a7a]">BRAG\xD0FLOKKUR</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.wine.grapes != 0) {
        _push(`<div><div><span class="text-md text-xl">${ssrInterpolate(__props.wine.grapes)}</span></div><div><span class="text-md text-[#7a7a7a]">\xDER\xDAGUR</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex mt-4 md:mt-6 tracking-wide"><a${ssrRenderAttr("href", props.link_store)} target="_blank" class="inline-flex items-center px-4 py-2 text-m font-medium text-center text-white bg-[#625A5A] rounded-lg hover:bg-[#888080] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#625A5A] dark:hover:bg-[#888080] dark:focus:ring-[#352E2E]">${ssrInterpolate(__props.wine.seller)}</a><a${ssrRenderAttr("href", props.link_vivino)} target="_blank" class="inline-flex items-center px-4 py-2 text-m font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">Vivino</a></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/wine/wineCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "wineCards",
  __ssrInlineRender: true,
  props: {
    wines: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_wineCard = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(__props.wines, (wine) => {
        _push(ssrRenderComponent(_component_wineCard, {
          key: wine.pk_wine,
          wine,
          link_vivino: wine.link_vivino,
          link_store: wine.link
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/wine/wineCards.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function useRequestFetch() {
  var _a;
  return ((_a = useRequestEvent()) == null ? void 0 : _a.$fetch) || globalThis.$fetch;
}
function useAsyncData(...args) {
  var _a2, _b, _c, _d, _e, _f, _g, _h;
  var _a;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxt = useNuxtApp();
  const getDefault = () => null;
  const getDefaultCachedData = () => nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key];
  options.server = (_a2 = options.server) != null ? _a2 : true;
  options.default = (_b = options.default) != null ? _b : getDefault;
  options.getCachedData = (_c = options.getCachedData) != null ? _c : getDefaultCachedData;
  options.lazy = (_d = options.lazy) != null ? _d : false;
  options.immediate = (_e = options.immediate) != null ? _e : true;
  options.deep = (_f = options.deep) != null ? _f : asyncDataDefaults.deep;
  const hasCachedData = () => ![null, void 0].includes(options.getCachedData(key));
  if (!nuxt._asyncData[key] || !options.immediate) {
    (_g = (_a = nuxt.payload._errors)[key]) != null ? _g : _a[key] = null;
    const _ref = options.deep ? ref : shallowRef;
    nuxt._asyncData[key] = {
      data: _ref((_h = options.getCachedData(key)) != null ? _h : options.default()),
      pending: ref(!hasCachedData()),
      error: toRef(nuxt.payload._errors, key),
      status: ref("idle")
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      if (opts.dedupe === false) {
        return nuxt._asyncDataPromises[key];
      }
      nuxt._asyncDataPromises[key].cancelled = true;
    }
    if ((opts._initial || nuxt.isHydrating && opts._initial !== false) && hasCachedData()) {
      return Promise.resolve(options.getCachedData(key));
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((_result) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxt.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = null;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxt._asyncDataPromises[key];
    });
    nuxt._asyncDataPromises[key] = promise;
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxt.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return toValue(r);
  });
  const _key = opts.key || hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  if (!opts.baseURL && typeof _request.value === "string" && _request.value.startsWith("//")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch: watch2,
    immediate,
    getCachedData,
    deep,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    immediate,
    getCachedData,
    deep,
    watch: watch2 === false ? [] : [_fetchOptions, _request, ...watch2 || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller);
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    if (timeoutLength) {
      setTimeout(() => controller.abort(), timeoutLength);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value.startsWith("/") && (!toValue(opts.baseURL) || toValue(opts.baseURL).startsWith("/"));
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    const iterator = Array.isArray(obj) ? obj : Object.entries(obj);
    for (const [key, value] of iterator) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  return segments;
}
const useFetchWines = async (filters) => {
  const { data, error, refresh } = await useFetch("/api/wines/wine", {
    params: {
      ...filters
    }
  }, "$24Kif7eIWn");
  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: "Unable to fetch data"
    });
  }
  return { data, refresh };
};
const _sfc_main = {
  __name: "wine",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "V\xEDn"
    });
    const route = useRoute();
    const maxPrice = computed(() => route.query.maxPrice);
    const minPrice = computed(() => route.query.minPrice);
    const category = computed(() => route.query.category);
    const search = computed(() => route.query.search);
    const { data: wines, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetchWines({
      minPrice,
      maxPrice,
      category,
      search
    })), __temp = await __temp, __restore(), __temp);
    watch(
      () => route.query,
      () => refresh()
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_wineJumbo = __nuxt_component_0$1;
      const _component_wineFilters = __nuxt_component_1;
      const _component_wineCards = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_wineJumbo, null, null, _parent));
      _push(ssrRenderComponent(_component_wineFilters, null, null, _parent));
      _push(ssrRenderComponent(_component_wineCards, { wines: unref(wines) }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wine.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=wine-7204650b.mjs.map
