# dsh-fc-games

[English](./README.md)

DSH Web 右侧栏里的 FC/NES 游戏库与模拟器。

插件会在左侧全局面板列表中加入 **FC games**。点击后在当前会话的右侧栏打开游戏库标签页；再次点击只聚焦已有标签，不重复创建。右侧栏需要先选中一个会话；没有会话时回退到中央面板。

## 功能

- **多来源搜索**：Internet Archive、GitHub FC 合集，以及任意数量的自定义 JSON 搜索源；支持魂斗罗、超级马里奥、坦克大战等中文别名。
- **添加游戏链接**：粘贴游戏介绍页或直接的 `.nes` / `.zip` 链接，Host 会解析标题、封面、简介和第一个可下载 ROM，生成卡片并存入「链接收藏」。
- **ZIP 支持**：自动从 ZIP 中取出第一个可运行的 `.nes`，解压后校验 iNES 头。
- **卡片操作**：未缓存显示「查看 / 下载」；已缓存显示「继续游戏 / 重新开始」，并提供删除下载（同时清理 ROM、存档和最近记录）。
- **已下载视图**：最近游戏区域可在「全部 / 已下载」之间切换，集中管理本地缓存。
- **模拟器**：基于 [jsnes](https://github.com/bfirsh/jsnes)（Apache-2.0，已内置），支持键盘/手柄、双人、存档槽、自动续玩、快进、倒带、全屏、音量/静音、截图、FPS/速度显示和 Game Genie 金手指。
- **长时间游玩优化**：倒带快照每 3 秒采样一次（6 个槽位），自动存档放到浏览器空闲时执行，音频分批传输，页面或右侧栏标签隐藏时自动暂停。
- **红白机风格界面**：FAMICOM 横幅、CRT 扫描线、卡带式卡片、像素按钮；背景铺满，内容列最大 1200px。

## 安装

从 GitHub 安装（推荐）：

```sh
dsh plugin --profile web add github:flyingfishzxf/dsh-fc-games
```

本地开发时，也可以在 DSH Web 的 Plugin Manager 中安装本目录：

```text
C:\fish\Personal_Apps\dsh-fc-games
```

安装后刷新浏览器以加载新的客户端 bundle。

Host 半部分注册 `/fc-games-api` 令牌保护路由；浏览器通过 Typert Remote `fcGames.bootstrap` 获取随机令牌，不写入持久存储。

## 格式与限制

- 支持 `.nes`（iNES / NES 2.0），以及包含 `.nes` 的 `.zip`；
- 不支持 `.fds`、`.unf` / `.unif`、`.nsf`；
- ZIP 只取第一个可运行条目，解压后上限 8 MB；加密 ZIP / ZIP64 不支持；
- 最终能否运行仍取决于 jsnes 的 mapper 覆盖；
- 自定义链接页面必须直接暴露 `.nes` / `.zip` 下载地址；JS 动态生成、验证码或网盘跳转页面无法解析；
- 仅接受公开 HTTPS 地址，页面最大 2 MB，私网地址会被拒绝。

## 数据与合规

- ROM、存档、截图和自动存档保存在浏览器 IndexedDB / localStorage；插件没有服务端存档。
- 插件不附带 ROM 或封面；搜索元数据与封面来自各公开来源。
- 请只游玩你有权游玩的游戏。

## 开发

```powershell
cd C:\fish\Personal_Apps\dsh-fc-games
node scripts/build.mjs
node --test test/pure.test.mjs test/sources.test.mjs test/zip.test.mjs test/link.test.mjs
node --check index.js
node --check client.js
```

`vendor/jsnes.min.js` 是 jsnes 2.1.0（Apache-2.0），详见 `NOTICE` 和 `vendor/jsnes-LICENSE.txt`。

## License

MIT
