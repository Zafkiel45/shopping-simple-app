export const SliceMoney = (set, get) => ({
    amout: 0,
    prince: 0.00,
    money: 0.00,
    total: 0.00,
    totalPriceItems: 0.00,
    updateAmout: (state) => {
        if(state <= 100) {
            set(() => ({amout: state}))
        } else {
            window.alert('[ERRO] - O limite de produtos excedeu.')
        }
    },
    updadePrince: (state) => set(() => ({prince: state})),
    updateTotal: (money, totalPrince) => {
        let newTotalValue = Number(parseFloat(money - totalPrince));
        set(() => {
            return {total: newTotalValue}
        })
    },
    updateItem: (state) => set(() => ({item: state})),
    updatePriceItems: (state) => {
        let totalValue = state.reduce((total, item) => total + item.price, 0);
        set(() => ({totalPriceItems: totalValue}));
    },
    updateMoney: (state) => {
        if(state.length <= 15) {
            set(() => ({money: parseFloat(state).toFixed(2)}))
        } 
    },
})