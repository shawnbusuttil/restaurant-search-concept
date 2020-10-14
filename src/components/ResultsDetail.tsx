import React from 'react'
import { Image, Text, StyleSheet, View } from 'react-native'

import { Item } from '../types/Item'

export const ResultsDetail = ({ result }: { result: Item }) => {
    return (
        <View style={styles.containerStyles}>
            <Image source={{ uri: result.image_url }} style={styles.imageStyles} />
            <Text style={styles.nameStyles}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyles: {
        marginRight: 10,
        marginBottom: 10,
    },
    imageStyles: {
        width: 250,
        height: 120,
        borderRadius: 4,
    },
    nameStyles: {
        fontWeight: 'bold',
        marginVertical: 5,
    }
})