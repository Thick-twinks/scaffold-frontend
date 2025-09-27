import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { Project } from './Project'

const STORE_NAME = 'projects'

export const useProjectsStore = defineStore(STORE_NAME, () => {
	const projects = ref<Project[]>([])

	function getProjectById(id: string): Project | undefined {
		const foundProject = projects.value.find(project => {
			return project.id === id
		})

		return foundProject
	}

	function setProjects(newProjects: Project[]): void {
		projects.value = newProjects
	}

	function clearProjects(): void {
		projects.value = []
	}

	return {
		projects,
		getProjectById,
		setProjects,
		clearProjects
	}
})