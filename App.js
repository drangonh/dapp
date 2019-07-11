/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/*
* Fragment可以在组件中增加元素，但是不会增加多余的节点。
* */

import React, {Fragment, Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Router from './src/router';
class App extends Component {
    render() {
        SplashScreen.hide();
        return (
            <Router/>
        );
    }
};

export default App;
