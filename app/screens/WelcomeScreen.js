import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import AppButton from '../components/Button'
import routes from '../navigation/routes'

const WelcomeScreen = ({ navigation }) => {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}
            blurRadius={4}
        >
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo-red.png')} style={styles.logo} />
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title='Login' onPress={() => navigation.navigate(routes.LOGIN)} />
                <AppButton title='Register' color='secondary' onPress={() => navigation.navigate(routes.REGISTER)} />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    buttonsContainer: {
        padding: 20,
        width: '100%',
    },
    tagline: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20
    }
})

export default WelcomeScreen