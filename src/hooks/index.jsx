import { useState, useEffect } from 'react'

export function useFetch(url) {
    const [data, setData] = useState()
    const [error, setError] = useState(false)

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(url)
                const logements = await res.json()
                setData(logements)
            } catch (err) {
                setError(true)
            }
        }
        fetchData()
    }, [url])
    return { data, error }
}
