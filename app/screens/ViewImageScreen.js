import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ViewImageScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                resizeMode='contain'
                style={styles.image}
                source={require('../assets/chair.jpg')}
            />

            <View style={styles.closeIcon}>
                <MaterialCommunityIcons
                    name='close'
                    color='white'
                    size={35}
                />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons
                    name='trash-can-outline'
                    color='white'
                    size={30}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    closeIcon: {
        position: 'absolute',
        top: 50,
        left: 20
    },
    deleteIcon: {
        position: 'absolute',
        top: 50,
        right: 20
    }
});

export default ViewImageScreen;