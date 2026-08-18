# 星光学习小屋 · 安卓版打包说明

这是一个 Android Studio 工程，把网页版「星光学习小屋」包成安卓 App，安装到小米平板（澎湃OS）上使用。

## 环境要求

- 电脑安装 **Android Studio**（推荐最新稳定版，自带 JDK 17）
- 手机/平板开启"开发者选项"，或用数据线连电脑调试；也可以直接生成 APK 后拷贝安装

## 打包步骤（大约 10 分钟）

1. 打开 Android Studio → **Open** → 选择本文件夹 `StarStudyApp`，等待 Gradle 同步完成（首次会下载 Gradle 8.2 和依赖，需要联网，几分钟）。
2. 菜单 **Build → Build Bundle(s) / APK(s) → Build APK(s)**。
3. 构建完成后，APK 在 `app/build/outputs/apk/debug/`（调试版）或 `app/build/outputs/apk/release/`（正式版）目录下，文件名类似 `app-debug.apk`。
4. 把 APK 传到小米平板（微信/QQ/数据线都行），点开安装（首次安装需允许"未知来源应用"）。

## 已经处理好的关键点

- **本地运行**：网页打包在 App 内部，离线可用，不需要服务器和网络。
- **拍照验证**：WebView 已实现"拍照/相册选择"回调，任务成果拍照功能可用；照片仍只存在 App 本地。
- **数据存储**：星星、手账、来信、任务照片都存在 App 的本地存储里，卸载 App 才会清除；正常升级安装不会丢。
- **防挂机**：切到其他 App 或息屏时，网页的自动暂停逻辑照常生效（App 前台时保持屏幕常亮，避免学习中途息屏）。
- **屏幕常亮**：App 运行期间屏幕不会自动熄灭，方便专注学习。

## 常见问题

- **Gradle 同步失败**：通常是网络问题，检查能否访问 `services.gradle.org` 和 `maven.google.com`，多试几次。
- **安装后打开报 `net::ERR_NAME_NOT_RESOLVED`**：新版已彻底解决——不再通过网址加载网页，而是把打包的 HTML 内容直接读进 WebView（`loadDataWithBaseURL`），完全不解析域名，原理上不会再报这个错。如果安装后还看到同样的报错，说明装的是**旧 APK**：请先在平板设置里卸载旧应用，再安装新 APK，并确认首页顶部显示"版本 3.3"。
- **安装提示"解析包错误"**：确认平板是 64 位系统（2018 年后的小米平板基本都是），或重新构建再装。
- **想改 App 名字/图标**：改 `app/src/main/res/values/strings.xml` 里的名字、替换 `res/mipmap-*` 和 `drawable` 里的图标即可。
- **以后网页更新了**：把最新的 `index.html` 复制到 `app/src/main/assets/www/index.html` 覆盖，再重新 Build 一次 APK 即可。

## 说明

网页文件是单文件版（立绘已内嵌），所以打包时只需要这一个 HTML 文件。`com.example.starstudy` 是默认包名，如需上架可自行修改。
