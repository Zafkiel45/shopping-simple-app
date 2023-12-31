'use client'
import { useStore } from "../states/mainState"

export const Inputs = () => {

    // states
    const nameInput = useStore((state) => state.item);
    const updateInput = useStore((state) => state.updateItem);
    const updateItemDelete = useStore((state) => state.updateItemDelete);
    const modalSet = useStore((state) => state.updateModal);
    const listOfItems = useStore((state) => state.listOfItens)
    // functions
    const KeyPressFunction = (button) => {

        let findName = listOfItems.find((item) => {
            return item.name === nameInput
        })

        if(button.key === "Enter") {
            if(findName !== undefined) {
                window.alert('erro')
                return listOfItems
            } else {
                modalSet(true)
            }
        }
    };
    const modalFunction = () => {
        let findItem = listOfItems.find((item) => {
            return item.name === nameInput
        })

        if(findItem == undefined) {
            modalSet(true)
        } else {
            window.alert('erro esse nome já existe')
            return listOfItems
        }
    }

    return (
        <div className={`w-screen flex gap-2 h-auto bg-transparent py-6 px-5`}>
            <input onKeyDown={(button) => KeyPressFunction(button)} className={`border border-zinc-300 rounded-md outline-none shadow-sm w-4/5 placeholder:text-xs px-3 py-1`} placeholder="Digite o nome de um item..." type="text" value={nameInput} onChange={(e) => updateInput(e.target.value)} />
            <button onClick={modalFunction} className={`bg-green-400 flex justify-center items-center w-fit h-fit px-3 py-2 rounded-md shadow-md`}>
                <svg xmlns="http://www.w3.org/2000/svg" height="18" width="16" viewBox="0 0 448 512">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                </svg>
            </button>
            <button onClick={() => updateItemDelete()} className={`bg-red-400 flex justify-center items-center w-fit h-fit px-3 py-2 rounded-md shadow-md`}>
                <svg xmlns="http://www.w3.org/2000/svg" height="18" width="16" viewBox="0 0 448 512">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                </svg>
            </button>
        </div>
    )
}