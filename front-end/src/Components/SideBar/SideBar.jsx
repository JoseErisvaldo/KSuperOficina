import { useState } from 'react'
import { 
  ChevronLeft, 
  ChevronRight, 
  LayoutDashboard, 
  Settings, 
  ShoppingCart, 
  Users 
} from "lucide-react"
import { ScrollArea } from '../ui/scroll-area'
import { cn } from '../../lib/lib/utils'
import { Button } from '../ui/button'

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className={cn(
      "flex flex-col h-screen bg-gray-800 text-white transition-all duration-300",
      collapsed ? "w-20" : "w-64"
    )}>
      <div className="flex items-center justify-between p-4">
        {!collapsed && <h1 className="text-2xl font-bold">Logo</h1>}
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight className="h-6 w-6" /> : <ChevronLeft className="h-6 w-6" />}
        </Button>
      </div>
      <ScrollArea className="flex-grow">
        <nav className="space-y-2 p-2">
          <NavItem icon={<LayoutDashboard className="h-5 w-5" />} label="Dashboard" collapsed={collapsed} />
          <NavItem icon={<ShoppingCart className="h-5 w-5" />} label="Products" collapsed={collapsed} />
          <NavItem icon={<Users className="h-5 w-5" />} label="Customers" collapsed={collapsed} />
          <NavItem icon={<Settings className="h-5 w-5" />} label="Settings" collapsed={collapsed} />
        </nav>
      </ScrollArea>
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center space-x-4">
          <img 
            src="/placeholder.svg?height=40&width=40" 
            alt="User avatar" 
            className="rounded-full"
            width={40}
            height={40}
          />
          {!collapsed && (
            <div>
              <p className="font-medium">José Santos</p>
              <p className="text-sm text-gray-400">joseSantos@teste.com</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function NavItem({ icon, label, collapsed }) {
  return (
    <Button 
      variant="ghost" 
      className={cn(
        "w-full flex justify-center items-center",
        collapsed ? "px-2" : "px-4"
      )}
    >
      {icon}
      {!collapsed && <span className="ml-2">{label}</span>}
    </Button>
  )
}