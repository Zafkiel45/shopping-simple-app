import { create } from "zustand";
import { persist, createJSONStorage} from 'zustand/middleware'
import { sliceInputState } from "./inputState";
import { otherState } from "./otherStates";
import { SliceMoney } from "./moneyState";

export const useStore = create(persist((...elements) => ({
        ...sliceInputState(...elements),
        ...otherState(...elements),
        ...SliceMoney(...elements),
    }),{
        name: 'ShoppingStore',
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({
            listOfItens: state.listOfItens,
        })
    }
))