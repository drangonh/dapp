import {
    createAppContainer,
    createBottomTabNavigator,
    createDrawerNavigator,
    createStackNavigator,
} from 'react-navigation';

//抽屉布局
import {MyNotificationsScreen, MyHomeScreen} from '../page/drawer';

//一般布局
import Home from '../page/index';

//底部标签布局
import {HomeScreen, SettingsScreen} from '../page/bottomNavigator';

//流布局

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

const navigator = createStackNavigator(page, {
    //设置所有的header的默认样式
    defaultNavigationOptions: {
        // header: null,
    },
    initialRouteName: 'Home',
});

export default createAppContainer(navigator);
