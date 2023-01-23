import { useTheme } from 'next-themes'
import { UilSun } from '@iconscout/react-unicons'
import { UilMoon } from '@iconscout/react-unicons'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      aria-label={`Toggle ${theme === 'dark' ? 'light' : 'dark'} theme mode`}
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <UilSun /> : <UilMoon />}
    </button>
  )
}
