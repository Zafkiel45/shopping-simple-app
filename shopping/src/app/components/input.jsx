'use client'
import { useStore } from "../states/mainState"

export const Inputs = () => {

    // states
    const nameInput = useStore((state) => state.item)
    const updateInput = useStore((state) => state.updateItem)
    const updateListShopping = useStore((state) => state.updateListOfItens)
    const updateItemDelete = useStore((state) => state.updateItemDelete)
    // functions
    const KeyPressFunction = (button) => {
        if(button.key === "Enter") {
            updateListShopping(nameInput)
        }
    }

    return (
        <div className={`w-screen flex gap-2 h-auto bg-transparent p-5`}>
            <input onKeyDown={(button) => KeyPressFunction(button)} className={`border border-zinc-300 rounded-md outline-none shadow-sm w-4/5 placeholder:text-xs px-3 py-1`} placeholder="Digite o nome de um item..." type="text" value={nameInput} onChange={(e) => updateInput(e.target.value)} />
            <button onClick={() => updateListShopping(nameInput)} className={`bg-green-400 flex justify-center items-center w-fit h-fit px-3 py-2 rounded-md shadow-sm`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                </svg>
            </button>
            <button onClick={() => updateItemDelete()} className={`bg-red-400 flex justify-center items-center w-fit h-fit px-3 py-2 rounded-md shadow-sm`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                </svg>
            </button>
        </div>
    )
}