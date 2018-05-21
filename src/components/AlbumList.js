import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default class AlbumList extends React.Component {
    state = {
        albums: []
    };

    // https://rallycoding.herokuapp.com/api/music_albums
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({albums: response.data}));
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <Text key={album.title}>{album.title}</Text>);
    }

    render() {
        console.log(this.state);
        return (
            <View>
                <Text>Album List!!!</Text>
                {this.renderAlbums()}
            </View>
        );
    }
}

const styles = StyleSheet.create({

});
