(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{265:function(n,e,t){"use strict";t.r(e);var i=t(0),r=Object(i.a)({},(function(){var n=this.$createElement;this._self._c;return this._m(0)}),[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"content"},[t("h3",{attrs:{id:"用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户"}},[n._v("#")]),n._v(" 用户")]),n._v(" "),t("ul",[t("li",[n._v("db.auth,")]),n._v(" "),t("li",[n._v("db.changeUserPassword,")]),n._v(" "),t("li",[n._v("db.createUser,")]),n._v(" "),t("li",[n._v("db.dropUser,")]),n._v(" "),t("li",[n._v("db.dropAllUsers,")]),n._v(" "),t("li",[n._v("db.getUser,")]),n._v(" "),t("li",[n._v("db.getUsers,")]),n._v(" "),t("li",[n._v("db.grantRolesToUser,")]),n._v(" "),t("li",[n._v("db.removeUser,")]),n._v(" "),t("li",[n._v("db.revokeRolesFromUser,")]),n._v(" "),t("li",[n._v("db.updateUser,")])]),n._v(" "),t("h3",{attrs:{id:"兼容-featurecompatibilityversion-getparameter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#兼容-featurecompatibilityversion-getparameter"}},[n._v("#")]),n._v(" 兼容  featureCompatibilityVersion   getParameter")]),n._v(" "),t("ul",[t("li",[n._v("setFeatureCompatibilityVersion")])]),n._v(" "),t("h3",{attrs:{id:"角色"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#角色"}},[n._v("#")]),n._v(" 角色")]),n._v(" "),t("ul",[t("li",[n._v("db.createRole,")]),n._v(" "),t("li",[n._v("db.dropRole,")]),n._v(" "),t("li",[n._v("db.dropAllRoles,")]),n._v(" "),t("li",[n._v("db.getRole,")]),n._v(" "),t("li",[n._v("db.getRoles,")]),n._v(" "),t("li",[n._v("db.grantPrivilegesToRole,")]),n._v(" "),t("li",[n._v("db.revokePrivilegesFromRole,")]),n._v(" "),t("li",[n._v("db.grantRolesToRole,")]),n._v(" "),t("li",[n._v("db.revokeRolesFromRole,")]),n._v(" "),t("li",[n._v("db.updateRole,")])]),n._v(" "),t("h3",{attrs:{id:"journal-持久化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#journal-持久化"}},[n._v("#")]),n._v(" journal 持久化")]),n._v(" "),t("p",[n._v("systemLog:\nverbosity: +<int>\nquiet: +<boolean>\ntraceAllExceptions: +<boolean>\nsyslogFacility: +<string>\npath: +<string>\nlogAppend: +<boolean>\nlogRotate: +<string>\ndestination: +<string>\ntimeStampFormat: +<string>\ncomponent:\naccessControl:\nverbosity: +<int>\ncommand:\nverbosity: +<int>")]),n._v(" "),t("p",[n._v("组件：")]),n._v(" "),t("p",[n._v("systemLog:\ncomponent:\naccessControl:\nverbosity: +<int>\ncommand:\nverbosity: +<int>")]),n._v(" "),t("pre",[t("code",[n._v("  # COMMENT some component verbosity settings omitted for brevity\n\n  replication:\n     verbosity: +\\<int>\n     heartbeats:\n        verbosity: +\\<int>\n     rollback:\n        verbosity: +\\<int>\n  storage:\n     verbosity: +\\<int>\n     journal:\n        verbosity: +\\<int>\n  write:\n     verbosity: +\\<int>\n")])]),n._v(" "),t("p",[n._v("storage:\ndbPath: +<string>\nindexBuildRetry: +<boolean>\nrepairPath: +<string>\njournal:\nenabled: +<boolean>\ncommitIntervalMs: +<num>\ndirectoryPerDB: +<boolean>\nsyncPeriodSecs: +<int>\nengine: +<string>\nmmapv1:\npreallocDataFiles: +<boolean>\nnsSize: +<int>\nquota:\nenforced: +<boolean>\nmaxFilesPerDB: +<int>\nsmallFiles: +<boolean>\njournal:\ndebugFlags: +<int>\ncommitIntervalMs: +<num>\nwiredTiger:\nengineConfig:\ncacheSizeGB: +<number>\njournalCompressor: +<string>\ndirectoryForIndexes: +<boolean>\ncollectionConfig:\nblockCompressor: +<string>\nindexConfig:\nprefixCompression: +<boolean>\ninMemory:\nengineConfig:\ninMemorySizeGB: +<number>")]),n._v(" "),t("p",[n._v("operationProfiling:\nmode: +<string>\nslowOpThresholdMs: +<int>\nslowOpSampleRate: +<double>")]),n._v(" "),t("p",[n._v("replication:\noplogSizeMB: +<int>\nreplSetName: +<string>\nsecondaryIndexPrefetch: +<string>\nenableMajorityReadConcern: +<boolean>")]),n._v(" "),t("p",[n._v("processManagement:\nfork: +<boolean>\npidFilePath: +<string>\ntimeZoneInfo: +<string>")]),n._v(" "),t("p",[n._v("sharding:\nclusterRole: +<string>\narchiveMovedChunks: +<boolean>")]),n._v(" "),t("p",[n._v("auditLog:\ndestination: +<string>\nformat: +<string>\npath: +<string>\nfilter: +<string>")]),n._v(" "),t("p",[n._v("snmp:\nsubagent: +<boolean>\nmaster: +<boolean>")]),n._v(" "),t("p",[n._v("replication:\nlocalPingThresholdMs: +<int>")]),n._v(" "),t("p",[n._v("sharding:\nconfigDB: +<string>")]),n._v(" "),t("p",[n._v("net:\nport: +<int>\nbindIp: +<string>\nbindIpAll: +<boolean>\nmaxIncomingConnections: +<int>\nwireObjectCheck: +<boolean>\nipv6: +<boolean>\nunixDomainSocket:\nenabled: +<boolean>\npathPrefix: +<string>\nfilePermissions: +<int>\nssl:\nsslOnNormalPorts: +<boolean>  # deprecated since 2.6\nmode: +<string>\nPEMKeyFile: +<string>\nPEMKeyPassword: +<string>\nclusterFile: +<string>\nclusterPassword: +<string>\nCAFile: +<string>\nCRLFile: +<string>\nallowConnectionsWithoutCertificates: +<boolean>\nallowInvalidCertificates: +<boolean>\nallowInvalidHostnames: +<boolean>\ndisabledProtocols: +<string>\nFIPSMode: +<boolean>\ncompression:\ncompressors: +<string>\ntransportLayer: +<string>\nserviceExecutor: +<string>\nunixDomainSocket:\nenabled: +<boolean>\npathPrefix: +<string>\nfilePermissions: +<int>")]),n._v(" "),t("p",[n._v("security:\nkeyFile: +<string>\nclusterAuthMode: +<string>\nauthorization: +<string>\ntransitionToAuth: +<boolean>\njavascriptEnabled:  +<boolean>\nredactClientLogData: +<boolean>\nsasl:\nhostName: +<string>\nserviceName: +<string>\nsaslauthdSocketPath: +<string>\nenableEncryption: +<boolean>\nencryptionCipherMode: +<string>\nencryptionKeyFile: +<string>\nkmip:\nkeyIdentifier: +<string>\nrotateMasterKey: +<boolean>\nserverName: +<string>\nport: +<string>\nclientCertificateFile: +<string>\nclientCertificatePassword: +<string>\nserverCAFile: +<string>\nldap:\nservers: +<string>\nbind:\nmethod: +<string>\nsaslMechanisms: +<string>\nqueryUser: +<string>\nqueryPassword: +<string>\nuseOSDefaults: +<boolean>\ntransportSecurity: +<string>\ntimeoutMS: +<int>\nuserToDNMapping: +<string>\nauthz:\nqueryTemplate: +<string>")])])}],!1,null,null,null);e.default=r.exports}}]);