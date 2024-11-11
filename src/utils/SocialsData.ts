import insta from '/src/assets/images/insta.svg';
import hh from '/src/assets/images/hh.svg';
import linkedin from '/src/assets/images/linkedin.svg';
import behance from '/src/assets/images/Behance.svg';
import cv from '/src/assets/images/download.svg';
import email from '/src/assets/images/email.svg';
import resume from '/src/assets/files/Mark.pdf'
interface ISocials {
	title: string
	link: string
	img: string
	download?: boolean
}

export const SocialsData: ISocials[] = [
	{
		title: 'instagram',
		link: 'https://www.instagram.com/ignatiev.dsgn/profilecard/?igsh=ZjRrbDVtd3JyNjhs',
		img: insta,
	},
	{
		title: 'Linkedin',
		link: 'https://www.linkedin.com/in/mark-ignatev-527937230/',
		img: linkedin,
	},
	{
		title: 'HH',
		link: 'https://spb.hh.ru/resume/43b7fe95ff0afd3ce50039ed1f714b34306342',
		img: hh,
	},
	{
		title: 'Behance',
		link: 'https://www.behance.net/b1473c2f',
		img: behance,
	},
	{
		title: 'CV',
		link: resume,
		img: cv,
		download: true
	},
	{
		title: 'email',
		link: 'mailto:m.fromm.job@gmail.com',
		img: email,
	}
]