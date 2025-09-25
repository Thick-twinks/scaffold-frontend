import { ref, watch, type Ref } from 'vue'

import { useFetch, type ApiServiceReturn } from '@/shared/api'
import { UsersService, type GetUserByIdData, type GetUserByIdError, type GetUserByIdResponse } from '@/shared/api/openapi/client'

import { mapApiToUser } from '../lib/apiMappers'
import type { User } from '../model/User'

interface UseGetUserByIdReturn extends ApiServiceReturn<GetUserByIdError> {
	getUserById: (params: GetUserByIdParams) => Promise<void>;
	user: Ref<User | null>;
}

interface GetUserByIdParams {
	id: number;
}

export function useGetUserById(): UseGetUserByIdReturn {
	const user = ref<User | null>(null)

	const { sendRequest, clearError, response, error, status, isLoading }
		= useFetch<
			GetUserByIdResponse,
			GetUserByIdError,
			GetUserByIdData
		>(UsersService.getUserById)

	const getUserById = async(params: GetUserByIdParams): Promise<void> => {
		user.value = null

		await sendRequest({
			path: {
				id: params.id
			}
		})
	}

	const saveUser = (): void => {
		const responseValue = response.value

		if (!responseValue) {
			return
		}

		user.value = mapApiToUser(responseValue)
	}

	watch(response, saveUser)

	return {
		getUserById,
		clearError,
		user,
		error,
		status,
		isLoading
	}
}