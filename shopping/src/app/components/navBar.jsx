'use client'
import { useStore } from "../states/mainState"


export const NavBar = () => {
    
    const navBarUpdate = useStore((state) => state.updateNavBarControl)
    
    return (
        <header className="bg-black w-screen z-0 h-auto py-3 text-white font-medium text-center px-4">
            <nav className="flex py-1 justify-between items-center">
                <button className="h-[18px] w-[18px]"></button>
                <div>
                    Carrinho de compras
                </div>
                {/* svg */}
                <div onClick={() => navBarUpdate(true)} className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="18" width="18" viewBox="0 0 512 512">
                        <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/>
                </svg>
                </div>
            </nav>
        </header>
    )
}