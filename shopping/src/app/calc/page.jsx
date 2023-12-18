'use client'
import { useStore } from "../states/mainState"

export default function Page() {


    const listOfItens = useStore((state) => state.listOfItens);
    const princeItems = useStore((store) => store.totalPriceItems);
    const updadeItems = useStore((store) => store.updatePriceItems)

    return (
        <div className="flex flex-col gap-5 items-center justify-center h-screen w-screen p-4">
            <div className="flex flex-col justify-center items-center rounded-full shadow-sm border-[2px] border-green-400 w-[300px] h-[300px]">
                <div className="text-lg font-medium">
                    Seu orçamento:
                </div>
                <div className="text-xl">
                    $ 1000.000
                </div>
            </div>
            <div>
                <label htmlFor="money">Digite seu orçamento:</label>
                <input className="border-gray-200 border shadow-sm rounded-sm" type="number" id="money" />
            </div>
            <div>
                <button onClick={() => updadeItems(listOfItens)} className="w-it h-fit bg-gray-300 shadow-lg rounded-lg px-4 py-1">
                    Calcular
                </button>
            </div>
            <div>
                Gastos: {princeItems}
            </div>
        </div>
    )
}