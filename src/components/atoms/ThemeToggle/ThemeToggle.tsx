import { forwardRef, useState } from 'react'
import { AnimatePresence, Variants } from 'framer-motion'
import { ThemeImg, SVGContainer } from '../../../elements/ThemeToggle'
import Moon from './Moon'
import Sun from './Sun'

export interface ThemeToggleProps {
  setTheme: React.Dispatch<React.SetStateAction<'dark' | 'light'>>,
  theme: 'dark' | 'light',
  mobileID?: string
}

const myVariants: Variants = {
  hiddenSVG: {
    y: -30,
    opacity: 0
  },
  visibleSVG: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      type: 'spring',
      bounce: 0.55,
      duration: 0.6,
    }
  },
  exitSVG: {
    y: 30,
    opacity: 0,
    transition: {
        type: 'spring',
        duration: 0.75
    },
  },
  hiddenPath :{
    pathLength: 0,
  },
  visiblePath: {
    pathLength: 1,
    transition: {
      delay: 0.1,
      duration: 0.8,
      ease: "easeOut"
    }
  },
  hiddenFill : {
    fillOpacity: 0,
  },
  visibleFill : {
    fillOpacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.8,
    }
  }
}

const ThemeToggle = forwardRef<HTMLDivElement, ThemeToggleProps>(({ setTheme, theme, mobileID = '' }, ref) => {
  const [isClickable, setIsClickable] = useState(true)

  const changeTheme = () => {
    if (isClickable) {
      setIsClickable(false)
      setTheme(theme => theme === 'dark' ? 'light' : 'dark')
      setTimeout(() => {
      setIsClickable(true)
      }, 800)
    }
  }

  return (
    <>
    {mobileID ? (
    <ThemeImg onClick={changeTheme} ref={ref} mobile>
      <SVGContainer>
        <AnimatePresence initial={false}>
          {theme === 'dark'
          ?
          <Moon variants={myVariants} key="MoonDesktop" keyID={`MoonDesktop${mobileID}`} mobile  />
          :
          <Sun variants={myVariants} key="SunDesktop" keyID={`SunDesktop${mobileID}`} mobile />
          } 
        </AnimatePresence>
      </SVGContainer>
      {mobileID && (
        <span>Cambiar tema</span>
      )}
    </ThemeImg>
    )
    : (
    <ThemeImg onClick={changeTheme} ref={ref}>
      <AnimatePresence initial={false}>
        {theme === 'dark'
        ?
        <Moon variants={myVariants} key="MoonDesktop" keyID={`MoonDesktop${mobileID}`}  />
        :
        <Sun variants={myVariants} key="SunDesktop" keyID={`SunDesktop${mobileID}`} />
        } 
      </AnimatePresence>
    </ThemeImg>
    )
    }
    </>
  )
})
 
export default ThemeToggle;
