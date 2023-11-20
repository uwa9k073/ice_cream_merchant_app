import { create } from "zustand";
import { IProduct } from "../pages/Products";
import { devtools, persist } from "zustand/middleware";

interface FavoritesState {
    products: IProduct[]
    isLoading: boolean
    addProduct: (product: IProduct) => void
    removeProduct: (name: string) => void
}

const useFavoritesStore = create<FavoritesState>()(persist(devtools((set, get) => ({
    products: [],
    isLoading: false,
    addProduct: (product: IProduct) => set({
        products: [...get().products, product]
    }),
    removeProduct: (name: string) => {
        set({
            products: get().products.filter(item => item.name != name)
        })
    }

})), { name: 'favoritesStore', version: 1, getStorage: () => localStorage }))


export default useFavoritesStore;