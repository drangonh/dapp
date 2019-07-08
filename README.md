# dapp
## 新建项目
*使用react-native init dapp创建最新版本的react native app*

### Android打包设置
**x86 / x86_64: x86 架构的手机都会包含由 Intel 提供的称为 Houdini 的指令集动态转码工具，实现 对 arm .so 的兼容，再考虑 x86 1% 以下的市场占有率，x86 相关的两个 .so 也是可以忽略的**

**Run Proguard to shrink the Java bytecode in release builds.
  //设置为true可以减小apk大小
  def enableProguardInReleaseBuilds = true**
  
**Set this to true to create two separate APKs instead of one:
   [Tab][Tab] - An APK that only works on ARM devices
   [Tab][Tab]- An APK that only works on x86 devices
   [Tab][Tab]The advantage is the size of the APK is reduced by about 4MB.
   [Tab][Tab]Upload all the APKs to the Play Store and people will download
   [Tab][Tab]the correct one based on the CPU architecture of their device.
  [Tab][Tab]def enableSeparateBuildPerCPUArchitecture = true
  [Tab][Tab]配置enableSeparateBuildPerCPUArchitecture可以打包出多个适合各个架构的apk，每个apk体积会很小**
  
### 新增插件
**使用**
