import { StyleSheet, View, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import defaultStyles from '../config/styles';
import Text from './Text';
import PickerItem from './PickerItem';
import colors from '../config/colors';

const Picker = ({ icon, placeholder, items, onSelectItem, selectedItem, PickerItemComponent = PickerItem, numberOfColumns = 1 }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback
                onPress={() => setModalVisible(true)}
            >
                <View style={styles.container}>
                    {icon &&
                        <MaterialCommunityIcons
                            name={icon}
                            size={20}
                            color={defaultStyles.colors.medium}
                            style={styles.icon}
                        />
                    }
                    {
                        selectedItem
                            ? <Text style={styles.text}>{selectedItem.label}</Text>
                            : <Text style={styles.placeholder}>{placeholder}</Text>
                    }
                    <MaterialCommunityIcons
                        name='chevron-down'
                        size={20}
                        color={defaultStyles.colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>

            <Modal visible={modalVisible} animationType='slide'>
                <Button title='close' onPress={() => setModalVisible(false)} />
                <FlatList
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    numColumns={numberOfColumns}
                    renderItem={({ item }) =>
                        <PickerItemComponent
                            item={item}
                            label={item.label}
                            onPress={() => {
                                setModalVisible(false);
                                onSelectItem(item);
                            }}
                        />
                    }
                />
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
    placeholder: {
        color: defaultStyles.colors.medium,
        flex: 1,
    },
    text: {
        flex: 1,
    },
});

export default Picker;