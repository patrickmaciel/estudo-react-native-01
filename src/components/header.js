import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.headerView}>
                <Text style={styles.header}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerView: {
        backgroundColor: '#56b46b',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    header: {
        fontSize: 20
    }
});
