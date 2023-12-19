export const sliceInputState = ((set, get) => ({
    item: '',
    listOfItens: [],
    modalState: false,
    updateModal: (state) => set(() => ({modalState: state})),
    updateListOfItens: (state) => set((currentState) => ({
        listOfItens: [...currentState.listOfItens, {
            name: state, 
            amout:  Number(parseInt(currentState.amout)),
            price: Number(parseFloat(currentState.prince * currentState.amout).toFixed(2)),
        }
        ], 
        item: '',
        prince: '',
        amout: '',
    })),
    updateItemDelete: () => set(() => ({listOfItens: []})),
    updateCheck: (func, argumentOfFunc) => {

       if(argumentOfFunc === '' ||argumentOfFunc.length < 4) {
            window.alert("[ERRO] - Nome do produto vazio, tem menos que 4 caracteres ou o nome já existe")
        } else {
            func(argumentOfFunc)
        }

    }
}))