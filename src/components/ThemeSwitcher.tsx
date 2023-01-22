import { useTheme } from 'next-themes'
// @ts-ignore
import { UilBolt } from '@iconscout/react-unicons'

export default function ThemeSwitcher() {
  const {theme, setTheme} = useTheme()
  return (
    <button aria-label="Toggle Dark Mode" type="button"  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      <UilBolt />
    </button>
  )
}