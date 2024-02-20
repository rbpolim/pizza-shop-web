import { Home, Pizza, UtensilsCrossed } from 'lucide-react'

import { AccountMenu } from '@/components/account-menu'
import { NavLink } from '@/components/nav-link'
import { ModeToggle } from '@/components/theme/mode-toggle'
import { Separator } from '@/components/ui/separator'

export const Header = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="h-6 w-6" />
        <Separator orientation="vertical" className="h-6" />
        <nav className="flex items-center gap-x-4 lg:gap-x-6">
          <NavLink to="/">
            <Home className="h-4 w-4" />
            Início
          </NavLink>
          <NavLink to="/orders">
            <UtensilsCrossed className="h-4 w-4" />
            Pedidos
          </NavLink>
        </nav>
        <div className="ml-auto flex items-center gap-x-4">
          <ModeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
