import React from 'react'
import { FlatList, Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Item } from '../types/Item'

import { ResultsDetail } from './ResultsDetail'

export const ResultsList = ({ title, items }: { title: string, items: Item[] }) => {
    const navigation = useNavigation()

    if (!items.length) {
        return null
    }

    return (
        <View style={styles.containerStyles}>
            <Text style={styles.titleStyles}>{title}</Text>
            <FlatList horizontal
                showsHorizontalScrollIndicator={false}
                data={items}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Results', { id: item.id })}>
                        <ResultsDetail result={item} />
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyles: {
        marginLeft: 10,
    },
    titleStyles: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    }
})