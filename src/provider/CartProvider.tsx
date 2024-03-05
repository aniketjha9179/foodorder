import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { CartItem, Product } from "../types";
import { randomUUID } from "expo-crypto";

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem["size"]) => void;
  updateQuantity: (itemdId: string, amount: -1 | 1) => void;
  total:number;

};

const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
  total:0,

});

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product, size: CartItem["size"]) => {
    // if already in  cart, increament quantify
    const existingItem = items.find(
      (item) => item.product === product && item.size === size
    );
    if (existingItem) {
      updateQuantity(existingItem.id, 1);
      return;
    }

    const newCartItem: CartItem = {
      id: randomUUID(), //generated
      product,
      product_id: product.id,
      size,
      quantity: 1,
    };
    setItems([newCartItem, ...items]);
  };
  //   updateQuantity
  const updateQuantity = (itemdId: string, amount: -1 | 1) => {
    setItems(
      items
        .map((item) =>
          item.id !== itemdId
            ? item
            : { ...item, quantity: item.quantity + amount }
        )
        .filter((item) => item.quantity > 0)
    );
  };

const total=items.reduce((sum,item)=>(sum+=item.product.price * item.quantity),0);
  return (
    <CartContext.Provider value={{ items, addItem, updateQuantity,total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

// custom hook
export const useCart = () => useContext(CartContext);
