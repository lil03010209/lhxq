"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const indicatorDots = common_vendor.ref(true);
    const trans = (val) => {
      console.log(val.detail);
    };
    const xinyunzhi = common_vendor.ref(0);
    const chaxun = () => {
      xinyunzhi.value = Math.floor(Math.random() * Math.floor(101));
    };
    return (_ctx, _cache) => {
      return {
        a: indicatorDots.value,
        b: indicatorDots.value,
        c: common_vendor.o((...args) => _ctx.tiaozhuan && _ctx.tiaozhuan(...args)),
        d: common_vendor.o((...args) => _ctx.finish && _ctx.finish(...args)),
        e: common_vendor.o(trans),
        f: common_vendor.o(chaxun),
        g: common_vendor.t(xinyunzhi.value)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "C:/Users/cld2000/Desktop/lianghaochoose/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
