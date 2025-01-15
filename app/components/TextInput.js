import { StyleSheet, View, TextInput } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import defaultStyles from '../config/styles';

const TextInput = ({ icon, ...otherProps }) => {
    return (
        <View style={styles.container}>
            {icon &&
                <MaterialCommunityIcons
                    name={icon}
                    size={20}
                    color={defaultStyles.colors.medium}
                    style={styles.icon}
                />
            }
            <TextInput
                placeholderTextColor={defaultStyles.colors.medium}
                style={defaultStyles.text}
                {...otherProps}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 14,
        padding: 4,
        marginVertical: 10,
        alignItems: 'center'
    },
    icon: {
        marginRight: 8
    }
});

export default TextInput;