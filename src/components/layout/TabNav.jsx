import { NavLink } from 'react-router-dom'
import { pages } from '../../data/pages'

export default function TabNav() {
  return (
    <nav className="mt-3 shrink-0 border-y-2 border-[#2c2c2c] bg-[#fffdf5] px-4 py-2">
      <div className="tab-scroll flex gap-3 overflow-x-auto">
        {pages.map((page, index) => (
          <NavLink
            className={({ isActive }) =>
              ['tab-chip', `tab-chip-${(index % 8) + 1}`, isActive ? 'is-active' : ''].join(' ')
            }
            key={page.path}
            to={page.path}
          >
            {page.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
