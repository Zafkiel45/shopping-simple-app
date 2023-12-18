'use client'
import { useStore } from "../states/mainState"
import Link from "next/link"

export const SideBar = () => {

    const navBarControl = useStore((state) => state.navBarControl)
    const updateNavBarControl = useStore((state) => state.updateNavBarControl)

    return (
        <nav className={`w-[70vw] absolute py-5 top-0 right-0 shadow-md bg-gray-100 h-screen ${navBarControl ? 'flex':'hidden'} ${navBarControl ? 'overflow-hidden': 'overflow-y-scroll'}`}>
            <ol className="w-full flex flex-col gap-3 items-center text-white font-medium">
                <li key={'key_unique_1'} onClick={() => updateNavBarControl(false)} className={`bg-black text-center rounded-sm shadow-sm w-4/5 px-4 py-2`} >X</li>
                <Link className={`bg-black rounded-sm shadow-sm w-4/5 px-4 py-2`} href={'/calc'}>
                    <li key={'key_unique_2'} >Calcular</li>
                </Link>
            </ol>
        </nav>
    )
}