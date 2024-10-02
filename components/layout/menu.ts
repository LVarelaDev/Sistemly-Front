import {
	faBuilding,
	faChartSimple,
	faFileContract,
	faPeopleGroup,
	faUser,
} from '@fortawesome/free-solid-svg-icons'

export const routes = [
	{
		url: '/dashboard',
		name: 'Dashboard',
		icon: faChartSimple,
		showMore: false,
	},
	{
		url: '/contracts',
		name: 'Contratos',
		icon: faFileContract,
		showMore: true,
	},
	{
		url: '/marketer',
		name: 'Comercializadoras',
		icon: faBuilding,
		showMore: false,
	},
	{
		url: '/teams',
		name: 'Equipos comerciales',
		icon: faPeopleGroup,
		showMore: false,
	},
	{
		url: '/users',
		name: 'Usuarios',
		icon: faUser,
		showMore: false,
	},
]
