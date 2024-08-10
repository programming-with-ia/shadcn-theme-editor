import { getColors, ls, setColorsProperties } from '../lib/utils';
import React, { useEffect, useState } from 'react'
import { Item } from './item';
import { ReadonlyThemeWithHSLColor, Theme } from '../lib/theme';
import { themeColors } from '../lib/theme';
import { useTheme } from 'next-themes';
import { useDebounceCallback } from '../hooks/useDebounceCallback';
import z from "zod"
import { Button } from './ui/button';
import { ResetIcon } from '@radix-ui/react-icons'
import { LOCAL_STORAGE_KEY } from '../lib/consts';



const ZodTheme = z.array(z.object({
  title: z.string(),
  variable: z.string(),
  color: z.object({
    h: z.number(),
    s: z.number(),
    l: z.number(),
  })
}))

type shadcnTheme = {
    [K: string]: Theme & {color: string}
}

function SideBarColors() {

    const { resolvedTheme: currentTheme } = useTheme();
    const [colors, setColors] = useState<ReadonlyThemeWithHSLColor[] | undefined>(undefined);
    console.log("Current Theme is: ", currentTheme)
    const saveLocalStorage = useDebounceCallback(
        () => {
          console.log("Saving to localStorage")
          ls.setLocalStorage(LOCAL_STORAGE_KEY+":"+currentTheme, getColors(true))
        },
        4000
      );
      
      useEffect(() => {
        console.log("Reading to localStorage")
        const theme = ls.getLocalStorageItem<ReadonlyThemeWithHSLColor[]>(LOCAL_STORAGE_KEY+":"+currentTheme)
        if (theme){
          try {
            const isValid = ZodTheme.parse(theme)
            console.log("theme is valid and appling", isValid)
            setColorsProperties(theme)
            setColors(theme)
            return 
          } catch (error) {
            console.log("invalid theme found in localStorage")
            // localStorage.removeItem(LOCAL_STORAGE_KEY+":"+currentTheme); //* remove key
          }
      }
      console.log("theme not found in localStorage")
      setColors(getColors(true) as any)
    }, [currentTheme]);
    // console.log("key", colors && colors[0].variable.replace(/^-+/, "")+currentTheme, colors && colors[0].variable.replace(/^-+/, ""))
  return (
    <>
        {
            colors?.map(color=> (
              <Item key={color.variable.replace(/^-+/, "")} onSave={saveLocalStorage} theme={color} />
            ))
        }
    </>
  )
}

export default SideBarColors