'use client'
import { useStore } from "../states/mainState"

export default function Page() {

    const listOfItens = useStore((state) => state.listOfItens);
    const princeItems = useStore((store) => store.totalPriceItems);
    const updadeItems = useStore((store) => store.updatePriceItems)
    const currentMoney = useStore((state) => state.money)
    const updateMoney = useStore((state) => state.updateMoney)
    const updateTotal = useStore((state) => state.updateTotal)
    const total = useStore((state) => state.total)
    const calcFinal = () => {
        updadeItems(listOfItens);
        updateTotal(currentMoney, princeItems);
    }

    return (
        <div className="flex flex-col gap-5 items-center  h-screen w-screen">
            <div className="flex relative top-0 right-0 rounded-b-xl  flex-col justify-center items-center shadow-sm bg-black text-white w-full h-[300px]">
                <div className="flex flex-col items-center">
                    <div className="text-xl rounded-lgw-fit h-fit px-4 py-1 font-medium">
                        Seu orçamento:
                    </div>
                    <div className="text-2xl rounded-lg  w-fit h-fit px-4 py-1">
                        $ {currentMoney}
                    </div>
                </div>
            </div>
            <div className="w-full gap-2 flex flex-col justify-center items-center">
                <label htmlFor="money">Digite seu orçamento:</label>
                <input  onChange={(e) => updateMoney(e.target.value)} className="border-gray-300 border shadow-sm px-3 py-1 rounded-sm" type="number" id="money" />
            </div>
            <div>
                <button onClick={calcFinal} className="w-it h-fit bg-gray-300 shadow-lg rounded-lg px-4 py-1">
                    Calcular
                </button>
            </div>
            <div>
                Gastos: {total}
            </div>
        </div>
    )
}