import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function ThemeToggle() {
  const { isDark, setIsDark } = useContext(ThemeContext)

  return (
    <button onClick={() => setIsDark(!isDark)} className="text-xl">
      {isDark ? '☀️' : '🌙'}
    </button>
  )
}

export default ThemeToggle