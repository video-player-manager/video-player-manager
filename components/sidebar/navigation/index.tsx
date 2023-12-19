import { SIDENAV_ITEMS, SideNavItem } from "../constants";
import { NavItem } from "./navItem";

export function Navigation({ onClose, isCollapsed, setSidebarCollapsed }: any) {

  console.log("Navigation: ", { isCollapsed })

  return (
    <nav className="flex flex-col gap-0.5">
      {SIDENAV_ITEMS.map((item, index) => {
        return <NavItem key={index} item={item} onClose={onClose} isCollapsed={isCollapsed} setSidebarCollapsed={setSidebarCollapsed} />
      })}
    </nav>
  )
}