import { ZustantHydration } from "./states/FixComponent"
import { ItemsShopping } from "./components/itemsShopping"
import { NavBar } from "./components/navBar"
import { Inputs } from "./components/input"
import { Modal } from "./components/modal"

export default function Home() {
  return (
    <ZustantHydration>
      <Modal/>
      <NavBar/>
      <Inputs/>
      <ItemsShopping/>
    </ZustantHydration>
  )
}
