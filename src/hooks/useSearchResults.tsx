import { useEffect, useState } from "react"

import yelp from '../api/yelp'
import { Item } from "../types/Item"

export const useSearchResults = () => {
    const [results, setResults] = useState<Item[]>([])
    const [errorMsg, setErrorMsg] = useState('')

    const searchTerm = async (term: string) => {
        try {
            const response = await yelp.get('/search', { 
                params: {
                    term,
                    limit: 50,
                    location: 'London',
                }
            })
            setResults(response.data.businesses)
        } catch (err) {
            setErrorMsg('Something went wrong.')
        }
    }

    useEffect(() => { 
        searchTerm('') 
    }, [])

    return { searchTerm, results, errorMsg }
}
