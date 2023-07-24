"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_grid_item2 = common_vendor.resolveComponent("u-grid-item");
  const _easycom_u_grid2 = common_vendor.resolveComponent("u-grid");
  (_easycom_u_icon2 + _easycom_u_grid_item2 + _easycom_u_grid2)();
}
const _easycom_u_icon = () => "../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js";
const _easycom_u_grid_item = () => "../../uni_modules/vk-uview-ui/components/u-grid-item/u-grid-item.js";
const _easycom_u_grid = () => "../../uni_modules/vk-uview-ui/components/u-grid/u-grid.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u_grid_item + _easycom_u_grid)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          name: "photo",
          size: 46
        }),
        b: common_vendor.p({
          name: "lock",
          size: 46
        }),
        c: common_vendor.p({
          name: "hourglass",
          size: 46
        }),
        d: common_vendor.p({
          col: 3
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/code/uniApp/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
