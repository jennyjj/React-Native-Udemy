import React, { Component } from 'react';
import { Fetch, View, Text } from 'react-native';
// import axios from 'axios';

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: [] };
  }

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((responseData) => this.setState({ albums: responseData.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => <Text>{album.title}</Text>);
  }

  render() {
    return (
    <View>
      {this.renderAlbums()}
    </View>
    );
  }
}

export default AlbumList;
