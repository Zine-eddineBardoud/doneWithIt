import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import Text from './Text'

const Card = ({ title, subTitle, image }) => {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 15,
        marginBottom: 20,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        marginBottom: 7
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: 'bold'
    }
})

export default Card