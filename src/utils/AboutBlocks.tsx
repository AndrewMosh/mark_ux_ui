interface Block {
    id: string;
    title?: string | JSX.Element;
    text: string | JSX.Element;
}

interface Experience {
    text: string;
    site: string;
}

const experiences: Experience[] = [
    { text: "Октябрь 2023–н.в.", site: "Mediascope.ru" },
    { text: "Октябрь 2023–н.в. ", site: "Constlab.ru" },
    { text: "Апрель 2023–Сентябрь 2023", site: "Komodo.com" },
    { text: "Апрель 2023–Июль 2023", site: "Менторинг студентов" },
    { text: "Май 2023–Июнь 2023", site: "DSGNERS.ru" },
    { text: "Май 2022–Июль 2022", site: "XPRESSRUN.com" },
];

const courses: string[] = [
	'GoHelper • 08.06.2023 → 08.09.2023 • Программа «UX/UI Дизайнер»',
	'SkillFactory • 15.11.2022 → 20.06.2023 • Программа «UX/UI Дизайнер»',
	'Яндекс Практикум • 18.12.2022 → 21.12.2022 • Программа «Наставник в IT»',
	'Менторинг • 30.12.2021 → 28.05.2022 • UX/UI'
]


export const blocks: Block[] = [
    {
        id: "1",
        title: "А это я",
        text: (
            <>
                Меня зовут Марк, я <span style={{ color: "#F9C35D" }}>UX/UI–дизайнер</span>. Работаю в сфере больше трех лет, люблю финансы,
                немного шарю за менеджмент и много экономику. Люблю кофе по утрам, класные команды, корги и кошек <span style={{ color: "rgba(255, 255, 255, 0.35)"}}>(ну они же такие милые,
                правда?)</span>. <br /> <br />Учился на сисадмина, потом пытался поступить на финансы в Прагу, но судьба нас разлучила. Работал с криптой,
                менторил новичков и рисовал экранчики.
            </>
        ),
    },
    {
        id: "2",
        title: "По работе",
        text: (
            <>
                Хочу работать в крутом проекте, делать что–то стоящее для общества, путешествовать 4 раза в год и красивый офис с панорамой,
                удаленку с ДМС и ежеквартальные премии.
                <span style={{ color: "rgba(255, 255, 255, 0.35)" }}>(Эйчары, относитесь к тексту с юмором, а то вы всегда слишком серьезные</span>
                <span style={{ color: "#F9C35D" }}>:)</span> <br /> <br /> Да, еще, у меня нет вредных привычек, я умею себя сам менеджерить, при
                необходимости могу и других. <br /><br /> Если серьезно, то гибкое начало дня, 8ч работы, стильный офис или удаленка.{" "}
                <span style={{ color: "rgba(255, 255, 255, 0.35)" }}>Расписание, моей работы в правом верхнем углу.</span>
            </>
        ),
    },
    {
        id: "3",
        title: (
            <>
                Что могу <span style={{ color: "#F9C35D" }}>?</span>
            </>
        ),
        text: (
            <>
                Собирать приложения, сервисы, сайты <span style={{ color: "rgba(255, 255, 255, 0.35)" }}>(1–2 страницы не люблю)</span> от{" "}
                <span style={{ color: "#F9C35D" }}>А</span> до <span style={{ color: "#F9C35D"}}>Сделано</span>. Делать незамысловатую
                анимацию в фигме, менеджерить, придумывать концепты, собирать дизай-системы, проверять
                <span style={{ color: "rgba(255, 255, 255, 0.35)",  textDecoration: "line-through" }}> (еще раз проверять)</span> и все подсчитывать{" "}
                <span style={{ color: "rgba(255, 255, 255, 0.35)" }}>(мое альтер эго)</span>. Еще нейронки люблю потыкать, исследовать, анализировать и
                тестировать.
            </>
        ),
    },
    {
        id: "4",
        title: (
            <>
                Не <span style={{ color: "#D9D9D9BF", textDecoration: "line-through" }}>хочу</span> могу
            </>
        ),
        text: "Брендинг, моушен, айдентика, карточки маркетплейсов, 3D, VFX, работать без тз, вносить правки со слов «Некрасиво, переделай». Копить обиду внутри и играть в молчанки. ",
    },
    {
        id: "5",
        title: "Нравится",
        text: (
            <>
                Сфера Fintech, экономики и финансов. Люблю делать концепции, flow, общаться с людьми, проводить анализ, смотреть в цифры{" "}
                <span style={{ color: "rgba(255, 255, 255, 0.35)" }}>(кайф)</span> при отсутствии <span style={{ color: "rgba(255, 255, 255, 0.35)" }}>(!!!)</span> горящих
                дедлайнов. Web/mobile/desktop не имеет значения. С некоторых пор bisdev начал изучать.
            </>
        ),
    },
    {
        id: "6",
        title: "Избегаю",
        text: "Фотографии себя и своего экрана без разрешения, подозрительных людей, токсиков в команде и надменных уникумов. Делать непонятные тестовые на 10ч. Работать без четко поставленных задач. Оскорбления в свой адрес и разговоры на повышенных тонах.",
    },

    {
        id: "7",
        title: "Опыт",
        text: (
            <>
                {experiences.map((experience, index) => (
                    <div style={{ paddingBottom: '20px'}} key={index}>
                        {experience.text}{" "}
                        <a style={{ color: "#F9C35D" }} href={experience.site} target="_blank">
                            {experience.site}
                        </a>
                    </div>
                ))}
            </>
        ),
    },
    {
        id: "8",
        title: "Курсы",
        text: (
            <>
				{courses.map((course, index) => (
					<div style={{ paddingBottom: '20px'}} key={index}>
						{course}
					</div>
				))}
            </>
        ),
    },
    {
        id: "9",
        title: "Хобби",
        text: (
            <>
                Спортзал — 3 раза в неделю. Единоборства — 1–2 раза в неделю. Сессии с психологом — 1 раз в неделю
                <span style={{ color: "rgba(255, 255, 255, 0.35)" }}>(интересно познавать себя).</span> <br /> <br />
                Ходить под парусом, ехать боком, играть в Starcraft ll <span style={{ color: "rgba(255, 255, 255, 0.35)" }}>(раз в квартал)</span>, трипы и
                путешествия, кофе по утрам, гастро-походы, выставки, музеи, кино и тп...
            </>
        ),
    },
	{
        id: "10",
        title: "О жизни",
        text: 'Кроме своего прямого рода занятий, я занимаюсь инвестициями в различные направления – фондовый рынок, недвижимость, рискованные активы. Снимаю reels в заблокированной соц. сети, изучаю BisDev. ',
    },
    {
        id: "11",
        title: "P.S.",
        text: (
            <>
                Текст был написан с душой и небольшой долей юмора. Текст не следует воспринимать в штыки. Хотя, это ваше дело
                <span style={{ color: "#F9C35D" }}>:)</span>
            </>
        ),
    },
];
