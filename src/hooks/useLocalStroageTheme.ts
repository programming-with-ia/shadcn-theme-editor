import React, { useEffect, useState } from 'react'

function useLocalStroageTheme(theme?:string) {
    const [isLocalThemeApply, setIsLocalThemeApply] = useState(false);
    useEffect(() => {
        
    }, [theme]);
  return {isLocalThemeApply}
}

export default useLocalStroageTheme