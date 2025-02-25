我打算实现一个微信小程序的商城，我需要实现以下功能：
1. 多端适配。支持 web、H5、微信小程序等，目前用 taro 开发，在 apps/wechat-mall 下。记得和 monorepo 的特性结合起来。
2. pnpm 管理包，monorepo 的架构。
3. packages 里是公共代码、组件， apps 是面对不同的平台、小程序，以及后端。
4. 页面用 vite + react + tsx 来开发。
5. 写完后要添加 README.md，介绍项目的功能、使用方法、开发规范等。
6. 项目要有单元测试、E2E 测试。
7. 项目要有 CI/CD，自动化部署。
8. 项目要有代码规范检查、代码风格检查。

上述先搭建整体的目录结构，然后再逐步实现功能。
1. 后端也在 apps 内一起实现，不单独拆分出来。
2. 后端用 express + typescript + typeorm + mysql 来实现。