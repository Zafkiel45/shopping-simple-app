export const sliceInputState = ((set, get) => ({
    item: '',
    listOfItens: [],
    modalState: false,
    updateItem: (state) => set(() => ({item: state})),
    updateModal: (state) => set(() => ({modalState: state})),
    updateListOfItens: (state) => set((currentState) => ({
        listOfItens: [...currentState.listOfItens, {name: state}], 
        item: ''
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