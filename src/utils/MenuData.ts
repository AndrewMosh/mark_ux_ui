interface IMenu {
	title: string
	link: string
	img: string
}

export const MenuData: IMenu[] = [
	{
		title: 'Главная',
		link: '/',
		img: '/src/assets/main.svg'
	},
	{
		title: 'Портфолио',
		link: '/portfolio',
		img: '/src/assets/portfolio.svg'
	},
	{
		title: 'Обо мне',
		link: '/about',
		img: '/src/assets/aboutme.svg'
	},
	{
		title: 'Клиентам',
		link: '/clients',
		img: '/src/assets/clients.svg'
	},
]