import { View, Text } from 'react-native'
import React from 'react'
import Categories from '../../components/categories/Categories'
import Events from '../../components/events/Events'

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Categories />
            <Events navigation={navigation} />
        </View>
    )
}

export default HomeScreen