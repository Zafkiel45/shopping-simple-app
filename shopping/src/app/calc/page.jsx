'use client'
import { useStore } from "../states/mainState"
import { useEffect } from "react";
import { ZustantHydration } from "../states/FixComponent";

export default function Page() {

    const listOfItens = useStore((state) => state.listOfItens);
    const princeItems = useStore((store) => store.totalPriceItems);
    const updadeItems = useStore((store) => store.updatePriceItems);
    const currentMoney = useStore((state) => state.money);
    const updateMoney = useStore((state) => state.updateMoney);
    const updateTotal = useStore((state) => state.updateTotal);
    const total = useStore((state) => state.total);
    const Check = {
        isZero: total === 0 ? 'hidden': 'block',
        isLowerZero: total < 0 ? 'bg-red-400': 'bg-green-400',
        fontStyle: total < 0 ? 'text-white': 'text-[#242424]'
    }

    useEffect(() => {
        updadeItems(listOfItens);
    }, [currentMoney, listOfItens]);
    const calcFinal = () => {
        updateTotal(currentMoney, princeItems);
    }
    const updateMoneyAndItems = (e) => {
        updateMoney(e.target.value)
    }

    return (
        <ZustantHydration>
            <div className="flex flex-col gap-5 items-center h-screen w-screen">
                <div className="flex  rounded-b-xl  flex-col justify-center p-3 items-center shadow-sm bg-black text-white w-full h-[300px]">
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
                    <input  onChange={(e) => updateMoneyAndItems(e)} className="border-gray-300 border shadow-sm px-3 py-1 rounded-sm" type="number" id="money" />
                </div>
                <div>
                    <button onClick={calcFinal} className="w-it h-fit bg-gray-300 shadow-lg rounded-lg px-4 py-1">
                        Calcular
                    </button>
                </div>
                <div className={`${Check.isZero} ${Check.isLowerZero} w-4/5 p-4 gap-4 rounded-md shadow-sm flex flex-col items-center justify-center ${Check.fontStyle} font-medium`}>
                    Sobra: $ {total}
                    <hr className={`w-full`} />
                    {!Check.isLowerZero ? (
                        <>
                            Seu saldo é o suficiente para efetuar está compra! Gaste com 
                            moderação. 
                        </>
                    ):(
                        <>
                            Seu saldo é insufiente para efetuar está compra, por favor, remova 
                            algum produto da lista ou reveja as necessidades de efetuar está 
                            compra.
                        </>
                    )}
                </div>
                <div className={`${Check.isZero} flex pb-4 justify-center w-full`}>
                    <ol className={`flex flex-col items-center gap-3 w-4/5 h-full overflow-y-scroll`}>
                        {listOfItens.map((item) => {
                            return (
                                <li className="flex rounded-md px-3 py-2 w-full justify-between bg-gray-200 shadow-sm">
                                    <div>
                                        {item.name} 
                                    </div>
                                <div className="text-green-500 font-bold">${item.price}</div></li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        </ZustantHydration>
    )
}