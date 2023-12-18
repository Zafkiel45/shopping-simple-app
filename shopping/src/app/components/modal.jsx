'use client'
import { useStore } from "../states/mainState"

export const Modal = () => {

    // states
    const modalState = useStore((state) => state.modalState)
    const updateList = useStore((state) => state.updateListOfItens)
    const nameItem   = useStore((state) => state.item)
    const updateModal = useStore((state) => state.updateModal);
    const updateCheck = useStore((state) => state.updateCheck)
    // functions
    function addItemShopping() {
        updateCheck(updateList, nameItem)
        updateModal(false)
    }
    return (
        <div className={`${modalState ? 'flex':'hidden'} flex flex-col items-center gap-4 z-20 absolute top-0 left-0 w-screen h-screen bg-gray-100 `}>
            <div className="flex py-3 justify-between w-full bg-black shadow-md text-white px-2">
                <div className="h-4 w-3">
                    <button>
                    </button>
                </div>
                <div className="font-medium ">
                    <p>
                        Detalhes do produto
                    </p>
                </div>
                <div onClick={() => updateModal(false)} className=" flex items-center p-1 justify-center rounded-full w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="16" width="12" viewBox="0 0 384 512">
                        <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
                    </svg>
                </div>
            </div>
            <div className="flex flex-col w-4/5 gap-2">
                <label htmlFor="amout" className="text-sm font-bold italic">Quantidade</label>
                <input type="number" name="" id="amount" className="w-full py-1 px-3 rounded-lg shadow-sm border border-gray-200 outline-none placeholder:text-gray-300" />
                <label htmlFor="price" className="text-sm font-bold italic">Preço</label>
                <input type="number" id="price" className="w-full py-1 px-3 rounded-lg shadow-sm border border-gray-200 outline-none placeholder:text-gray-300" />
            </div>
            <div className="w-full text-white font-medium flex justify-center items-center">
                <button onClick={addItemShopping} className="w-fit h-fit px-5 py-2 bg-black shadow-sm rounded-md cursor-pointer outline-none">
                    Adicionar
                </button>
            </div>
        </div>
    )
}