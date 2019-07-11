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

**1、react-native-splash-screen**

使用react-native-splash-screen，集成的时候需要注意
在Android中的MainApplication的getPackages方法中本模块已经自动添加好了，
在iOS中LaunchImage 或者 LaunchScreen.xib都可以作为启动页使用，注意使用时有两个地方需要设置(
[集成地址：](https://www.jianshu.com/p/4540ac17dfd4))
不需要重复添加。否则会报错（这个特性在RN0.60.0中有，其他版本不知）

**2、集成react-navigation**

**注意事项**

设置header隐藏，也可以在每一个screen,代码如下
```$xslt
const navigator = createStackNavigator(page, {
    //设置所有的header的默认样式
    defaultNavigationOptions: {
        header: null,
    },
    initialRouteName: 'Home',
});

 Home: {
        screen: Home,
        navigationOptions:{
            header: null
        }
    },
```

如果想在一个app中既有抽屉模式也有底部标签栏等可以如下设置
```$xslt
const MyDrawerNavigator = createDrawerNavigator({
    MyHomeScreen: {
        screen: MyHomeScreen,
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
}, {
    drawerWidth: 375,
    initialRouteName: 'MyHomeScreen',
});

const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Settings: SettingsScreen,
});

const page = {
    Home: {
        screen: Home,
        navigationOptions:{
            header: null
        }
    },
    DrawerPage: {
        screen: MyDrawerNavigator,
    },
    TabNavigator: {
        screen: TabNavigator,
    },
};
```


