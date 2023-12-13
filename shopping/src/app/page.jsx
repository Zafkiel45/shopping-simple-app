import { ZustantHydration } from "./states/FixComponent"
import { ItemsShopping } from "./components/itemsShopping"
import { NavBar } from "./components/navBar"
import { Inputs } from "./components/input"

export default function Home() {
  return (
    <ZustantHydration>
      <NavBar/>
      <Inputs/>
      <ItemsShopping/>
    </ZustantHydration>
  )
}
