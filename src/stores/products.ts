import { create } from "zustand";
import { IProduct } from "../pages/Products";
import { devtools, persist } from "zustand/middleware";

interface ProductsState {
    products: IProduct[]
    isLoading: boolean
    addProduct: (product: IProduct) => void
    removeProduct: (name: string) => void
}

const useProductsStore = create<ProductsState>()(persist(devtools((set, get) => ({
    products: [{ name: "Черничное мороженое", img_src: "https://res.cloudinary.com/dixvycrtj/image/upload/v1696806311/blackberry-ice-cream_ch1l3e.png", img_alt: "Черничное мороженое", description: "", price: Math.floor(Math.random() * 100 + 75) },
    { name: "Банановое мороженое", img_src: "https://res.cloudinary.com/dixvycrtj/image/upload/v1696806311/banana-ice-cream_jb939j.png", img_alt: "Черничное мороженое", description: "", price: Math.floor(Math.random() * 100 + 75) },
    { name: "Малиновое мороженое", img_src: "https://res.cloudinary.com/dixvycrtj/image/upload/v1696806310/raspberry-ice-cream_vqynkp.png", img_alt: "Черничное мороженое", description: "", price: Math.floor(Math.random() * 100 + 75) },
    { name: "Клубничное мороженое", img_src: "https://res.cloudinary.com/dixvycrtj/image/upload/v1696806310/strawberry-ice-cream_wl1lly.png", img_alt: "Черничное мороженое", description: "", price: Math.floor(Math.random() * 100 + 75) },
    { name: "Ванильное мороженое", img_src: "https://res.cloudinary.com/dixvycrtj/image/upload/v1696806310/kandinsky-download-1696791439312_tg13oy.png", img_alt: "Черничное мороженое", description: "", price: Math.floor(Math.random() * 100 + 75) }],
    isLoading: false,
    addProduct: (product: IProduct) => set({
        products: [...get().products, product]
    }),
    removeProduct: (name: string) => {
        set({
            products: get().products.filter(item => item.name != name)
        })
    }

})), { name: 'productsStore', version: 1, getStorage: () => localStorage }))


export default useProductsStore;