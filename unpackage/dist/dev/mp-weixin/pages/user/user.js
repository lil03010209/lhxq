"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "user",
  setup(__props) {
    common_vendor.onLoad(() => {
      console.log("我的--页面加载");
    });
    common_vendor.onShow(() => {
      console.log("我的--页面显示");
    });
    common_vendor.onReady(() => {
      console.log("我的---页面渲染完成");
    });
    common_vendor.onUnload(() => {
      console.log("我的--页面被卸载");
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/cld2000/Desktop/lianghaochoose/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
