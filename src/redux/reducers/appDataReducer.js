import types from "../types"

const INITIAL_STATE = {
	sidebarCollapsed: false,
	currentTheme: "light",
}

const appDataReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.TOGGLE_SIDEBAR:
			return {
				...state,
				sidebarCollapsed: !state.sidebarCollapsed,
			}
		case types.TOGGLE_THEME:
			return {
				...state,
				currentTheme: action.payload,
			}
		default:
			return state
	}
}

export default appDataReducer
