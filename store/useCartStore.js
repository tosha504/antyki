import { create } from "zustand";

const useCartStore = create((set) => ({
  items: [], // Each item in the cart should have a 'quantity' property
  addItem: (product) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
        return { items: [...state.items] };
      } else {
        return { items: [...state.items, { ...product, quantity: 1 }] };
      }
    });
  },
  removeItem: (product) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== product.id),
    }));
  },
  clearCart: () => set({ items: [] }),
}));

export default useCartStore;
