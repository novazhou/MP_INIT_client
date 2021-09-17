import { AUTH, LOGOUT } from "../constants/actionTypes";

const authReducer = (state = { authData: null }, action) => {
	switch (action.type) {
		case AUTH:
			console.log("reducers>auth.js AUTH: action.data: ", action.data);
			localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
			console.log("reducers>auth.js");
			console.log(action.data);
			return { ...state, authData: action?.data };
		case LOGOUT:
			localStorage.clear();
			return { ...state, authData: null };
		default:
			return state;
	}
};

export default authReducer;
