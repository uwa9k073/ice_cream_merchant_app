import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { ICartProduct } from "../pages/Cart";
import { IProduct } from "../pages/Products";


interface CartState {
    cart: ICartProduct[]
    isLoading: boolean
    totalPrice: number
    addProduct: (product: IProduct | undefined) => void
    removeProduct: (name: string) => void
    clearCart: () => void
    increaseProductCount: (name: string) => void
    decreaseProductCount: (name: string) => void
}


const useCartStore = create<CartState>()(persist(devtools((set, get) => ({
    cart: [],
    isLoading: false,
    totalPrice: 0,
    addProduct: (product: IProduct | undefined) => {
        if (product) {
            const existingCartItem = get().cart.find((item) => item.product.name === product.name);
            if (!existingCartItem) {
                set({
                    cart: [...get().cart, { product: product, count: 1 }],
                    totalPrice: get().totalPrice + product.price
                });
            } else {
                set({
                    cart: get().cart.map((item) => item.product.name === existingCartItem.product.name ? { product: item.product, count: item.count + 1 } : item),
                    totalPrice: existingCartItem.product.price + get().totalPrice
                });
            }
        }
    },
    removeProduct: (name: string) => {
        const existingCartItem = get().cart.find((item => item.product.name === name));
        if (existingCartItem) {
            const newCartItems = get().cart.filter(item => item.product.name != existingCartItem.product.name);
            const newTotalPrice = newCartItems.reduce(
                (total, item) => total + item.count * item.product.price,
                0);
            set({
                cart: newCartItems,
                totalPrice: newTotalPrice
            });
        } else {
            set({
                cart: get().cart,
                totalPrice: get().totalPrice
            });
        }
    },
    clearCart: () => set({
        cart: [],
        totalPrice: 0
    }),
    increaseProductCount: (name: string) => {
        const existingCartItem = get().cart.find((item => item.product.name === name));
        if (existingCartItem) {
            const newCartItems = get().cart.map((item) => item.product.name === name ? { product: item.product, count: item.count + 1 } : item);
            const newTotalPrice = newCartItems.reduce(
                (total, item) => total + item.count * item.product.price,
                0);
            set({
                cart: newCartItems,
                totalPrice: newTotalPrice
            });
        } else {
            set({
                cart: get().cart,
                totalPrice: get().totalPrice
            });
        }
    },
    decreaseProductCount: (name: string) => {
        const existingCartItem = get().cart.find((item => item.product.name === name));
        if (existingCartItem) {
            const newCartItems = get().cart.map((item) => item.product.name === name ? { product: item.product, count: item.count - 1 } : item);
            const newTotalPrice = newCartItems.reduce(
                (total, item) => total + item.count * item.product.price,
                0);
            set({
                cart: newCartItems,
                totalPrice: newTotalPrice
            });
        } else {
            set({
                cart: get().cart,
                totalPrice: get().totalPrice
            });
        }
    }
})), { name: "cartStore", version: 1, getStorage: () => localStorage }))

export default useCartStore;