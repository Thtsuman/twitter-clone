import { combineReducers } from "redux"
import appDataReducer from "./appDataReducer"

export default combineReducers({
	appData: appDataReducer,
})
