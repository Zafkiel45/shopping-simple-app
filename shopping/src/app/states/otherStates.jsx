export const otherState = (set, get) =>  ({
    navBarControl: false,
    updateNavBarControl: (state) => set(() => ({navBarControl: state}))
})