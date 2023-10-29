

export interface INavbarItemProps {
    path: string,
    name: string
    icon: string
}

export interface INavbarProps {
    items: INavbarItemProps[];
}