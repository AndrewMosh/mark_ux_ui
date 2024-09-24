import { create } from 'zustand';

interface TitleState {
  activeTitle: string | JSX.Element | undefined;
  setActiveTitle: (title: string | JSX.Element | undefined) => void;
  isScrolled: boolean;
  isBlurring: boolean;
  setIsScrolled: (isScrolled: boolean) => void;
  setIsBlurring: (blurring: boolean) => void;
}

export const useTitleStore = create<TitleState>((set) => ({
  activeTitle: undefined, // Начальное состояние
  setActiveTitle: (title) => set({ activeTitle: title }),
  isScrolled: false,
  setIsScrolled: (isScrolled: boolean) => set({ isScrolled }),
  isBlurring: false,
  setIsBlurring: (isBlurring: boolean) => set({ isBlurring }),
}));
