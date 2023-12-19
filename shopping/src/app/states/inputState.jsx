export const sliceInputState = ((set, get) => ({
    item: '',
    listOfItens: [],
    modalState: false,
    amout: 0,
    prince: 0.00,
    money: 0.00,
    total: 0.00,
    totalPriceItems: 0.00,
    updatePriceItems: (state) => {
        if(Array.isArray(state) ) {
            let totalValue = state.reduce((total, item) => {
                return total + item.price
            }, 0);
            set(() => ({totalPriceItems: totalValue}));
        } else {
            return 0;
        }
    },
    updateMoney: (state) => {
        if(state.length <= 15) {
            set(() => ({money: parseFloat(state).toFixed(2)}))
        } 
    },
    updateTotal: (money, totalPrince) => set(() => ({total: Number(parseFloat(money - totalPrince))})),
    updateItem: (state) => set(() => ({item: state})),
    updateModal: (state) => set(() => ({modalState: state})),
    updateListOfItens: (state) => set((currentState) => ({
        listOfItens: [...currentState.listOfItens, {
            name: state, 
            amout:  Number(parseInt(currentState.amout)),
            price: Number(parseFloat(currentState.prince * currentState.amout).toFixed(2)),
        }
        ], 
        item: '',
        prince: 0.00,
        amout: 0,
    })),
    updateAmout: (state) => set(() => ({amout: state})),
    updadePrince: (state) => set(() => ({prince: state})),
    updateItemDelete: () => set(() => ({listOfItens: []})),
    updateCheck: (func, argumentOfFunc) => {

       if(argumentOfFunc === '' ||argumentOfFunc.length < 4) {
            window.alert("[ERRO] - Nome do produto vazio, tem menos que 4 caracteres ou o nome já existe")
        } else {
            func(argumentOfFunc)
        }

    }
}))