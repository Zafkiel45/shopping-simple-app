'use client'
import { useStore } from "../states/mainState"

export const Inputs = () => {

    const nameInput = useStore((state) => state.item)
    const updateInput = useStore((state) => state.updateItem)
    const updateListShopping = useStore((state) => state.updateListOfItens)

    return (
        <div className={`w-screen flex gap-4 h-auto bg-transparent px-5 py-3`}>
            <input className={`border border-zinc-300 rounded-md outline-none shadow-sm w-4/5 placeholder:text-xs px-3 py-1`} placeholder="Digite o nome de um item..." type="text" value={nameInput} onChange={(e) => updateInput(e.target.value)} />
            <button onClick={() => updateListShopping(nameInput)} className={`bg-green-400 flex justify-center items-center w-fit h-fit px-3 py-1 rounded-md shadow-sm`}>
                +
            </button>
        </div>
    )
}