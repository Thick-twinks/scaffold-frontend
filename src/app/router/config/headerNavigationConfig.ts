import type { UserRoles } from '@/entities/users'

import { HeaderConfigTypes, type HeaderNavigationConfig } from '@/widgets/layout'

import { ProjectsPageConfig } from '@/pages/projects'

export type NavigationConfig = {
	[role in UserRoles]: HeaderNavigationConfig;
}

const BaseNavigation: HeaderNavigationConfig = [
	{
		type: HeaderConfigTypes.link,
		label: 'Проекты',
		to: ProjectsPageConfig.PROJECTS_PAGE_PATH
	}
]

const CustomerNavigation: HeaderNavigationConfig = [
	...BaseNavigation
]

const BuilderNavigation: HeaderNavigationConfig = [
	...BaseNavigation
]

const InspectorNavigation: HeaderNavigationConfig = [
	...BaseNavigation
]

export const headerNavigationDefaultConfig: NavigationConfig = {
	customer: CustomerNavigation,
	builder: BuilderNavigation,
	inspector: InspectorNavigation,
}