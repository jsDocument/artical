(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{164:function(e,l,t){"use strict";t.r(l);var o=t(0),n=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"content"},[t("h2",{attrs:{id:"当event-loop进入-poll-阶段，并且-没有设定的timers（there-are-no-timers-scheduled），会发生下面两件事之一："}},[e._v("当event loop进入 poll 阶段，并且 没有设定的timers（there are no timers scheduled），会发生下面两件事之一：")]),t("p",[e._v("如果 poll 队列不空，event loop会遍历队列并同步执行回调，直到队列清空或执行的回调数到达系统上限；\n如果 poll 队列为空，则发生以下两件事之一：\n如果代码已经被setImmediate()设定了回调, event loop将结束 poll 阶段进入 check 阶段来执行 check 队列（里的回调）。\n如果代码没有被setImmediate()设定回调，event loop将阻塞在该阶段等待回调被加入 poll 队列，并立即执行。")]),t("p",[e._v("但是，当event loop进入 poll 阶段，并且 有设定的timers，一旦 poll 队列为空（poll 阶段空闲状态）：")]),t("ol",[t("li",[e._v("event loop将检查timers,如果有1个或多个timers的下限时间已经到达，event loop将绕回 "),t("strong",[e._v("timers")]),e._v(" 阶段，并执行 "),t("strong",[e._v("timer")]),e._v(" 队列。")])]),t("p",[e._v("check")]),t("p",[e._v("这个阶段允许在 poll 阶段结束后立即执行回调。如果 poll 阶段空闲，并且有被setImmediate()设定的回调，event loop会转到 check 阶段而不是继续等待。")]),t("p",[e._v("setImmediate()实际上是一个特殊的timer，跑在event loop中一个独立的阶段。它使用libuv的API\n来设定在 poll 阶段结束后立即执行回调。")]),t("p",[e._v("通常上来讲，随着代码执行，event loop终将进入 poll 阶段，在这个阶段等待 incoming connection, request 等等。但是，只要有被setImmediate()设定了回调，一旦 poll 阶段空闲，那么程序将结束 poll 阶段并进入 check 阶段，而不是继续等待 poll 事件们 （poll events）。")]),t("p",[e._v("close callbacks")]),t("p",[e._v("如果一个 socket 或 handle 被突然关掉（比如 socket.destroy()），close事件将在这个阶段被触发，否则将通过process.nextTick()触发。")])])}],!1,null,null,null);l.default=n.exports}}]);