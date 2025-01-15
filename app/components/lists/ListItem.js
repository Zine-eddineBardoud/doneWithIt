import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import colors from '../../config/colors';
import Text from '../Text';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ListItem = ({ image, title, subTitle, IconComponent, onPress, renderRightActions }) => {
    return (
        <Swipeable
            renderRightActions={renderRightActions}
        >
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}
            >
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image source={image} style={styles.image} />}
                    <View style={styles.detailsContainer}>
                        <Text style={styles.title} numberOfLines={1}>{title}</Text>
                        {subTitle && <Text style={styles.subTitle} numberOfLines={2}>{subTitle}</Text>}
                    </View>
                    <MaterialCommunityIcons
                        name='chevron-right'
                        size={25}
                        color={colors.medium}
                    />
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white,
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    title: {
        fontWeight: '700'
    },
    subTitle: {
        color: colors.medium
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center',
        flex: 1
    }
})