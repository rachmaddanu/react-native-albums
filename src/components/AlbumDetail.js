import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
    return(
        <View>
            <Card>
                <CardSection>
                    <View>
                        <Image 
                            style={{ width: 50, height: 50}}
                            source={{ uri: props.album.thumbnail_image }}
                        />
                    </View>

                    <View style={styles.headerContentStyles}>
                        <Text>{props.album.title}</Text>
                        <Text>{props.album.artist}</Text>
                    </View>
                </CardSection>
                
                <CardSection>
                    <Image
                        style = {{ height: 300, flex: 1}}
                        source={{ uri: props.album.image }}
                    />
                </CardSection>
            </Card>
        </View>
    );
}

const styles = {
    headerContentStyles: {
        paddingLeft: 10,
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
}

export default AlbumDetail