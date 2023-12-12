export const sliceInputState = ((set, get) => ({
    item: '',
    listOfItens: [],
    updateItem: (state) => set(() => ({item: state})),
    updateListOfItens: (state) => set((currentState) => ({
        listOfItens: [...currentState.listOfItens, {name: state}], 
        item: ''
    }))
}))