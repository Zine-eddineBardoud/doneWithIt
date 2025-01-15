import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from './Icon';
import Text from './Text';

const CategoryPickerItem = ({ item, onPress }) => {
    return <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
            <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
            <Text style={styles.label}>{item.label}</Text>
        </TouchableOpacity>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 30,
        alignItems: 'center',
        width: '33%'
    },
    label: {
        marginTop: 5,
        textAlign: 'center'
    }
})

export default CategoryPickerItem