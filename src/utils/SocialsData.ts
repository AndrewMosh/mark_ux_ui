import insta from '/src/assets/images/insta.svg';
import hh from '/src/assets/images/hh.svg';
import linkedin from '/src/assets/images/linkedin.svg';
import behance from '/src/assets/images/Behance.svg';
import cv from '/src/assets/images/download.svg';
import email from '/src/assets/images/email.svg';
interface ISocials {
	title: string
	link: string
	img: string
}

export const SocialsData: ISocials[] = [
	{
		title: 'instagram',
		link: '',
		img: insta,
	},
	{
		title: 'Linkedin',
		link: '',
		img: hh,
	},
	{
		title: 'HH',
		link: '',
		img: linkedin,
	},
	{
		title: 'Behance',
		link: '',
		img: behance,
	},
	{
		title: 'CV',
		link: '',
		img: cv,
	},
	{
		title: 'email',
		link: '',
		img: email,
	}
]