import def from "../assets/images/defPortfolio.png";
import dsigner from "../assets/images/DSGNERS-portfolio.png";

// Интерфейс для одного элемента портфолио
export interface PortfolioItem {
    id: string;
    img: string;
    date: string;
    name: string;
    type: string;
    title: JSX.Element;
	link: string;
}

interface PortfolioDataType {
    title: string;
    list: PortfolioItem[];
}

const portfolioTitle = (type: string): JSX.Element => (
    <>
        Портфолио <span style={{ color: "#FFFFFF8C", fontFamily: 'Raleway', fontSize:'18px' }}>— {type}</span>
    </>
);

// Данные портфолио с типизацией
export const PortfolioData: PortfolioDataType = {
    title: "Portfolio",
    list: [
        { id: "1", img: dsigner, date: "DSGNERS, Mobile, 2023", name: "DSGNERS", type: "web", title: portfolioTitle("Web"), link: 'https://www.behance.net/gallery/210218297/DSGNERS-razdel-reklama' },
        { id: "2", img: def, date: "Crypto, Mobile, 2023", name: "Alpine — cryptowallet", type: "web", title: portfolioTitle("Web"), link: 'https://www.behance.net/gallery/210218297/DSGNERS-razdel-reklama' },
        { id: "3", img: def, date: "Crypto, Mobile, 2023", name: "Alpine — cryptowallet", type: "web", title: portfolioTitle("Web"), link: 'https://www.behance.net/gallery/210218297/DSGNERS-razdel-reklama' },
        { id: "4", img: def, date: "Crypto, Mobile, 2023", name: "Alpine — cryptowallet", type: "web", title: portfolioTitle("Web"), link: 'https://www.behance.net/gallery/210218297/DSGNERS-razdel-reklama' },
        { id: "5", img: def, date: "Crypto, Mobile, 2023", name: "Alpine — cryptowallet", type: "mobile", title: portfolioTitle("Mobile"), link: 'https://www.behance.net/gallery/210218297/DSGNERS-razdel-reklama' },
        { id: "6", img: def, date: "Crypto, Mobile, 2023", name: "Alpine — cryptowallet", type: "mobile", title: portfolioTitle("Mobile"), link: 'https://www.behance.net/gallery/210218297/DSGNERS-razdel-reklama' },
        { id: "7", img: def, date: "Crypto, Mobile, 2023", name: "Alpine — cryptowallet", type: "mobile", title: portfolioTitle("Mobile"), link: 'https://www.behance.net/gallery/210218297/DSGNERS-razdel-reklama' },
        { id: "8", img: def, date: "Crypto, Mobile, 2023", name: "Alpine — cryptowallet", type: "mobile", title: portfolioTitle("Mobile"), link: 'https://www.behance.net/gallery/210218297/DSGNERS-razdel-reklama' },
    ],
};
