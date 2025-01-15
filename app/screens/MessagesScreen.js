import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/lists/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import ListItemsDeleteAction from '../components/lists/ListItemsDeleteAction';

const initialMessages = [
    { id: 1, title: 'Mosh Hamedani', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using', image: require('../assets/mosh.jpg') },
    { id: 2, title: 'Mosh Hamedani', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using', image: require('../assets/mosh.jpg') }
];

const MessagesScreen = () => {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        const newMessages = messages.filter(m => m.id !== message.id);
        setMessages(newMessages);
    }

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id}
                renderItem={({ item }) =>
                    <ListItem
                        image={item.image}
                        title={item.title}
                        subTitle={item.description}
                        onPress={() => console.log(item.title)}
                        renderRightActions={() => (
                            <ListItemsDeleteAction onPress={() => handleDelete(item)} />
                        )}
                    />
                }
                ItemSeparatorComponent={<ListItemSeparator />}
                refreshing={refreshing}
                onRefresh={() => setMessages([
                    { id: 2, title: 'Mosh Hamedani', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using', image: require('../assets/mosh.jpg') }
                ])}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({

})

export default MessagesScreen;
