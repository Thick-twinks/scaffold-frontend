export enum ProjectStatuses {
	created = 'created',
	beingInitialized = 'beingInitialized',
	active = 'active',
	finished = 'finished'
}

export enum ProjectStatusesRu {
	created = 'запланирован',
	beingInitialized = 'в процессе инициализации',
	active = 'в работе',
	finished = 'завершен'
}

export const apiToProjectStatusesMapper = {
	CREATED: ProjectStatuses.created,
	BEING_INITIALIZED: ProjectStatuses.beingInitialized,
	ACTIVE: ProjectStatuses.active,
	FINISHED: ProjectStatuses.finished,
}

export const projectStatusesToApiMapper = {
	[ProjectStatuses.created]: 'CREATED',
	[ProjectStatuses.beingInitialized]: 'BEING_INITIALIZED',
	[ProjectStatuses.active]: 'ACTIVE',
	[ProjectStatuses.finished]: 'FINISHED',
}