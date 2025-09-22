import { useEventBus } from '@vueuse/core'
import { onUnmounted } from 'vue'

import { HOME_REDIRECT_BUS_KEY } from '@/shared/config/router'

import { redirectToHomeWithReplace } from '../../redirectToHomeWithReplace'

export function useRedirectEventListener(): void {
	// Login
	const homeRedirect = useEventBus(HOME_REDIRECT_BUS_KEY)
	const unsubcribeHome = homeRedirect.on(redirectToHomeWithReplace)

	onUnmounted(() => {
		unsubcribeHome()
	})
}