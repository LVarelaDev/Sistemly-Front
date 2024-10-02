import { create } from 'zustand'

interface State {
	isExpanded: boolean
	setIsExpanded: () => void
}

export const useSidebar = create<State>((set, get) => ({
	isExpanded: true,
	setIsExpanded: () => {
		const { isExpanded } = get()
		return set({ isExpanded: !isExpanded })
	},
}))
