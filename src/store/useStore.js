import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";


const useStore = create(devtools(persist((set)=>({
    users:[],
    addUsers: (user) => set((state)=>({users:[...state.users,user]})),
    deleteUsers: (id) => set((state)=> ({users: state.users.filter((curid) => curid.id !== id)})),
    updateUsers: (particularuser) => set((state)=> ({users: state.users.map((curid) => curid.id == particularuser.id  ? particularuser : curid)}))


}),{"name":"storage"}),{"dev":"devname"}))

export default useStore;