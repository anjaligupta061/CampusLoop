import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/marketplace', label: 'Marketplace' },
  { to: '/lost-found', label: 'Lost & Found' },
  { to: '/need-board', label: 'Need Board' },
  { to: '/messages', label: 'Messages' },
]

function Navbar() {
  return (
    <header className="border-b border-brand-100 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-night-card/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="font-heading text-xl font-bold text-brand-600">
          CampusLoop
        </Link>

        <ul className="hidden gap-6 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  isActive
                    ? 'font-semibold text-brand-600'
                    : 'text-gray-600 hover:text-brand-600 dark:text-gray-300'
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar