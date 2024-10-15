import { create } from 'zustand';

interface ScheduleState {
	showSchedule: boolean;
	toggleSchedule: () => void;
	setSchedule: (showSchedule: boolean) => void;
}

export const useShowSchedule = create<ScheduleState>((set) => ({
	showSchedule: false, // Начальное состояние
  toggleSchedule: () => set((state) => ({ showSchedule: !state.showSchedule })),
  setSchedule: (showSchedule: boolean) => set({ showSchedule }),
}));
