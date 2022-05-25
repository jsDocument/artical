### 用户
+  db.auth,
+  db.changeUserPassword,
+  db.createUser,
+  db.dropUser,
+  db.dropAllUsers,
+  db.getUser,
+  db.getUsers,
+  db.grantRolesToUser,
+  db.removeUser,
+  db.revokeRolesFromUser,
+  db.updateUser,

### 兼容  featureCompatibilityVersion   getParameter
+ setFeatureCompatibilityVersion

### 角色
+  db.createRole,
+  db.dropRole,
+  db.dropAllRoles,
+  db.getRole,
+  db.getRoles,
+  db.grantPrivilegesToRole,
+  db.revokePrivilegesFromRole,
+  db.grantRolesToRole,
+  db.revokeRolesFromRole,
+  db.updateRole,

### journal 持久化

systemLog:
   verbosity: +\<int>
   quiet: +\<boolean>
   traceAllExceptions: +\<boolean>
   syslogFacility: +\<string>
   path: +\<string>
   logAppend: +\<boolean>
   logRotate: +\<string>
   destination: +\<string>
   timeStampFormat: +\<string>
   component:
      accessControl:
         verbosity: +\<int>
      command:
         verbosity: +\<int>

组件：

systemLog:
   component:
      accessControl:
         verbosity: +\<int>
      command:
         verbosity: +\<int>

      # COMMENT some component verbosity settings omitted for brevity

      replication:
         verbosity: +\<int>
         heartbeats:
            verbosity: +\<int>
         rollback:
            verbosity: +\<int>
      storage:
         verbosity: +\<int>
         journal:
            verbosity: +\<int>
      write:
         verbosity: +\<int>



storage:
   dbPath: +\<string>
   indexBuildRetry: +\<boolean>
   repairPath: +\<string>
   journal:
      enabled: +\<boolean>
      commitIntervalMs: +\<num>
   directoryPerDB: +\<boolean>
   syncPeriodSecs: +\<int>
   engine: +\<string>
   mmapv1:
      preallocDataFiles: +\<boolean>
      nsSize: +\<int>
      quota:
         enforced: +\<boolean>
         maxFilesPerDB: +\<int>
      smallFiles: +\<boolean>
      journal:
         debugFlags: +\<int>
         commitIntervalMs: +\<num>
   wiredTiger:
      engineConfig:
         cacheSizeGB: +\<number>
         journalCompressor: +\<string>
         directoryForIndexes: +\<boolean>
      collectionConfig:
         blockCompressor: +\<string>
      indexConfig:
         prefixCompression: +\<boolean>
   inMemory:
      engineConfig:
         inMemorySizeGB: +\<number>

operationProfiling:
   mode: +\<string>
   slowOpThresholdMs: +\<int>
   slowOpSampleRate: +\<double>


replication:
   oplogSizeMB: +\<int>
   replSetName: +\<string>
   secondaryIndexPrefetch: +\<string>
   enableMajorityReadConcern: +\<boolean>




processManagement:
   fork: +\<boolean>
   pidFilePath: +\<string>
   timeZoneInfo: +\<string>

sharding:
   clusterRole: +\<string>
   archiveMovedChunks: +\<boolean>

auditLog:
   destination: +\<string>
   format: +\<string>
   path: +\<string>
   filter: +\<string>

snmp:
   subagent: +\<boolean>
   master: +\<boolean>

replication:
   localPingThresholdMs: +\<int>

sharding:
   configDB: +\<string>

net:
   port: +\<int>
   bindIp: +\<string>
   bindIpAll: +\<boolean>
   maxIncomingConnections: +\<int>
   wireObjectCheck: +\<boolean>
   ipv6: +\<boolean>
   unixDomainSocket:
      enabled: +\<boolean>
      pathPrefix: +\<string>
      filePermissions: +\<int>
   ssl:
      sslOnNormalPorts: +\<boolean>  # deprecated since 2.6
      mode: +\<string>
      PEMKeyFile: +\<string>
      PEMKeyPassword: +\<string>
      clusterFile: +\<string>
      clusterPassword: +\<string>
      CAFile: +\<string>
      CRLFile: +\<string>
      allowConnectionsWithoutCertificates: +\<boolean>
      allowInvalidCertificates: +\<boolean>
      allowInvalidHostnames: +\<boolean>
      disabledProtocols: +\<string>
      FIPSMode: +\<boolean>
   compression:
      compressors: +\<string>
   transportLayer: +\<string>
   serviceExecutor: +\<string>
    unixDomainSocket:
      enabled: +\<boolean>
      pathPrefix: +\<string>
      filePermissions: +\<int>


security:
   keyFile: +\<string>
   clusterAuthMode: +\<string>
   authorization: +\<string>
   transitionToAuth: +\<boolean>
   javascriptEnabled:  +\<boolean>
   redactClientLogData: +\<boolean>
   sasl:
      hostName: +\<string>
      serviceName: +\<string>
      saslauthdSocketPath: +\<string>
   enableEncryption: +\<boolean>
   encryptionCipherMode: +\<string>
   encryptionKeyFile: +\<string>
   kmip:
      keyIdentifier: +\<string>
      rotateMasterKey: +\<boolean>
      serverName: +\<string>
      port: +\<string>
      clientCertificateFile: +\<string>
      clientCertificatePassword: +\<string>
      serverCAFile: +\<string>
   ldap:
      servers: +\<string>
      bind:
         method: +\<string>
         saslMechanisms: +\<string>
         queryUser: +\<string>
         queryPassword: +\<string>
         useOSDefaults: +\<boolean>
      transportSecurity: +\<string>
      timeoutMS: +\<int>
      userToDNMapping: +\<string>
      authz:
         queryTemplate: +\<string>
