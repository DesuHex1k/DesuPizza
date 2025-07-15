import { create } from 'zustand';

interface Category {
    activeId: number;
    setActiveId: (id: number) => void;
}

export const useCategory = create<Category>((set) => ({
    activeId: 0,
    setActiveId: (id: number) => set({ activeId: id }),
}));