import React from 'react';
import {StyleSheet, Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;

  return (
    <Card>
      <CardSection>
        <View style={styles.imageView}>
          <Image style={styles.thumbnail} source={{ uri: thumbnail_image }}></Image>
        </View>

        <View style={styles.headerView}>
          <Text style={styles.headerText}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={styles.albumArt} source={{ uri: image }}></Image>
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
}

export default AlbumDetail;

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerText: {
    fontSize: 18
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  thumbnail: {
    height: 50,
    width: 50
  },
  albumArt: {
    height: 300,
    flex: 1,
    width: null
  }
});
