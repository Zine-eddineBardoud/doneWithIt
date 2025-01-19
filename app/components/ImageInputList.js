import { ScrollView, StyleSheet, View } from 'react-native';
import ImageInput from './ImageInput';
import { useRef } from 'react';

function ImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {
    const scrollView = useRef();

    return (
        <View>
            <ScrollView horizontal ref={scrollView} onContentSizeChange={() => scrollView.current.scrollToEnd()}>
                <View style={styles.container}>
                    {imageUris.map((uri) => (
                        <View key={uri} style={styles.image}>
                            <ImageInput
                                imageUri={uri}
                                onChnageImage={() => onRemoveImage(uri)}
                            />
                        </View>
                    ))}
                    <ImageInput onChnageImage={(uri) => onAddImage(uri)} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    image: {
        marginRight: 10,
    },
});

export default ImageInputList;