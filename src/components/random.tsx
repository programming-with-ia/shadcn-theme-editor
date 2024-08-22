import React, { useState } from 'react'
import { Button } from './ui/button'
import { createRandomTheme } from '../lib/create-theme-config'
import { useTheme } from 'next-themes'
import { getComputedHSLColor, saveTheme, setColorsProperties } from '../lib/utils'
import { Dices, Lock, UnLock } from './icons';
import { ReadonlyThemeWithHSLColor, SystemThemes, themeModes } from '../lib/theme'

function RandomBtn() {
  const { resolvedTheme=""+undefined, systemTheme="dark" } = useTheme();
    const [lockPrimary, setLockPrimary] = useState(true);
    const onClickHandler = ()=>{
      const themes = createRandomTheme(lockPrimary ? getComputedHSLColor("--primary"): undefined)
      let theme;

      if (SystemThemes.includes(resolvedTheme as any)){
        theme = themes[resolvedTheme as themeModes] as ReadonlyThemeWithHSLColor[];
        SystemThemes.forEach(theme=> saveTheme(resolvedTheme, themes[theme])) // save both themes
      } else {
        theme = themes[systemTheme] as ReadonlyThemeWithHSLColor[];
        saveTheme(resolvedTheme, theme)
      }
        setColorsProperties(theme)
    }
    const LockIcon = lockPrimary? Lock: UnLock
  return (
    <Button onClick={onClickHandler} title={'Generate Random theme, Primary is '+(lockPrimary? "locked": "not locked")} variant={"colorbtn"} className='cursor-pointer'>
        <Dices className='size-5' /> Randomize <LockIcon onClick={(e)=>console.log(setLockPrimary(!lockPrimary), lockPrimary, e.stopPropagation())} aria-label={(lockPrimary ?'unlock' : 'lock')+ ' primary color'} className='ml-auto size-6 hover:opacity-80 rounded-md hover:bg-background hover:fill-foreground p-0.5 fill-current'/>
    </Button>
  )
}

export default RandomBtn