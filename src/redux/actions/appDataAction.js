import types from "../types"

export const toggleSidebar = () => (dispatch) => {
	dispatch({ type: types.TOGGLE_SIDEBAR })
}

export const toggleTheme = (type) => (dispatch) => {
  dispatch({ type: types.TOGGLE_THEME, payload: type})
}