(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{275:function(t,a,s){"use strict";s.r(a);var r=s(0),e=Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"查看文件权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看文件权限"}},[t._v("#")]),t._v(" 查看文件权限")]),t._v(" "),s("ol",[s("li",[t._v("ls -l")]),t._v(" "),s("li",[t._v("sudo -s")])]),t._v(" "),s("h2",{attrs:{id:"修改-chmod-r-4-w-2-x-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改-chmod-r-4-w-2-x-1"}},[t._v("#")]),t._v(" 修改 chmod r---4, w---2, x----1")]),t._v(" "),s("ol",[s("li",[t._v("chmod 【选项】 (目标人员+操作)权限值  目录")]),t._v(" "),s("li",[t._v("u所有者，群组，o其他，a全部")])]),t._v(" "),s("p",[t._v(":形式")]),t._v(" "),s("h2",{attrs:{id:"组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组"}},[t._v("#")]),t._v(" 组")]),t._v(" "),s("p",[t._v("如何查看组成员？")]),t._v(" "),s("ol",[s("li",[t._v("grep 'group' /etc/group ---gid")]),t._v(" "),s("li",[t._v("grep '1003' /etc/passwd ---组用户")]),t._v(" "),s("li",[t._v("awk -F \":\" '{print $1\"\\t\\t\"$4}' /etc/passwd | grep 'gid' 用:号分隔打印第一与第四列")])]),t._v(" "),s("p",[t._v("(添加/删除)组成员 ？")]),t._v(" "),s("h2",{attrs:{id:"更改文件所有者，所属群组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更改文件所有者，所属群组"}},[t._v("#")]),t._v(" 更改文件所有者，所属群组")]),t._v(" "),s("ol",[s("li",[t._v("chown 【选项】user 目录")])])])}],!1,null,null,null);a.default=e.exports}}]);