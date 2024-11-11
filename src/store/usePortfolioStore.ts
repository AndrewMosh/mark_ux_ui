import { create } from "zustand";
import { PortfolioData, PortfolioItem } from "../utils/PortfolioData";


interface PortfolioState {
	portfolio: PortfolioItem[];
	newMessage: string | null;
	filterType: string;
	setFilterType: (type: string) => void;
	filteredPortfolio: PortfolioItem[];
	filterPortfolio: () => void;
	readMessage: () => void
  }

const portfolioData = PortfolioData.list

export const usePortfolioStore = create<PortfolioState>((set) => ({
	portfolio: portfolioData,
	newMessage:'1',
	filterType: 'all', 
	setFilterType: (type: string) => set({ filterType: type }),
	
	filteredPortfolio: portfolioData.filter(() => true), // изначально показываем все
	filterPortfolio: () =>
	  set((state) => ({
		filteredPortfolio: state.filterType === 'all'
		  ? state.portfolio
		  : state.portfolio.filter(item => item.type === state.filterType)
	  })),
	readMessage: () =>
	  set(() => ({
		newMessage: null
	  })),
  }));