// API imports
import axios from 'axios';

// This backend url if specific for android emulators
const BACKEND_URL = 'https://jade-gentle-dolphin.cyclic.app/api';

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
		console.log(error);
	}
};
