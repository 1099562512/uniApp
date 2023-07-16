"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_badge2 = common_vendor.resolveComponent("uni-badge");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_badge2 + _easycom_uni_section2)();
}
const _easycom_uni_badge = () => "../../uni_modules/uni-badge/components/uni-badge/uni-badge.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_badge + _easycom_uni_section)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      text: "1"
    }),
    b: common_vendor.p({
      text: "2",
      type: "primary"
    }),
    c: common_vendor.p({
      text: "34",
      type: "success"
    }),
    d: common_vendor.p({
      text: "45",
      type: "warning"
    }),
    e: common_vendor.p({
      text: "123",
      type: "info"
    }),
    f: common_vendor.p({
      title: "基础用法",
      type: "line",
      padding: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/code/personal/uniApp/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
