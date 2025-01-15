import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Text from '../components/Text'
import colors from '../config/colors'
import ListItem from '../components/lists/ListItem'

const ListingDetailsScreen = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/jacket.jpg')} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>Red Jacket for sale</Text>
                <Text style={styles.price}>$100</Text>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require('../assets/mosh.jpg')}
                        title='Mosh Hamedani'
                        subTitle='5 Listing'
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        marginVertical: 10
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20
    },
    userContainer: {
        marginVertical: 40
    }
})

export default ListingDetailsScreen;
