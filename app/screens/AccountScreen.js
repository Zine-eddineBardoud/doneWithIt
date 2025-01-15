import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import Screen from '../components/Screen';
import ListItem from '../components/lists/ListItem';
import Icon from '../components/Icon';
import colors from '../config/colors';
import ListItemSeparator from '../components/lists/ListItemSeparator';

const menuItems = [
    { title: 'My Listings', icon: { name: 'format-list-bulleted', backgroundColor: colors.primary } },
    { title: 'My Message', icon: { name: 'email', backgroundColor: colors.secondary } },
]

const AccountScreen = () => {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title='Mosh Hamedani'
                    subTitle='programmingwithmosh@gmail.com'
                    image={require('../assets/mosh.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
                        />
                    }
                    ItemSeparatorComponent={ListItemSeparator}
                />
            </View>
            <ListItem
                title='Log Out'
                IconComponent={<Icon name='logout' backgroundColor='#ffe66d' />}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light
    }
});

export default AccountScreen;