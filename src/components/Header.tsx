import ThemeSwitcher from '@/components/ThemeSwitcher'

export default function Header() {
  return (
    <div className="flex justify-between">
      <span>Chips & Salsa</span>
      <ThemeSwitcher />
      <nav>
        nav link
      </nav>
    </div>
  )
}