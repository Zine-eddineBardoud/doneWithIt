import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from './Text';

const PickerItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>{item.label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
    }
});

export default PickerItem;