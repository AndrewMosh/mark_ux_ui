import def from "../assets/images/defPortfolio.png";

// Интерфейс для одного элемента портфолио
export interface PortfolioItem {
    id: string;
    img: string;
    date: string;
    name: string;
    type: string;
    title: JSX.Element;
}

interface PortfolioDataType {
    title: string;
    list: PortfolioItem[];
}

const portfolioTitle = (type: string): JSX.Element => (
    <>
        Portfolio - <span>{type}</span>
    </>
);

// Данные портфолио с типизацией
export const PortfolioData: PortfolioDataType = {
    title: "Portfolio",
    list: [
        { id: "1", img: def, date: "Crypto, Mobile, 2023", name: "Alpine — cryptowallet", type: "web", title: portfolioTitle("web") },
        { id: "2", img: def, date: "Crypto, Mobile, 2023", name: "Alpine — cryptowallet", type: "web", title: portfolioTitle("web") },
        { id: "3", img: def, date: "Crypto, Mobile, 2023", name: "Alpine — cryptowallet", type: "web", title: portfolioTitle("web") },
        { id: "4", img: def, date: "Crypto, Mobile, 2023", name: "Alpine — cryptowallet", type: "web", title: portfolioTitle("web") },
        { id: "5", img: def, date: "Crypto, Mobile, 2023", name: "Alpine — cryptowallet", type: "mobile", title: portfolioTitle("mobile") },
        { id: "6", img: def, date: "Crypto, Mobile, 2023", name: "Alpine — cryptowallet", type: "mobile", title: portfolioTitle("mobile") },
        { id: "7", img: def, date: "Crypto, Mobile, 2023", name: "Alpine — cryptowallet", type: "mobile", title: portfolioTitle("mobile") },
        { id: "8", img: def, date: "Crypto, Mobile, 2023", name: "Alpine — cryptowallet", type: "mobile", title: portfolioTitle("mobile") },
    ],
};
