import { useEffect, useState } from "react";

export function useIsMount(){
    const [isMount, setIsMount] = useState(false);
    useEffect(() => {
        setIsMount(true)
    }, []);

    return isMount
}

export const useIsClient = useIsMount