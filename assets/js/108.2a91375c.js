(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{299:function(t,v,_){"use strict";_.r(v);var l=_(6),r=Object(l.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"查看文件权限"}},[t._v("查看文件权限")]),t._v(" "),_("ol",[_("li",[t._v("ls -l")]),t._v(" "),_("li",[t._v("sudo -s")])]),t._v(" "),_("h2",{attrs:{id:"修改-chmod-r-4-w-2-x-1"}},[t._v("修改 chmod r---4, w---2, x----1")]),t._v(" "),_("ol",[_("li",[t._v("chmod 【选项】 (目标人员+操作)权限值  目录")]),t._v(" "),_("li",[t._v("u所有者，群组，o其他，a全部")])]),t._v(" "),_("p",[t._v(":形式")]),t._v(" "),_("h2",{attrs:{id:"组"}},[t._v("组")]),t._v(" "),_("p",[t._v("如何查看组成员？")]),t._v(" "),_("ol",[_("li",[t._v("grep 'group' /etc/group ---gid")]),t._v(" "),_("li",[t._v("grep '1003' /etc/passwd ---组用户")]),t._v(" "),_("li",[t._v("awk -F \":\" '{print $1\"\\t\\t\"$4}' /etc/passwd | grep 'gid' 用:号分隔打印第一与第四列")])]),t._v(" "),_("p",[t._v("(添加/删除)组成员 ？")]),t._v(" "),_("h2",{attrs:{id:"更改文件所有者-所属群组"}},[t._v("更改文件所有者，所属群组")]),t._v(" "),_("ol",[_("li",[t._v("chown 【选项】user 目录")])])])}),[],!1,null,null,null);v.default=r.exports}}]);