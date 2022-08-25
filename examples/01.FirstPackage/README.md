# 创建第一个包

全局安装rollup

```
npm install --global rollup
```

创建第一个包：

```
rollup src/main.js --format cjs
```

指定输出文件：

```
rollup src/main.js --format cjs -object bundle.js
```

