import { useEffect, useState } from "react"

import yelp from '../api/yelp'
import { Business } from "../types/Business"

export const useResultDetails = (id: string) => {
    const [details, setDetails] = useState<Business | null>(null)
    const [errorMsg, setErrorMsg] = useState('')

    const getDetails = async (id: string) => {
        try {
            const response = await yelp.get<Business>(`${id}`)
            setDetails(response.data)
        } catch (err) {
            setErrorMsg('Something went wrong.')
        }
    }

    useEffect(() => { 
        getDetails(id) 
    }, [])

    return { details, errorMsg }
}
