import { create } from "zustand";
import { PortfolioData, PortfolioItem } from "../utils/PortfolioData";


interface PortfolioState {
	portfolio: PortfolioItem[];
	filterType: string;
	setFilterType: (type: string) => void;
	filteredPortfolio: PortfolioItem[];
	filterPortfolio: () => void;
  }

const portfolioData = PortfolioData.list

export const usePortfolioStore = create<PortfolioState>((set) => ({
	portfolio: portfolioData,
	filterType: 'all', 
	setFilterType: (type: string) => set({ filterType: type }),
	
	filteredPortfolio: portfolioData.filter(() => true), // изначально показываем все
	filterPortfolio: () =>
	  set((state) => ({
		filteredPortfolio: state.filterType === 'all'
		  ? state.portfolio
		  : state.portfolio.filter(item => item.type === state.filterType)
	  })),
  }));