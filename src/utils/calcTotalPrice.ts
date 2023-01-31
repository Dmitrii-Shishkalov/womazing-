import { CartProps } from "../redux/Slices/cart";

export const calcTotalPrice = (items: CartProps[]) => {
    return items.reduce((sum, obj) => (obj.price * obj.count) + sum, 0)
}