'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebarItemProps {
  href: string
  icon: JSX.Element
  title: string
}

export const SidebarItem = ({ href, icon, title }: SidebarItemProps) => {
  const path = usePathname()
  return (
    <li>
      <Link
        href={href}
        // className='relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400'
        className={`px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group
            hover:bg-gradient-to-r hover:bg-sky-600
            ${
              path === href
                ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400'
                : ''
            }`}
      >
        {icon}
        {/* <span className='-mr-1 font-medium'>{title}</span> */}
        <span className='group-hover:text-white'>{title}</span>
      </Link>
    </li>
  )
}
