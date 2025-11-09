import { Outlet } from "react-router-dom"
import NavbarHeaderDesktop from "./navbar/desktop/NavbarHeaderDesktop"
import NavbarHeaderMobile from "./navbar/mobile/NavbarHeaderMobile"

function App() {
  return (
    <div
      className="w-full h-full grid grid-cols-1"
    >
      <div className="header">
          <NavbarHeaderDesktop/>
          <NavbarHeaderMobile/>
      </div>

      <div className="content-section">
        <div className="sidebar">
          sidebar
        </div>
        <div className="main-content">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default App
