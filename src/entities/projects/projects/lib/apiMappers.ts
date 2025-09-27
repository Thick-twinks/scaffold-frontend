import type { ProjectApi } from '../api'
import type { Project } from '../model/Project'
import { apiToProjectStatusesMapper } from '../model/Statuses'

export function mapApiToProject(projectApi: ProjectApi): Project {
	const project: Project = {
		id: projectApi.id,
		name: projectApi.name,
		customerId: projectApi.customer_id,
		builderId: projectApi.contractor_id || null,
		geopointId: projectApi.geopoint_id,
		startDate: new Date(projectApi.start_date),
		endDate: new Date(projectApi.end_date),
		status: apiToProjectStatusesMapper[projectApi.status]
	}

	return project
}