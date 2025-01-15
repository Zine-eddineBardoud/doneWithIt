import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
    Alert,
    Platform,
    StatusBar,
    Dimensions,
    useWindowDimensions,
    ImageBackground,
} from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Button from './app/components/Button';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Icon from './app/components/Icon';
import Screen from './app/components/Screen';
import ListItem from './app/components/lists/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import TextInput from './app/components/TextInput';
import Picker from './app/components/Picker';
import { useState } from 'react';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {
    return (
        <ListingEditScreen />
    );
}
