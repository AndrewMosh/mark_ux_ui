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
		img: '/src/assets/main.svg',
		active: true
	},
	{
		title: 'Портфолио',
		link: '/portfolio',
		img: '/src/assets/portfolio.svg',
		active: false
	},
	{
		title: 'Обо мне',
		link: '/about',
		img: '/src/assets/aboutme.svg',
		active: false
	},
	{
		title: 'Клиентам',
		link: '/clients',
		img: '/src/assets/clients.svg',
		active: false
	},
]