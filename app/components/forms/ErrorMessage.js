import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Text from '../Text'

const ErrorMessage = ({ error, visible }) => {
    if (!error || !visible) return null;

    return (
        <Text
            style={styles.error}
        >
            {error}
        </Text>
    )
}

const styles = StyleSheet.create({
    error: {
        color: 'red'
    }
})

export default ErrorMessage