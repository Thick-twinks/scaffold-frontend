import type { ProjectStatuses } from './Statuses'

export interface Project {
	id: string;
	name: string;
	customerId: string;
	builderId: string | null;
	geopointId: string;
	startDate: Date;
	endDate: Date;
	status: ProjectStatuses
}