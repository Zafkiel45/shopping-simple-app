import { ZustantHydration } from "./states/FixComponent"
import { ItemsShopping } from "./components/itemsShopping"
import { NavBar } from "./components/navBar"
import { Inputs } from "./components/input"
import { Modal } from "./components/modal"
import { SideBar } from "./components/sidebar"

export default function Home() {
  return (
    <ZustantHydration>
      <Modal/>
      <NavBar/>
      <Inputs/>
      <ItemsShopping/>
      <SideBar/>
    </ZustantHydration>
  )
}
