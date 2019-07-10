import {createAppContainer, createStackNavigator} from 'react-navigation';

import Home from '../page/index';

const page = {
    Home: {
        screen: Home,
    },
};


const navigator = createStackNavigator(page);

export default createAppContainer(navigator);
