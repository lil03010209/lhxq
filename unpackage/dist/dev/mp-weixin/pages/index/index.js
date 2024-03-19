"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_transition2 = common_vendor.resolveComponent("uni-transition");
  const _easycom_uni_fab2 = common_vendor.resolveComponent("uni-fab");
  (_easycom_uni_rate2 + _easycom_uni_transition2 + _easycom_uni_fab2)();
}
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_transition = () => "../../uni_modules/uni-transition/components/uni-transition/uni-transition.js";
const _easycom_uni_fab = () => "../../uni_modules/uni-fab/components/uni-fab/uni-fab.js";
if (!Math) {
  (_easycom_uni_rate + _easycom_uni_transition + _easycom_uni_fab)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const indicatorDots = common_vendor.ref(true);
    common_vendor.ref(0);
    const showFortunes = common_vendor.ref(true);
    const fortunes = common_vendor.ref([
      {
        name: "整体运势",
        value: 0,
        desc: ""
      },
      {
        name: "爱情运势",
        value: 0,
        desc: ""
      },
      {
        name: "事业运势",
        value: 0,
        desc: ""
      },
      {
        name: "财运运势",
        value: 0,
        desc: ""
      }
    ]);
    const descriptions = {
      "整体运势": [
        "遇到问题时静下心来思考，求助于身边的人。",
        "小心言行，避免不必要的误会。适时的调整心态。",
        "运势平平，坚持自己的方向，总会有转机。",
        "好运正在向你招手，关键在于把握机会。",
        "今天是个好日子，无论是工作还是人际交往都能得心应手。"
      ],
      "爱情运势": [
        "感情路上可能会遇到一些小波折，记得沟通是解决问题的关键。",
        "可能会感到一丝孤单，不妨主动出击，参加一些社交活动。",
        "已有伴侣的你，可能会经历一些小争执，记得耐心是维持关系的要素。",
        "单身的你有机会遇到心仪的对象，大胆表达你的感情。",
        "爱情满满，无论是单身还是恋爱中，都有机会收获幸福。"
      ],
      "事业运势": [
        "工作上可能会遇到一些阻碍，保持冷静，一一解决即可。",
        "可能会感到工作压力增大，适时的调整和规划将有助于未来的发展。",
        "职场上的表现平平，但只要坚持不懈，就会有所收获。",
        "工作中可能会有新的机遇出现，把握好，将对你的职业生涯大有帮助。",
        "事业运势极佳，不仅能完成任务，还可能获得额外的赞赏和奖励。"
      ],
      "财运运势": [
        "财务状况可能不太乐观，避免不必要的开支。",
        "小心理财，可能会有一些意外支出，合理规划你的财务。",
        "今天的财运一般，有收有支，保持平衡即可。",
        "你的努力将会得到回报，可能会有一笔意外之财。",
        "财运旺盛，投资有望获得良好回报，但仍需谨慎决策。"
      ]
    };
    function generateFixedScore(phoneNumber2, fortuneIndex) {
      const date = /* @__PURE__ */ new Date();
      const dateNumber = parseInt(
        `${date.getFullYear()}${("0" + (date.getMonth() + 1)).slice(-2)}${("0" + date.getDate()).slice(-2)}`
      );
      const phoneLastFour = parseInt(phoneNumber2.slice(-4));
      let hash = dateNumber * phoneLastFour + fortuneIndex;
      hash = (hash << 5) - hash + fortuneIndex;
      const score = Math.abs(hash % 5) + 1;
      return score;
    }
    const chaxun = () => {
      showFortunes.value = true;
      fortunes.value.forEach((fortune, index) => {
        const score = generateFixedScore(phoneNumber.value, index + 1);
        fortune.value = score;
        const descArray = descriptions[fortune.name];
        const descIndex = Math.floor(score) - 1;
        fortune.desc = descArray[descIndex];
      });
    };
    const phoneNumber = common_vendor.ref("");
    const checkAndSubmit = () => {
      if (phoneNumber.value.length !== 11 || isNaN(phoneNumber.value)) {
        common_vendor.index.showToast({
          title: "请输入有效的11位手机号码",
          icon: "none",
          // 'none'为纯文本，'success'显示成功图标，'loading'显示加载图标
          duration: 2e3
          // 提示的延迟时间，单位毫秒，默认为1500
        });
      } else {
        console.log("提交成功，手机号码为: ", phoneNumber.value);
        chaxun();
      }
    };
    const content = common_vendor.ref([
      {
        iconPath: "/static/icon/phone.png",
        selectedIconPath: "/static/icon/phone.png",
        text: "我的号码",
        active: false
      },
      {
        iconPath: "/static/icon/order.png",
        selectedIconPath: "/static/icon/order.png",
        text: "我的订单",
        active: false
      }
    ]);
    const trigger = (e) => {
      console.log(e);
      content.value[e.index].active = !content.value[e.index].active;
    };
    const fabClick = () => {
      console.log("点击了悬浮按钮");
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o([($event) => phoneNumber.value = $event.detail.value, (...args) => _ctx.limitPhoneNumber && _ctx.limitPhoneNumber(...args)]),
        b: phoneNumber.value,
        c: common_vendor.o(checkAndSubmit),
        d: indicatorDots.value,
        e: indicatorDots.value,
        f: indicatorDots.value,
        g: common_vendor.o((...args) => _ctx.tiaozhuan && _ctx.tiaozhuan(...args)),
        h: common_vendor.o((...args) => _ctx.finish && _ctx.finish(...args)),
        i: common_vendor.o((...args) => _ctx.trans && _ctx.trans(...args)),
        j: common_vendor.o(($event) => _ctx.navigate("tutor-list")),
        k: common_vendor.o(($event) => _ctx.postSearchCourse("hot")),
        l: common_vendor.o(($event) => _ctx.postSearchCourse("new")),
        m: common_vendor.o(($event) => _ctx.navigate("sign-in")),
        n: showFortunes.value
      }, showFortunes.value ? {
        o: common_vendor.f(fortunes.value, (fortune, k0, i0) => {
          return {
            a: common_vendor.t(fortune.name),
            b: "1cf27b2a-1-" + i0 + ",1cf27b2a-0",
            c: common_vendor.p({
              ["allow-half"]: true,
              value: fortune.value,
              color: "#bbb",
              ["active-color"]: "#FFD700"
            }),
            d: common_vendor.t(fortune.desc),
            e: fortune.name
          };
        }),
        p: common_vendor.p({
          mode: "fade",
          show: showFortunes.value
        })
      } : {}, {
        q: common_vendor.sr("fab", "1cf27b2a-2"),
        r: common_vendor.o(trigger),
        s: common_vendor.o(fabClick),
        t: common_vendor.p({
          horizontal: "right",
          vertical: "bottom",
          content: content.value
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "C:/Users/cld2000/Desktop/lianghaochoose/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
