import { Outlet } from "react-router-dom"
import NavbarHeaderDesktop from "./navbar/desktop/NavbarHeaderDesktop"
import NavbarHeaderMobile from "./navbar/mobile/NavbarHeaderMobile"
import Sidebar from "./navbar/Sidebar"
import type { sidebarItem } from "./types/sidebarItem"
import { BoardsIcon } from "./components/icon/icon"




function App() {

  const sidebarItem: Array<sidebarItem> = [
    {name: "boards", path: "/boards", icon: <BoardsIcon classStyle='size-3' />}
  ]

  return (
    <div
      className="w-full h-full grid grid-cols-1"
    >
      {/* Header */}
      <div className="fixed top-0 left-0  z-40">
          <NavbarHeaderDesktop/>
          <NavbarHeaderMobile/>
      </div>


      <div className="fixed top-0 left-0 flex mt-24 min-w-full min-h-screen">
        {/* Sidebar */}
        <div className="hidden md:block w-[20%] h-fit pl-12">
          <Sidebar items={sidebarItem}/>
        </div>
        {/* Content */}
        <div className="w-[80%] h-[calc(100%-100px)]  mx-auto md:px-16">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default App
