### lint

+ 项目中接入 ESLint
  + 版本控制：add `.npmrc` 和 `.nvmrc`，并且 lock 文件也要入库，[配置](#版本控制)
  + 执行 `npm init @eslint/config`，生成 .eslintrc.* 配置文件，进行相应的配置
  + 保存代码格式化：prettier `npm i prettier -D`
  + 代码提交前：lint-staged，执行 `npm i lint-staged -D`，并在package.json中进行规则配置，与定义scripts执行命令
  + husky，定义.git的钩子命令
  + commitlint 做 commit message 校验
+ IDE 编辑器接入
  + 跨编辑器保存一致

------------

#### 版本控制

```bash
node -v > .nvmrc
```

```yaml
engine-strict=true
package-lock=true
registry=https://registry.npmjs.org/
```

package.json

```json
"engines": {
   "node": "16",
   "npm": "8"
}
```

#### prettier 命令

必须结合 `.prettierignore` 使用

```bash
prettier --write .                              # -w
prettier -write --ignore-unknown "src/**/*.js"  # -w -u
prettier -write 'src/**/*.{js,jsx,ts,tsx,json,yml,yaml,css,less,scss,md,html}'

prettier --check "src/**/*.js"                  # -c
prettier --list-different "src/**/*.js"         # -l

# prettier diff
prettier --write '**/?(.)*.{md,css,scss,js,json,yaml,yml}' && git --no-pager diff && git checkout -- .
```

#### lint-staged 配置

```json
"scripts": {
   "lint-staged": "lint-staged --allow-empty"
},
"lint-staged": {
   "*.{js,jsx,ts,tsx,json,yml,yaml,css,less,scss}": [
   "prettier --write"
   ],
   "*.{js,jsx,ts,tsx}": [
   "npm run eslint:fix"
   ]
},
```

husky 安装

```bash
npx husky-init && npm install       # npm
npx husky-init && yarn              # Yarn 1
yarn dlx husky-init --yarn2 && yarn # Yarn 2+
pnpm dlx husky-init && pnpm install # pnpm

或使用

npx auto-husky
```

husky 配置，可以在钩子中执行 lint-staged 进行校验

```bash
# usage 启用 Git 挂钩
npm set-script prepare "husky install"
npm run prepare
# 会将 .git/config 的 hooksPath 进行修改

# Add a hook:
npx husky add .husky/pre-commit "npm test"
npx husky add .husky/pre-commit "npm run lint-staged"
npx husky add .husky/commit-msg 'npx --no commitlint --edit $1' # 这个执行有问题
yarn husky add .husky/commit-msg 'npx --no -- commitlint --edit "${1}"' # 这个可以

# husky uninstall
npm uninstall husky && git config --unset core.hooksPath
```


commitlint 的安装

```bash
# Add hook，与上面在 husky 中添加钩子功能相同
cat <<EEE > .husky/commit-msg
#!/bin/sh
. "\$(dirname "\$0")/_/husky.sh"

npx --no -- commitlint --edit "\${1}"
EEE


# Make hook executable
chmod a+x .husky/commit-msg

```

commitlint 的配置

```js
// commitlint.config.js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [1, 'always', 100],
    // prettier-ignore
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'enhance',
        'chore',
        'test',
        'doc',
        'refactor',
        'style',
        'revert',
      ],
    ],
  },
}
```

测试

```bash
npx commitlint --from HEAD~1 --to HEAD --verbose

echo 'foo: xxx' | npx commitlint --verbose
```

#### ESLint 配置的简要说明

1. 配置的定义：通过 .eslintrc.* 文件配置 或 package.json 文件的 eslintConfig 字段指定配置 或 在命令行运行时指定一个任意的配置文件
2. 特定类型的文件指定处理器，请使用 overrides 键和 processor 键的组合
3. 为指定文件使用 overrides + rules 附加配置
4. plugins：可省略前缀
5. overrides
6. processor 处理器
7. env 环境全局变量
8. globals 全局变量
9. rules
10. settings 在配置文件添加共享设置
11. extends: "eslint:recommended",  standard

