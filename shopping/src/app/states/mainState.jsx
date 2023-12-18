import { create } from "zustand";
import { persist, createJSONStorage} from 'zustand/middleware'
import { sliceInputState } from "./inputState";
import { otherState } from "./otherStates";

export const useStore = create(persist((...elements) => ({
        ...sliceInputState(...elements),
        ...otherState(...elements)
    }),{
        name: 'ShoppingStore',
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({
            listOfItens: state.listOfItens,
        })
    }
))