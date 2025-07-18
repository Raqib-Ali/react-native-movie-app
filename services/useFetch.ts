import { useEffect, useState } from "react";

const useFetch = <T>(fetch: () => Promise<T>, autoFetch = true) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null)
            const data = await fetch();
            setData(data)
        } catch (err) {
            setError(
                err instanceof Error ? err : new Error('An error occured')
            )
        } finally {
            setLoading(false);
        }
    }

    const reset = () => {
        setData(null);
        setError(null);
        setLoading(false);
    }

    useEffect(() => {
        if (autoFetch) {
            fetchData();
        }
    }, [])

    return { data, loading, error, refetch: fetchData, reset }
}

export default useFetch;