import komodo from "../assets/images/komodo.png";
import constlab from "../assets/images/constlab.png";
import mediascope from "../assets/images/Mediascope.png";
import dsgners from "../assets/images/dsgners.png";
import def from "../assets/images/default.png";
import download from "../assets/images/download2.svg";
import play from "../assets/images/play2.svg";

  
  
  interface Content {
	title: string | JSX.Element;
	text?: string;
	link?: string;
	img?: string;
	size?: string;
  }
  
  interface ClientsDataItem {
	id: string;
	title: string;
	subtitle?: string;
	services?: Content[];
	content?: Content[] |  string[];
  }


export const ClientsData: ClientsDataItem[] = [
    {
        id: "1",
        title: "Клиентам",
		subtitle:'Услуги',
        services: [
			{title:(<>Product <br />дизайн</>), img:def},
			{title:"UX/UI дизайн", img:def},	
			{title:"Web дизайн", img:def},
			{title:(<>Дизайн <br />системы</>), img:def},
		]
		    },
    {
        id: "2",
        title: "Принципы",
        content: [
            {
                title: "Доверие и ответственность",
                text: "Доверяю профессиональному опыту клиента, а клиент доверяет моей ответственности и экспертности",
            },
            {
                title: "Честность",
                text: "Я не боюсь высказывать мнение, а так же не скрываю вещи, касающиеся результата и Вас, даже если они могут оказаться неприятными",
            },
            {
                title: "Долгосрочные отношения",
                text: "Я выстраиваю долгосрочные отношения с клиентами, они всегда могут ко мне обратиться за помощью или за новым проектом",
            },
            {
                title: "Исследование и анализ",
                text: "Для повышения вероятности успеха проекта, я всегда провожу исследование на начальном этапе и анализирую его результаты для построения полной картины",
            },
            { title: "Эстетика", text: "Стремлюсь делать дизайн не только удобным, но и эстетичным" },
            {
                title: "Погружение в бизнес",
                text: "При проектировании интерфейса погружаюсь в особенности бизнеса, чтобы учесть его потребности",
            },
            {
                title: "Юридическая защищенность",
                text: "Перед началом работы заключается договор, защищающий интересы обеих сторон. Оплата осуществляется на счет ИП.",
            },
        ],
    },
    {
        id: "3",
        title: "Рабочий процесс",
        content: [
            {
                title: "Почасовая оплата",
                text: "Я работаю по часовой ставке. На её основе я рассчитываю стоимость проекта и сроки реализации. ",
            },
            {
                title: "Еженедельная отчетность",
                text: "В конце каждой недели я скидываю результат по проделанной работе, а так же уведомляю о планах на следующую неделю.",
            },
            { title: "Всегда на связи", text: "Я работаю стандартную рабочую неделю и в рабочие часы всегда отвечаю на сообщения" },
            {
                title: "Прозрачная работа",
                text: "В файле Вашего проекта, Вы в любой момент времени можете зайти в проект и изучить результат работ на текущее время.",
            },
        ],
    },
    {
        id: "4",
        title: "Клиенты",
        content: [komodo, constlab, mediascope , dsgners],
    },
    {
        id: "5",
        title: "Начнем?",
        content: [
            {
                title: "Cкачать  КП",
                link: "",
				img:download,
				size:'10MB'
            },
			{
                title: "Cкачать  Бриф",
                link: "",
				img:download,
				size:'10MB'
            },
            {
                title: "Заказать проект",
                link: "",
				img:play
            },
        ],
    },
];
