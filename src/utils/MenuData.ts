import main from '/src/assets/images/main.svg'
import portfolio from '/src/assets/images/portfolio.svg'
import about from '/src/assets/images/aboutme.svg'
import clients from '/src/assets/images/clients.svg'

interface IMenu {
	title: string
	link: string
	img: string
	active: boolean
}

export const MenuData: IMenu[] = [
	{
		title: 'Главная',
		link: '/',
		img: main ,
		active: true
	},
	{
		title: 'Портфолио',
		link: '/portfolio',
		img: portfolio,
		active: false
	},
	{
		title: 'Обо мне',
		link: '/about',
		img: about,
		active: false
	},
	{
		title: 'Клиентам',
		link: '/clients',
		img: clients,
		active: false
	},
]