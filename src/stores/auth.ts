import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface IUser {
    fullName: string;
    email: string;
    password: string;
    phoneNumber: string;
};

export const isDefine = (src: string | undefined | null) => {
    return !(src === undefined || src === null || src.length === 0);
}

export const isUserDefined = (user: IUser) => {
    return isDefine(user.fullName) && isDefine(user.email) && isDefine(user.password);
}


interface AuthStoreState {
    users: IUser[];
    currentUser: IUser | undefined;
    signUp: (newUser: IUser) => void
    signIn: (email: string, password: string) => void;
};


const useAuthStore = create<AuthStoreState>()(persist(devtools((set, get) => ({
    users: [],
    currentUser: undefined,
    signUp: (user: IUser) => {
        const existUser = get().users.find(item => item.email === user.email);
        if (!existUser) {
            set({
                users: [...get().users, user],
                currentUser: user
            })
        } else {
            alert('Такой пользователь уже существует')
        }
    },
    signIn: (email: string, password: string) => {
        const user = get().users.find(item => item.email === email);
        if (user) {
            if (user.password === password) {
                set({
                    currentUser: user
                })
            } else {
                alert('Неправильный пароль')
            }
        } else {
            alert('Пользователя с такми именем не существует')
        }
    }
})), { name: 'authStore', version: 1 }))

export default useAuthStore;