# 🌌 3D太阳系行星系统

一个精美的3D太阳系模拟器，使用Three.js构建，展示真实的行星位置和运动。

![Solar System Preview](https://img.shields.io/badge/Three.js-r128-blue) ![License](https://img.shields.io/badge/License-MIT-green)

## ✨ 功能特点

- 🌍 **真实行星位置** - 使用NASA JPL数据计算行星位置
- 🪐 **9大行星** - 包含水星到冥王星的所有行星
- 🌙 **卫星系统** - 地球、火星、木星、土星等行星的主要卫星
- 🎨 **高质量贴图** - 使用NASA Solar System Scope的真实行星贴图
- ⏱️ **时间控制** - 可调整日期查看不同时间的行星位置
- 📊 **实时数据** - 支持实时天文数据模式
- 🔍 **交互控制** - 拖动旋转、缩放、点击查看详情
- 📱 **响应式设计** - 适配各种屏幕尺寸

## 🚀 在线演示

[点击这里查看在线演示](https://yourusername.github.io/3d-solar-system)

## 🛠️ 技术栈

- **Three.js** - 3D渲染引擎
- **OrbitControls** - 相机控制
- **NASA JPL Horizons API** - 天文数据
- **Solar System Scope** - 行星贴图

## 📖 使用说明

### 基本操作

- **鼠标拖动** - 旋转视角
- **滚轮** - 缩放视图
- **点击行星** - 查看详细信息
- **下拉菜单** - 选择行星作为中心

### 时间控制

- **选择日期** - 查看特定日期的行星位置
- **步伐选择** - 天/周/月/年
- **前进/后退** - 按步伐调整日期
- **今天** - 快速回到当前日期

### 数据模式

- **实时数据** - 使用NASA JPL实时天文数据
- **模拟模式** - 使用开普勒定律计算

## 🌐 本地运行

1. 克隆仓库
```bash
git clone https://github.com/yourusername/3d-solar-system.git
```

2. 打开文件
```bash
cd 3d-solar-system
# 直接用浏览器打开 3d-solar-system.html
```

或使用本地服务器：
```bash
npx http-server -p 8080
# 然后访问 http://localhost:8080
```

## 📚 行星信息

每个行星都包含详细信息：
- 基本信息（直径、质量、温度等）
- 轨道参数（公转周期、轨道倾角等）
- 趣味知识
- 最新天文发现

## 🤝 贡献

欢迎提交Issue和Pull Request！

## 📄 许可证

MIT License - 可自由使用、修改和分发

## 🙏 致谢

- [Three.js](https://threejs.org/) - 3D渲染库
- [NASA JPL](https://ssd.jpl.nasa.gov/) - 天文数据
- [Solar System Scope](https://www.solarsystemscope.com/) - 行星贴图

---

⭐ 如果喜欢这个项目，请给一个Star！
