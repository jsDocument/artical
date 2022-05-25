
1.  docker 管理各种服务
   1. nginx
   2. node
   3. oss
2.  k8s 多个项目服务，他们之间的相互协作
   4. Pod 是 k8s 中最小的编排单位，通常由一个容器组成。
   5. Deployment 可视为 k8s 中的部署单元，如一个前端/后端项目对应一个 Deployment。
   6. Deployment 可以更好地实现弹性扩容，负载均衡、回滚等功能。它可以管理多个 Pod，并自动对其进行扩容。
   7. k8s-app.yaml
      1. spec.template: 指定要部署的 Pod
      2. spec.replicas: 指定要部署的个数
      3. spec.selector: 定位需要管理的 Pod
