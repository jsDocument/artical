### CI 我的项目里需要完成的功能

+ CI 接入功能包括：github-action 需要完成的工作
  + 进行检查分支
  + npm ci 校验 lock 文件
  + 安装包，先检查缓存
  + 对 Commit message 进行检查
  + 执行 ESLint 检查
  + 执行 编译
  + 执行测试用例 jest
  + 执行 预览

```yaml
# 关于本次 workflow 的名字
name: CI Env check

# 执行 CI 的时机: 当 git push 代码到 github 时
on:
  push:
    branches:
      - feature-*

# 执行所有的 jobs
jobs:
  env:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: echo $CI
      - run: echo $GITHUB_REPOSITORY
      - run: echo $GITHUB_EVENT_NAME
      - run: echo $GITHUB_SHA
      - run: echo $GITHUB_REF_NAME
      - run: echo $GITHUB_HEAD_REF
      - name: Dump GitHub context
        run: echo '${{ toJSON(github) }}'
  install:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: 16.x
      - name: Cache Node Modules
        id: cache-node-modules
         # 使用 cache action 进行目录资源缓存
        uses: actions/cache@v2
        with:
          # 对 node_modules 目录进行缓存
          path: node_modules
          # 根据字段 node-modules- 与 yarn.lock 的 hash 值作为 key
          # 当 yarn.lock 内容未发生更改时，key 将不会更改，则命中缓存
          # 如果使用 npm 作为包管理工具，则是 package-lock.json
          key: node-modules-${{ hashFiles('yarn.lock') }}
          restore-keys: node-modules-
      # 查看缓存是否设置成功，输出 node_modules 目录
      - name: Check Install/Build Cache
        run: ls -lah node_modules | head -5
      - name: Install Dependencies
        # 如果命中 key，则直接跳过依赖安装
        if: steps.cache-node-modules.outputs.cache-hit != 'true'
        run: yarn
  lint:
    runs-on: ubuntu-latest
    needs: install
    steps:
      # 切出代码，使用该 Action 将可以拉取最新代码
      - uses: actions/checkout@v3

      # 配置 node.js 环境，此时使用的是 node14
      # 注意此处 node.js 版本，与 Docker 中版本一致，与 package.json 中 engines.node 版本一致
      # 如果需要测试不同 node.js 环境下的表现，可使用 matrix
      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: 16.x

      # 安装依赖
      - name: Cache Node Modules
        id: cache-node-modules
        uses: actions/cache@v2
        with:
          path: node_modules
          key: node-modules-${{ hashFiles('yarn.lock') }}
          restore-keys: node-modules-
      - name: ESLint
        run: npm run build

      - name: Test
        run: npm run test

  preview:
    runs-on: ubuntu-latest
    needs: [lint]
    environment:
      # 获取 CICD 中的变量: Context
      # https://docs.github.com/en/actions/learn-github-actions/expressions
      name: preview/${{ github.ref_name }}
      url: https://${{ github.ref_name	}}.cra.shanyue.tech
    steps:
       # 切出代码，使用该 Action 将可以拉取最新代码
      - uses: actions/checkout@v2
      - name: Preview
        run: |
          cat preview.docker-compose.yaml | envsubst > docker-compose.yaml
          docker-compose up --build -d cra-preview-${COMMIT_REF_NAME}
        env:
          COMMIT_REF_NAME: ${{ github.ref_name }}

```
