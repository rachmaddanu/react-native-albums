import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [] }; //state adalah variabel (namun reserved keyword) yang dapat menyimpan macam2 jenis data

    componentWillMount() {
        //console.log('will mount');

        axios.get('http://59ed5606ff7d5d00128e085a.mockapi.io/api/albums')
            .then((response) => {
                this.setState({ albums: response.data });
            });
    }

    renderAlbums() {
        if (this.state.albums.length > 0) {
            return this.state.albums.map((data1, index) => //{
                //return(
                    //<View style={{padding: 20}} key={data1.title}>
                    //    <Text> {data1.title} </Text>
                    //</View>
                    <AlbumDetail key={index} album={data1} />
                //);
            );
        }
    }

    render() {
            //console.log('render albums', this.state.albums);

            return (
                <ScrollView>
                    {this.renderAlbums()}
                </ScrollView>
            );
    }
}

export default AlbumList;
