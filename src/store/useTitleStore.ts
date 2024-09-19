import { create } from 'zustand';

interface TitleState {
  activeTitle: string | JSX.Element | undefined;
  setActiveTitle: (title: string | JSX.Element | undefined) => void;
}

export const useTitleStore = create<TitleState>((set) => ({
  activeTitle: undefined, // Начальное состояние
  setActiveTitle: (title) => set({ activeTitle: title }),
}));
