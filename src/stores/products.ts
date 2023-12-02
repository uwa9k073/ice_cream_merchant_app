import { create } from "zustand";
import { IProduct } from "../pages/Products";
import { devtools, persist } from "zustand/middleware";

interface ProductsState {
    products: IProduct[]
    isLoading: boolean
    toggleFavorite: (name: string) => void
}

const useProductsStore = create<ProductsState>()(persist(devtools((set, get) => ({
    products: [{ name: "Черничное мороженое", img_src: "https://res.cloudinary.com/dixvycrtj/image/upload/v1696806311/blackberry-ice-cream_ch1l3e.png", img_alt: "Черничное мороженое", description: 'Вкусовое мороженое "Черничное" - это по-настоящему незабываемое вкусовое удовольствие, которое останется на долгие годы в вашей памяти.', price: Math.floor(Math.random() * 100 + 75), isFavorite: false },
    { name: "Банановое мороженое", img_src: "https://res.cloudinary.com/dixvycrtj/image/upload/v1696806311/banana-ice-cream_jb939j.png", img_alt: "Черничное мороженое", description: 'Банановое мороженое - это потрясающее десерт из свежего молока и фруктов. Его привлекательность и неповторимый вкус делают его идеальным для наслаждения в тёплое время года. Незабываемый опыт и прекрасное качество здоровья гарантированы.', price: Math.floor(Math.random() * 100 + 75), isFavorite: false },
    { name: "Малиновое мороженое", img_src: "https://res.cloudinary.com/dixvycrtj/image/upload/v1696806310/raspberry-ice-cream_vqynkp.png", img_alt: "Черничное мороженое", description: "Мороженое-смузи из малины. Ягоду собирают в России, а для большей яркости вкуса добавляют натуральное малиновое пюре из Франции. Без лактозы, красителей и усилителей вкуса.", price: Math.floor(Math.random() * 100 + 75), isFavorite: false },
    { name: "Клубничное мороженое", img_src: "https://res.cloudinary.com/dixvycrtj/image/upload/v1696806310/strawberry-ice-cream_wl1lly.png", img_alt: "Черничное мороженое", description: "Мороженое-смузи из клубники. Без лактозы, красителей и усилителей вкуса.", price: Math.floor(Math.random() * 100 + 75), isFavorite: false },
    { name: "Ванильное мороженое", img_src: "https://res.cloudinary.com/dixvycrtj/image/upload/v1696806310/kandinsky-download-1696791439312_tg13oy.png", img_alt: "Черничное мороженое", description: "Классический пломбир со вкусом ванили в вафельном стаканчике. В составе — молоко и сливки с добавлением настоящего сгущённого молока. Без заменителей молочного жира, красителей и усилителей вкуса.", price: Math.floor(Math.random() * 100 + 75), isFavorite: false }],

    isLoading: false,

    toggleFavorite: (name: string) => {
        set({
            products: get().products.map((item) => item.name === name ? { name: item.name, img_src: item.img_src, img_alt: item.img_alt, description: item.description, price: item.price, isFavorite: !item.isFavorite } : item)
        })
    },
})), { name: 'productsStore', version: 1, getStorage: () => localStorage }))


export default useProductsStore;