(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{342:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"content"},[n("h3",{attrs:{id:"lint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lint"}},[s._v("#")]),s._v(" lint")]),s._v(" "),n("ul",[n("li",[s._v("项目中接入 ESLint\n"),n("ul",[n("li",[s._v("版本控制：add "),n("code",[s._v(".npmrc")]),s._v(" 和 "),n("code",[s._v(".nvmrc")]),s._v("，并且 lock 文件也要入库，"),n("a",{attrs:{href:"#%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6"}},[s._v("配置")])]),s._v(" "),n("li",[s._v("执行 "),n("code",[s._v("npm init @eslint/config")]),s._v("，生成 .eslintrc.* 配置文件，进行相应的配置")]),s._v(" "),n("li",[s._v("保存代码格式化：prettier "),n("code",[s._v("npm i prettier -D")])]),s._v(" "),n("li",[s._v("代码提交前：lint-staged，执行 "),n("code",[s._v("npm i lint-staged -D")]),s._v("，并在package.json中进行规则配置，与定义命令执行")]),s._v(" "),n("li",[s._v("husky，定义.git的钩子命令")]),s._v(" "),n("li",[s._v("commitlint 做 commit message 校验")])])]),s._v(" "),n("li",[s._v("IDE 编辑器接入\n"),n("ul",[n("li",[s._v("跨编辑器保存一致")])])])]),s._v(" "),n("hr"),s._v(" "),n("h4",{attrs:{id:"版本控制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#版本控制"}},[s._v("#")]),s._v(" 版本控制")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" -v "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" .nvmrc\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[s._v("engine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("strict=true\npackage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("lock=true\nregistry=https"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//registry.npmjs.org/\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("package.json")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"engines"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"node"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"16"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"npm"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h4",{attrs:{id:"prettier-命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prettier-命令"}},[s._v("#")]),s._v(" prettier 命令")]),s._v(" "),n("p",[s._v("必须结合 "),n("code",[s._v(".prettierignore")]),s._v(" 使用")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("prettier --write "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("                              "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -w")]),s._v("\nprettier -write --ignore-unknown "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/**/*.js"')]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -w -u")]),s._v("\nprettier -write "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'src/**/*.{js,jsx,ts,tsx,json,yml,yaml,css,less,scss,md,html}'")]),s._v("\n\nprettier --check "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/**/*.js"')]),s._v("                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -c")]),s._v("\nprettier --list-different "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/**/*.js"')]),s._v("         "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -l")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# prettier diff")]),s._v("\nprettier --write "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'**/?(.)*.{md,css,scss,js,json,yaml,yml}'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" --no-pager "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -- "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h4",{attrs:{id:"lint-staged-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lint-staged-配置"}},[s._v("#")]),s._v(" lint-staged 配置")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lint-staged"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lint-staged --allow-empty"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lint-staged"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"*.{js,jsx,ts,tsx,json,yml,yaml,css,less,scss}"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"prettier --write"')]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"*.{js,jsx,ts,tsx}"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run eslint:fix"')]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("husky 安装")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("npx husky-init "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("       "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm")]),s._v("\nnpx husky-init "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v("              "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Yarn 1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" dlx husky-init --yarn2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Yarn 2+")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("pnpm")]),s._v(" dlx husky-init "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("pnpm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pnpm")]),s._v("\n\n或使用\n\nnpx auto-husky\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("husky 配置，可以在钩子中执行 lint-staged 进行校验")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# usage 启用 Git 挂钩")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" set-script prepare "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"husky install"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run prepare\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 会将 .git/config 的 hooksPath 进行修改")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Add a hook:")]),s._v("\nnpx husky "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" .husky/pre-commit "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm test"')]),s._v("\nnpx husky "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" .husky/pre-commit "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run lint-staged"')]),s._v("\nnpx husky "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" .husky/commit-msg "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'npx --no commitlint --edit $1'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个执行有问题")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" husky "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" .husky/commit-msg "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'npx --no -- commitlint --edit \"${1}\"'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个可以")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# husky uninstall")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" uninstall husky "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --unset core.hooksPath\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("commitlint 的安装")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Add hook，与上面在 husky 中添加钩子功能相同")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("EEE"),n("span",{pre:!0,attrs:{class:"token bash punctuation"}},[s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" .husky/commit-msg")]),s._v('\n#!/bin/sh\n. "\\'),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("dirname")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v('"')]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('/_/husky.sh"\n\nnpx --no -- commitlint --edit "\\'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${1}")]),s._v('"\nEEE')]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Make hook executable")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" a+x .husky/commit-msg\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("commitlint 的配置")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// commitlint.config.js")]),s._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@commitlint/config-conventional'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rules")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v("'header-max-length'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'always'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// prettier-ignore")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v("'type-enum'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'always'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'feat'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fix'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'enhance'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'chore'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'doc'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'refactor'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'style'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'revert'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("p",[s._v("测试")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("npx commitlint --from HEAD~1 --to HEAD --verbose\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo: xxx'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" npx commitlint --verbose\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h4",{attrs:{id:"eslint-配置的简要说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#eslint-配置的简要说明"}},[s._v("#")]),s._v(" ESLint 配置的简要说明")]),s._v(" "),n("ol",[n("li",[s._v("配置的定义：通过 .eslintrc.* 文件配置 或 package.json 文件的 eslintConfig 字段指定配置 或 在命令行运行时指定一个任意的配置文件")]),s._v(" "),n("li",[s._v("特定类型的文件指定处理器，请使用 overrides 键和 processor 键的组合")]),s._v(" "),n("li",[s._v("为指定文件使用 overrides + rules 附加配置")]),s._v(" "),n("li",[s._v("plugins：可省略前缀")]),s._v(" "),n("li",[s._v("overrides")]),s._v(" "),n("li",[s._v("processor 处理器")]),s._v(" "),n("li",[s._v("env 环境全局变量")]),s._v(" "),n("li",[s._v("globals 全局变量")]),s._v(" "),n("li",[s._v("rules")]),s._v(" "),n("li",[s._v("settings 在配置文件添加共享设置")]),s._v(" "),n("li",[s._v('extends: "eslint:recommended",  standard')])])])}],!1,null,null,null);t.default=e.exports}}]);