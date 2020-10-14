import React, { useState } from 'react'
import { ScrollView, Text } from 'react-native'

import { SearchBar } from '../components/SearchBar'
import { ResultsList } from '../components/ResultsList'
import { useSearchResults } from '../hooks/useSearchResults'
import { Item } from '../types/Item'

export const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const { searchTerm, results, errorMsg } = useSearchResults()

    const filterByPrice = (price: string) => {
        return results.filter((item: Item) => item.price === price)
    }

    return (
        <>
            <SearchBar 
                term={term}
                onTermChange={setTerm} 
                onTermSubmit={() => searchTerm(term)} 
            />
            {errorMsg ? <Text>{errorMsg}</Text> : null}
            <ScrollView>
                <ResultsList title='Cheap Eats' items={filterByPrice('£')} />
                <ResultsList title='Deluxe' items={filterByPrice('££')} />
                <ResultsList title='Pricy' items={filterByPrice('£££')} />
            </ScrollView>
        </>
    )
}