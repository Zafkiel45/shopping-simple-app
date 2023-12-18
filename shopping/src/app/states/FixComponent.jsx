'use client'
import { useEffect, useState } from "react"

export const ZustantHydration = ({children}) => {
    const [hydrated, setHydrated] = useState(false);
    
    useEffect(() => {
        setHydrated(true)
    }, []);

    return <>{hydrated ? children:null}</>
}