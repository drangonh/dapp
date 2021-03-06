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
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


export default class index extends Component {
    render() {
        return (
            <Fragment>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView>
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>
                        <Header/>
                        <View style={styles.body}>
                            <View style={styles.sectionContainer}>
                                <Text style={styles.sectionTitle}>Step 1</Text>
                                <Text style={styles.sectionDescription}>
                                    Edit <Text style={styles.highlight}>App.js</Text> to change this
                                    screen and then come back to see your edits.
                                </Text>
                            </View>
                            <View style={styles.sectionContainer}>
                                <Text style={styles.sectionTitle}>See Your Changes</Text>
                                <Text style={styles.sectionDescription}>
                                    <ReloadInstructions/>
                                </Text>
                            </View>
                            <View style={styles.sectionContainer}>
                                <Text style={styles.sectionTitle}>Debug</Text>
                                <Text style={styles.sectionDescription}>
                                    <DebugInstructions/>
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.navigate('DrawerPage');
                                }}
                                style={styles.sectionContainer}>
                                <Text style={styles.sectionTitle}>Learn More</Text>
                                <Text style={styles.sectionDescription}>
                                    Read the docs to discover what to do next:
                                </Text>
                            </TouchableOpacity>
                            <LearnMoreLinks/>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </Fragment>
        );
    }

};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
});
