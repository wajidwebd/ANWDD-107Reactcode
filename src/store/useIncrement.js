import { create } from "zustand";

const useIncrement = create((set)=>({
    initialvalue:0,
    incrementfunction: () => set((state)=> ({initialvalue: state.initialvalue + 1})),
    decrementfunction:()=> set((state)=> ({initialvalue: state.initialvalue -1}))
}))

export default useIncrement;