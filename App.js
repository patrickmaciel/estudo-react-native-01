import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

export default class App extends React.Component {
    render() {
        return (
            <View>
                <Header title={'ASUL - LIBRAS'}/>
                <AlbumList/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
