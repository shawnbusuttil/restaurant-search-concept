import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { RouteProp } from '@react-navigation/native'

import { useResultDetails } from '../hooks/useResultDetails'
import { RootStackParamList } from '../types/Navigation'

export const ResultsScreen = ({ route }: { route: RouteProp<RootStackParamList, 'Results'> } ) => {
    const { details } = useResultDetails(route.params.id)

    if (!details) {
        return null
    }

    return (
        <View style={styles.containerStyles}>
            {details && <Text style={styles.headerStyles}>{details.name}</Text>}
            <FlatList 
                data={details.photos}
                keyExtractor={(photo: string) => photo}
                renderItem={({ item }) => <Image style={styles.imageStyles} source={{ uri: item }} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyles: {
        fontWeight: "bold",
        marginVertical: 10
    },
    containerStyles: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between"
    },
    imageStyles: {
        width: 300,
        height: 200,
        marginVertical: 10
    }
})