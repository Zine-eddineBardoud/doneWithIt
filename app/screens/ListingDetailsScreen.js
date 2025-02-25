import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import Text from '../components/Text'
import colors from '../config/colors'
import { ListItem } from '../components/lists'

const ListingDetailsScreen = ({ route }) => {
    const listing = route.params;

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={listing.image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{listing.title}</Text>
                <Text style={styles.price}>{listing.price}</Text>
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
