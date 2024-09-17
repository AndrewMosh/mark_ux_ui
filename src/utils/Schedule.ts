interface ISchedule {
	time: string;
	day: string;
}

export const Schedule: ISchedule[] = [
	{ time: '10:00-20:00', day: 'Понедельник' },
	{ time: '10:00-20:00', day: 'Вторник' },
	{ time: '10:00-20:00', day: 'Среда' },
	{ time: '10:00-20:00', day: 'Четверг' },
	{ time: '10:00-20:00', day: 'Пятница' },
	{ time: 'выходной', day: 'Суббота' },
	{ time: 'выходной', day: 'Воскресенье' },
]