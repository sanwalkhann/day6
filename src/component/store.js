import create from "zustand";

const Store = create((set) => ({
  cart: [],

//   addtoCart: (item) =>
//     set((state) => ({ cart: [...state.cart, { ...item, quantity: 1 }] })),

addtoCart: (newItem) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === newItem.id);

      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          cart: [...state.cart, { ...newItem, quantity: 1 }],
        };
      }
    }),



  removeProduct: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),

  updateCart: (productId, newQuantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(newQuantity, 0) }
          : item
      ),
    })),
}));

export default Store;
