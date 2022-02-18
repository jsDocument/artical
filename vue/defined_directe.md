# 指令

- Vue.directive来定义全局指令，这种方式定义的指令会被存放在Vue.options['directives']中
- 在组件内的directive选项中定义专为该组件使用的局部指令，这种方式定义的指令会被存放在vm.$options['directives']中
