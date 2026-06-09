# 项目协作说明

## 使用者背景

- 使用者是前端开发人员。
- 使用者不熟悉后端。
- 解释端口、启动服务、构建、部署等偏工程环境的内容时，要用大白话说明，避免只丢命令不解释。

## 项目概览

- 这是一个基于 Next.js 的宠物洗护门店单页预约展示项目。
- 项目名称来自 `package.json`：`codex-demo-pet-grooming`。
- 页面主题是“毛孩子宠物洗护”，用于展示服务、洗护流程、套餐价格、门店信息和预约表单。
- 当前项目偏纯前端展示，没有发现后端接口、数据库或真实表单提交逻辑。
- 预约表单目前只负责让用户填写信息，点击提交后不会把数据保存到服务器。

## 技术栈

- Next.js 13.5.6
- React 18.2.0
- TypeScript
- 全局 CSS 样式，主要写在 `app/globals.css`
- ESLint 使用 Next.js 推荐规则：`next/core-web-vitals`

## 常用命令

```bash
npm install
npm run dev
npm run build
npm run start
npm run lint
```

### 大白话说明

- `npm install`：第一次拿到项目时用，作用是把项目需要的依赖下载到 `node_modules`。
- `npm run dev`：启动本地开发预览。一般会开一个本地网页服务，默认地址通常是 `http://localhost:3000`。
- `npm run build`：检查并打包项目，看看能不能变成正式上线用的版本。
- `npm run start`：启动已经 build 好的正式版本，本地模拟线上运行。
- `npm run lint`：检查代码风格和常见问题。

## 目录结构

```text
.
├── app
│   ├── components
│   │   ├── ProcessCarousel.tsx
│   │   └── VisitDateTimeInput.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public
│   └── assets
│       └── cute-pet-shop-map.png
├── .eslintrc.json
├── next.config.js
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

## 关键文件说明

- `app/page.tsx`：首页主体内容，包含导航、首屏、服务、流程、价格、联系信息和预约表单。
- `app/layout.tsx`：页面外壳和元信息，当前设置了中文页面标题和描述。
- `app/globals.css`：全站样式，包括颜色变量、布局、卡片、表单、轮播图和响应式适配。
- `app/components/ProcessCarousel.tsx`：洗护流程轮播图组件，是客户端组件，会自动轮播，也支持上一张、下一张和分页点点击。
- `app/components/VisitDateTimeInput.tsx`：预约时间输入组件，是客户端组件，默认把预约时间设置为明天早上 9:30。
- `public/assets/cute-pet-shop-map.png`：本地门店位置示意图。
- `README.md`：已有中文项目说明，包含功能、技术栈、运行方式和注意事项。

## 页面功能

- 顶部导航：跳转到服务、流程、价格、联系区域。
- 首屏展示：品牌介绍、预约入口、套餐入口和营业时间提示。
- 服务介绍：基础洁净洗、精致造型修剪、皮毛深层护理。
- 洗护流程：图片轮播、洗前检查、温和清洗、细节护理、吹干反馈。
- 价格套餐：小型犬基础洗、猫咪安静洗护、全身造型套餐。
- 联系预约：门店地址、电话、营业时间、适用宠物、地图和快速预约表单。

## 资源与图片

- 首屏图片和轮播图片使用了外部图片地址，分别来自 Unsplash 和 Pexels。
- 地图图片是本地资源，路径是 `/assets/cute-pet-shop-map.png`。
- 如果上线环境访问外部图片不稳定，建议把外部图片下载到 `public/assets` 后改成本地路径。

## 当前注意事项

- 当前没有真实后端，所以预约表单不会保存数据。
- 如果要做真正预约功能，需要接入后端接口、表单服务或第三方预约系统。
- 修改页面文案优先看 `app/page.tsx`。
- 修改样式和移动端适配优先看 `app/globals.css`。
- 修改页面标题、描述优先看 `app/layout.tsx`。
- 修改轮播图图片和说明优先看 `app/components/ProcessCarousel.tsx`。
- 修改默认预约时间逻辑优先看 `app/components/VisitDateTimeInput.tsx`。

## 协作风格

- 面向这个项目回答问题时，优先用前端视角解释。
- 涉及端口时，可以解释成“电脑本地临时开了一个网页入口，比如 3000 号门”。
- 涉及构建时，可以解释成“把开发状态的代码整理成正式上线能用的版本”。
- 涉及后端时，要明确告诉使用者哪些是前端能做的，哪些需要后端或第三方服务配合。
