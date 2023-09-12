import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"

function HeaderLayout() {
  return (
    <div>
        <Header/>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export {HeaderLayout}