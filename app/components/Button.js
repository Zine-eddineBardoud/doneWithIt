import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../config/colors'

const Button = ({ title, onPress, color = 'primary' }) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        margin: 4,
        width: '100%'
    },
    title: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})

export default Button