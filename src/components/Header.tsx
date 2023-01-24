import { useState } from 'react'
import { UilBars, UilTimesCircle } from '@iconscout/react-unicons'
import styled from 'styled-components'
import ThemeSwitcher from '@/components/ThemeSwitcher'

interface Props {
  showMobileMenu: boolean
}

const NavMenu = styled.div<Props>`
  position: absolute;
  width: 100%;
  height: 90vh;
  z-index: 50;
  border-radius: 1rem 1rem 0 0;
  bottom: ${(props) => (props.showMobileMenu ? '0px' : '-100vh')};
  transition: bottom 0.5s ease;
  box-shadow: 0 -4px 15px -3px rgba(0 0 0 / 0.5),
    0 4px 6px -4px rgb(0 0 0 / 0.5);
`

export default function Header() {
  const [navMenu, showNavMenu] = useState(false)

  return (
    <>
      <div
        className="fixed lg:relative bottom-0 px-4 py-2 w-full border-t lg:border-t-0 dark:border-zinc-800"
        id="header"
      >
        <div className="flex justify-between">
          <span className="font-bold text-lg self-center text-zinc-900 dark:text-zinc-50">
            Chips &#38; Salsa
          </span>
          <button
            className="w-11 h-11 flex justify-center place-items-center lg:hidden dark:text-zinc-50"
            type="button"
            aria-label="toggle mobile menu"
            onClick={() => showNavMenu(!navMenu)}
          >
            <UilBars size="34" />
          </button>
        </div>
      </div>
      <NavMenu
        showMobileMenu={navMenu}
        className="bg-zinc-50 dark:bg-zinc-800 dark:text-zinc-50"
      >
        <div className="h-11 flex flex-row-reverse p-2">
          <button
            className="text-zinc-900 dark:text-zinc-50 bg-transparent"
            onClick={() => showNavMenu(false)}
          >
            <UilTimesCircle />
          </button>
        </div>
        <div className="p-4">
          Menu
          <ThemeSwitcher />
        </div>
      </NavMenu>
    </>
  )
}
