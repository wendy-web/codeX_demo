# 毛孩子宠物洗护预约页

这是一个基于 Next.js 的宠物洗护门店展示与预约页面。页面包含服务介绍、洗护流程轮播、套餐价格、门店信息、位置示意图和快速预约表单，适合作为宠物美容、宠物洗护门店的单页官网示例。

## 功能内容

- 顶部导航：服务、流程、价格、联系等锚点跳转
- 首屏介绍：品牌说明、预约入口、套餐入口和门店营业提示
- 服务模块：基础洁净洗、精致造型修剪、皮毛深层护理
- 流程模块：洗护图片轮播、洗前检查、清洗护理、吹干反馈
- 价格模块：小型犬基础洗、猫咪安静洗护、全身造型套餐
- 联系预约：门店地址、电话、营业时间、宠物类型选择和预约表单
- 本地静态资源：门店位置示意图位于 `public/assets/cute-pet-shop-map.png`

## 技术栈

- Next.js 13
- React 18
- TypeScript
- CSS Modules 以外的全局样式，样式文件位于 `app/globals.css`

## 项目结构

```text
.
├── app
│   ├── components
│   │   └── ProcessCarousel.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public
│   └── assets
│       └── cute-pet-shop-map.png
├── next.config.js
├── package.json
├── package-lock.json
└── tsconfig.json
```

## 本地运行

先安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

默认访问地址：

```text
http://localhost:3000
```

## 构建与生产运行

生成生产构建：

```bash
npm run build
```

启动生产服务：

```bash
npm run start
```

## 可修改内容

- 页面文案：修改 `app/page.tsx`
- 轮播图片和说明：修改 `app/components/ProcessCarousel.tsx`
- 全局样式和响应式布局：修改 `app/globals.css`
- 页面标题和描述：修改 `app/layout.tsx`
- 门店地图图片：替换 `public/assets/cute-pet-shop-map.png`

## 注意事项

- 当前预约表单只包含前端展示，提交后不会保存数据。如需真实预约功能，需要接入后端接口、表单服务或第三方预约系统。
- 页面中部分图片来自外部图片地址，生产环境中请确保外部资源可访问，或改为本地图片资源。
