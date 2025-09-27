import type { Project as ProjectApi, ProjectStatus as ProjectStatusApi } from '@/shared/api/openapi/client'

export type { ProjectApi, ProjectStatusApi }

export { useGetAllProjects } from './useGetAllProjects'