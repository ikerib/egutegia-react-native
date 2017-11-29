/**
 * @flow
 */

import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {DrawerNavigator, StackNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                // source={require('./chats-icon.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };
    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({ tintColor }) => (
            <Image
                // source={require('./notif-icon.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <View>
                <Text>Froga</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('DrawerToggle')}
                    title="Drawler"
                />
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back home"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

const SimpleApp = DrawerNavigator({
    Home: {
        screen: HomeScreen,
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
});

export default class App extends React.Component {
    render() {
        return <SimpleApp />;
    }
}
