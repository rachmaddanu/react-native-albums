import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import CustomButton from './CustomButton';

const AlbumDetail = (props) => {
    const { headerContentStyles } = styles;

    const {
        thumbnail_image,
        title,
        artist,
        image,
        url
    } = props.album;

    const onButtonPressed = () => {
        Linking.openURL(url);
    };

    return (
        <View>
            <Card>
                <CardSection>
                    <View>
                        <Image 
                            style={{ width: 50, height: 50 }}
                            source={{ uri: thumbnail_image }}
                        />
                    </View>

                    <View style={headerContentStyles}>
                        <Text>{title}</Text>
                        <Text>{artist}</Text>
                    </View>
                </CardSection>
                
                <CardSection>
                    <Image
                        style={{ height: 300, flex: 1 }}
                        source={{ uri: image }}
                    />
                </CardSection>

                <CardSection>
                    <CustomButton buttonPressed={onButtonPressed} bgcolor='blue'>
                        Buy {title} Now
                    </CustomButton>
                </CardSection>

            </Card>
        </View>
    );
};

const styles = {
    headerContentStyles: {
        paddingLeft: 10,
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
};

export default AlbumDetail;