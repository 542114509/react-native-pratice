### 踩坑记录

```
  初始化项目后，执行react-native run-ios. 执行失败，报以下错误。
  'config.h' file not found

  原因是xcode10的问题 

  解决方案

  cd node_modules/react-native/scripts && ./ios-install-third-party.sh && cd ../../../
  cd node_modules/react-native/third-party/glog-0.3.5/ && ../../scripts/ios-configure-glog.sh其实执行 .sh 命令之后Terminal界面的一些处理流程，我们不难看出，这个命令是check .h头文件的引用情况，然后建立关联关系
```

```
  下一步 可以监听端口了 默认是8081 但是又报了这个错误

  ** BUILD FAILED **

  The following commands produced analyzer issues:
    Analyze /Users/song/personal-code/react-native-pratice/rn/node_modules/react-native/React/Base/RCTUtils.m normal x86_64
    Analyze /Users/song/personal-code/react-native-pratice/rn/node_modules/react-native/React/Base/RCTModuleMethod.mm normal x86_64
  (2 commands with analyzer issues)


  The following build commands failed:
    Libtool /Users/song/personal-code/react-native-pratice/rn/ios/build/Build/Products/Debug-iphonesimulator/libRCTWebSocket.a normal x86_64
  (1 failure)

  Installing build/Build/Products/Debug-iphonesimulator/rn.app
  No devices are booted.
  Print: Entry, ":CFBundleIdentifier", Does Not Exist

  Command failed: /usr/libexec/PlistBuddy -c Print:CFBundleIdentifier build/Build/Products/Debug-iphonesimulator/rn.app/Info.plist
  Print: Entry, ":CFBundleIdentifier", Does Not Exist

  多用于外网拉rncache文件有缺失 
  解决方案 自己下载一份覆盖 终端拉外网不太全
  https://www.jianshu.com/p/2d656f2a7373

```

```
  不能直接用e6 import 需要加babel插件 这个基础问题不应该出 - -
```

```
  RN本身和WEB页面不一样 不能滑动 需要加ScrollView这种滑动组件
```








