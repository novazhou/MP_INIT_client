import { AUTH } from "../constants/actionTypes";
import * as api from "../api";

export const signin = (formData, history) => async (dispatch) => {
	try {
		//login the user
		// console.log("action>auth.js formData:", formData);
		const { data } = await api.signIn(formData);
		// console.log("action>auth.js data:", data);
		dispatch({ type: AUTH, data });
		// console.log("after dispatch...");
		history.push("/");
	} catch (error) {
		console.log(error);
	}
};

export const signup = (formData, history) => async (dispatch) => {
	try {
		//signup the user
		const { data } = await api.signUp(formData);
		dispatch({ type: AUTH, data });
		history.push("/");
	} catch (error) {
		console.log(error);
	}
};
