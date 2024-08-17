import React, { useState } from 'react'
import { Button } from './ui/button'
import { createRandomTheme } from '../lib/create-theme-config'
import { useTheme } from 'next-themes'
import { getComputedHSLColor, setColorsProperties } from '../lib/utils'
import { Dices, Lock, UnLock } from './icons';

function RandomBtn() {
    const { systemTheme } = useTheme()
    const [lockPrimary, setLockPrimary] = useState(true);
    const onClickHandler = ()=>{
        const themes = createRandomTheme(lockPrimary ? getComputedHSLColor("--primary"): undefined)
        const theme = themes[systemTheme!] ?? themes.dark
        // const theme = themes.dark
        console.log(theme)
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