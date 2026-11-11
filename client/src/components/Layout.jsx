import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Layout() {
  return (
    <div className="min-h-screen bg-brand-50 text-gray-900 dark:bg-night dark:text-white">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout