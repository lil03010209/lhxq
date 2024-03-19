"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  _easycom_uni_data_select2();
}
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
if (!Math) {
  _easycom_uni_data_select();
}
const _sfc_main = {
  __name: "commerce",
  setup(__props) {
    const list = common_vendor.ref();
    const getDataList = async () => {
      const helloco = await common_vendor.Ws.callFunction({
        name: "get_commerce",
        data: { aaaa: name.value }
      });
      list.value = helloco.result.data;
    };
    const name = common_vendor.ref("");
    const hChange = () => {
      getDataList();
    };
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
        a: common_vendor.o(hChange),
        b: common_vendor.o(($event) => name.value = $event),
        c: common_vendor.p({
          collection: "class_list2",
          field: "text as value, text as text",
          label: "选择",
          clear: false,
          modelValue: name.value
        }),
        d: common_vendor.f(list.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.acc_num),
            b: common_vendor.t(item.classify_2),
            c: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/cld2000/Desktop/lianghaochoose/pages/commerce/commerce.vue"]]);
wx.createPage(MiniProgramPage);
