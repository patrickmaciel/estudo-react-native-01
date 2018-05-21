import React from 'react';
import {StyleSheet, Text, View, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

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
      <AlbumDetail key={album.title} album={album}/>
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView style={styles.container}>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  header: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  }
});
