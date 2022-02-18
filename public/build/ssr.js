"use strict";
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var serverRenderer$1 = require("@vue/server-renderer");
var inertiaVue3 = require("@inertiajs/inertia-vue3");
var createServer = require("@inertiajs/server");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var createServer__default = /* @__PURE__ */ _interopDefaultLegacy(createServer);
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  name: "index"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(_attrs)}>ol\xE1 mundo</h1>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/views/pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
var __glob_5_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index
});
function importPageComponent(name, pages) {
  for (const path in pages) {
    if (path.endsWith(`${name.replaceAll(".", "/")}.vue`)) {
      return typeof pages[path] === "function" ? pages[path]() : pages[path];
    }
  }
  throw new Error(`Page not found: ${name}`);
}
createServer__default["default"]((page) => inertiaVue3.createInertiaApp({
  page,
  render: serverRenderer$1.renderToString,
  resolve: (name) => importPageComponent(name, { "../views/pages/index.vue": __glob_5_0 }),
  setup: ({ app, props, plugin: inertia }) => {
    return vue.createSSRApp({ render: () => vue.h(app, props) }).use(inertia);
  }
}));
