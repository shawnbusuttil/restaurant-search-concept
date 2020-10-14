import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

type Props = {
    term: string
    onTermChange: (val: string) => void
    onTermSubmit: () => void
}

export const SearchBar = ({ 
    term, 
    onTermChange, 
    onTermSubmit 
}: Props) => {
    return (
        <View style={styles.viewStyle}>
            <Feather name='search' size={30} />
            <TextInput style={styles.inputStyle}
                autoCapitalize='none'
                autoCorrect={false} 
                placeholder='Search' 
                value={term} 
                onChangeText={onTermChange} 
                onEndEditing={onTermSubmit}
                onBlur={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#f0eeee',
        height: 50,
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 5,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    inputStyle: {
        flex: 1,
        marginLeft: 20,
        height: "100%",
    },
})