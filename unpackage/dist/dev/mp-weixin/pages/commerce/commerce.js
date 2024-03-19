"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "commerce",
  setup(__props) {
    const list = common_vendor.ref();
    common_vendor.onLoad(async () => {
      const helloco = await common_vendor.Ws.callFunction({
        name: "get_numbers",
        data: { a: 1 }
      });
      list.value = helloco.result.data;
    });
    common_vendor.onLoad(() => {
      console.log("商务--页面加载");
    });
    common_vendor.onShow(() => {
      console.log("商务--页面显示");
    });
    common_vendor.onReady(() => {
      console.log("商务---页面渲染完成");
    });
    common_vendor.onUnload(() => {
      console.log("商务--页面被卸载");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(list.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.acc_num),
            b: common_vendor.t(item.classify_1),
            c: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/cld2000/Desktop/lianghaochoose/pages/commerce/commerce.vue"]]);
wx.createPage(MiniProgramPage);
