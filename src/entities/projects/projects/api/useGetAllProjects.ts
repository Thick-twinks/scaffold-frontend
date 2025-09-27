import { watch } from 'vue'

import { useFetch, type ApiServiceReturn } from '@/shared/api'
import { ProjectsService, type GetAllProjectsError, type GetAllProjectsResponse } from '@/shared/api/openapi/client'

import { mapApiToProject } from '../lib/apiMappers'
import { useProjectsStore } from '../model/ProjectsStore'

interface UseGetAllProjectsReturn extends ApiServiceReturn<GetAllProjectsError> {
	getAllProjects: () => Promise<void>;
}

export function useGetAllProjects(): UseGetAllProjectsReturn {
	const { sendRequest, clearError, response, error, status, isLoading }
		= useFetch<
			GetAllProjectsResponse,
			GetAllProjectsError,
			object
		>(ProjectsService.getAllProjects)

	const projectsStore = useProjectsStore()

	const getAllProjects = async(): Promise<void> => {
		projectsStore.clearProjects()

		await sendRequest({})
	}

	const saveProjects = (): void => {
		const responseValue = response.value

		if (!responseValue) {
			return
		}

		const projects = responseValue.map(mapApiToProject)

		projectsStore.setProjects(projects)
	}

	watch(response, saveProjects)

	return {
		getAllProjects,
		clearError,
		error,
		status,
		isLoading
	}
}