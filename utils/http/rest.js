// API imports
import axios from 'axios';

const BACKEND_URL = 'https://jade-gentle-dolphin.cyclic.app';

export const fetchData = async path => {
	try {
		const response = await axios.get(`${BACKEND_URL}/${path}`);
		return response;
	} catch (error) {
		if (error.response.status === 404) {
			return undefined;
		} else {
			throw error;
		}
	}
};

export const updateData = async (path, payload) => {
	try {
		const response = await axios.put(`${BACKEND_URL}/${path}`, payload);
		return response;
	} catch (error) {
		return error.response.data;
	}
};

export const postData = async (path, payload, headers) => {
	try {
		const response = await axios.post(
			`${BACKEND_URL}/${path}`,
			payload,
			headers
		);
		return response;
	} catch (error) {
		return error.response.data;
	}
};
export const deleteData = async path => {
	try {
		const response = await axios.delete(`${BACKEND_URL}/${path}`);
		return response;
	} catch (error) {
		return error.response.data;
	}
};
