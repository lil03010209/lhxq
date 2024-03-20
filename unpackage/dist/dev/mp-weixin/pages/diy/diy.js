"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "diy",
  setup(__props) {
    common_vendor.onLoad(() => {
      console.log("手工--页面加载");
    });
    common_vendor.onShow(() => {
      console.log("手工--页面显示");
    });
    common_vendor.onReady(() => {
      console.log("手工---页面渲染完成");
    });
    common_vendor.onUnload(() => {
      console.log("手工--页面被卸载");
    });
    const list = common_vendor.ref();
    common_vendor.onLoad(async () => {
      const helloco = await common_vendor.Ws.callFunction({
        name: "get_commerce",
        data: {
          a: 3
        }
      });
      list.value = helloco.result.data;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(7, (n, k0, i0) => {
          return {
            a: n
          };
        }),
        b: common_vendor.f(4, (n, k0, i0) => {
          return {
            a: `input-${n}`
          };
        }),
        c: common_vendor.o((...args) => _ctx.onQuery && _ctx.onQuery(...args)),
        d: common_vendor.f(list.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.acc_num),
            b: common_vendor.t(item.classify_2),
            c: common_vendor.t(item.baodi),
            d: common_vendor.t(item.saving),
            e: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-38e3f21d"], ["__file", "C:/Users/cld2000/Desktop/lianghaochoose/pages/diy/diy.vue"]]);
wx.createPage(MiniProgramPage);
