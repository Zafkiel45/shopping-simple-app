'use client'
import { useStore } from "../states/mainState"

export const ItemsShopping = () => {

    const items = useStore((state) => state.listOfItens)

    return (
        <div>
            <ol className={`w-screen border-t flex gap-2 flex-col items-center border-t-gray-200 pt-4 px-2 pb-2`}>
                {items.map((element, index) => {
                    return (
                        <>
                            <li key={element.name} className={`w-[90%] bg-gray-100 border border-gray-200 shadow-md rounded-md px-4 py-2`} >
                                {element.name}
                            </li>
                        </>
                    )
                })}
            </ol>
        </div>
    )
}