(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{322:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h3",{attrs:{id:"常见的-react-面试题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的-react-面试题目"}},[t._v("#")]),t._v(" 常见的 react 面试题目")]),t._v(" "),a("h4",{attrs:{id:"react-的生命周期有哪些？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-的生命周期有哪些？"}},[t._v("#")]),t._v(" React 的生命周期有哪些？")]),t._v(" "),a("ol",[a("li",[t._v("初始化阶段：组件的初始化工作，如定义 this.state 的初始内容")]),t._v(" "),a("li",[t._v("挂载阶段：\n"),a("ul",[a("li",[t._v("componentWillMount：发生在 render 函数之前，还没有挂载 Dom")]),t._v(" "),a("li",[t._v("render：根据组件的 props 和 state，return 一个React元素")]),t._v(" "),a("li",[t._v("componentDidMount：发生在 render 函数之后，已经挂载 Dom，且只会被调用一次")])])]),t._v(" "),a("li",[t._v("更新阶段：父组件重新 render 引起子组件重新渲染\n"),a("ol",[a("li",[t._v("props 更新时\n"),a("ul",[a("li",[t._v("componentWillReceiveProps(nextProps,nextState)：这个生命周期主要为我们提供对 "),a("code",[t._v("props 发生改变的监听")]),t._v("，如果你需要在 props 发生改变后，相应改变组件的一些 state。在这个方法中改变 state 不会二次渲染，而是直接合并 state。")]),t._v(" "),a("li",[t._v("shouldComponentUpdate(nextProps,nextState)：这个生命周期需要返回一个 Boolean 类型的值，判断是否需要更新渲染组件，优化 react 应用的主要手段之一，当返回 false 就不会再向下执行生命周期了，在这个阶段不可以 setState()，会导致循环调用。")]),t._v(" "),a("li",[t._v("componentWillUpdate(nextProps,nextState)：这个生命周期主要是给我们一个时机能够处理一些在 Dom 发生更新之前的事情，如获得 Dom 更新前某些元素的坐标、大小等，在这个阶段不可以 setState()，会导致循环调用。"),a("strong",[t._v("一直到这里 this.props 和 this.state 都还未发生更新")])]),t._v(" "),a("li",[t._v("render")]),t._v(" "),a("li",[t._v("componentDidUpdate(prevProps, prevState)：在此时已经完成渲染，Dom 已经发生变化，state 已经发生更新，prevProps、prevState 均为上一个状态的值。")])])]),t._v(" "),a("li",[t._v("state 更新时\n"),a("ul",[a("li",[t._v("shouldComponentUpdate")]),t._v(" "),a("li",[t._v("componentWillUpdate")]),t._v(" "),a("li",[t._v("render")]),t._v(" "),a("li",[t._v("componentDidUpdate")])])])])]),t._v(" "),a("li",[t._v("卸载阶段。\n"),a("ul",[a("li",[t._v("componentWillUnmount：在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 componentDidMount  中创建的订阅等。componentWillUnmount 中不应调用 setState，因为该组件将永远不会重新渲染。组件实例卸载后，将永远不会再挂载它。")])])])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" babel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel-/core'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" sourceCode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" babel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sourceCOde"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/plugin-transform-react-jsx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("runtime")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'classic/automatic'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h4",{attrs:{id:"react-性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-性能优化"}},[t._v("#")]),t._v(" react 性能优化")]),t._v(" "),a("ul",[a("li",[t._v("React.lazy + import()动态路由 和 React.Suspense----fallback")])]),t._v(" "),a("h4",{attrs:{id:"errorboundary-错误收集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#errorboundary-错误收集"}},[t._v("#")]),t._v(" ErrorBoundary 错误收集")])])}],!1,null,null,null);s.default=n.exports}}]);