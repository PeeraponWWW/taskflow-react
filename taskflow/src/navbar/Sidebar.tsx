import { NavLink } from "react-router-dom";
import type { sidebarItem } from "../types/sidebarItem";

interface SidebarProp {
    items: Array<sidebarItem>
}

function Sidebar({ items }: SidebarProp) {
    return (
        <div className="w-full h-full pb-2 border-b border-b-gray-300">
            {items.map((item, index) => (
                <NavLink
                    key={`${item.name} is ${index + 1}`}
                    to={item.path}
                    className={({ isActive }) => `flex items-center gap-2 px-2 py-1 rounded-md ${isActive ? 'text-blue-500 bg-blue-100' : ''}`}

                >
                    <p>{item.icon}</p>
                    <p className="first-letter:uppercase text-sm">{item.name}</p>
                </NavLink>
            ))}
        </div>
    );
};

export default Sidebar;