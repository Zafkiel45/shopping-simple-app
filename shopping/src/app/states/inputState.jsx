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
    updateItemDelete: () => set(() => ({listOfItens: []}))
}))