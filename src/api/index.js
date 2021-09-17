import axios from "axios";

// const API = axios.create({ baseUrl: "http://192.168.31.198:5000" }); //cannot use the port with the url
// const API = axios.create({ baseUrl: "http://192.168.31.198" });
// API.defaults.port = 5000;

const url = "http://localhost:5000";

axios.interceptors.request.use((req) => {
	if (localStorage.getItem("profile")) {
		req.headers.Authorization = `Bearer ${
			JSON.parse(localStorage.getItem("profile")).token
		}`;
	}

	return req;
});

// export const fetchPosts = () => axios.get(url);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);

/**
 * Posts handlers
 */
// export const fetchPosts = () => API.get("/posts");
// export const createPost = (newPost) => API.post("/posts", newPost);
// export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
// export const deletePost = (id) => API.delete(`/posts/${id}`);
// export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const fetchPosts = () => axios.get(`${url}/posts`);
export const createPost = (newPost) => axios.post(`${url}/posts`, newPost);
export const updatePost = (id, updatedPost) =>
	axios.patch(`${url}/posts/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/posts/${id}`);
export const likePost = (id) => axios.patch(`${url}/posts/${id}/likePost`);

/**
 * User handlers
 */
// export const signIn = (formData) => API.post("/user/signin", formData);
// export const signUp = (formData) => API.post("/user/signup", formData);

export const signIn = (formData) => axios.post(`${url}/user/signin`, formData);
export const signUp = (formData) => axios.post(`${url}/user/signup`, formData);
