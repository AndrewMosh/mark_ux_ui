import { create } from 'zustand';

interface ToggleMenuState {
	menuOpen: boolean;
	toggleMenu: () => void;
}

export const useToggleMenuStore = create<ToggleMenuState>((set) => ({
  menuOpen: false, // Начальное состояние
  toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
}));
