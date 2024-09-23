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
		img: '/src/assets/images/main.svg',
		active: true
	},
	{
		title: 'Портфолио',
		link: '/portfolio',
		img: '/src/assets/images/portfolio.svg',
		active: false
	},
	{
		title: 'Обо мне',
		link: '/about',
		img: '/src/assets/images/aboutme.svg',
		active: false
	},
	{
		title: 'Клиентам',
		link: '/clients',
		img: '/src/assets/images/clients.svg',
		active: false
	},
]