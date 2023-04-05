// API imports
import axios from 'axios';

// This backend url if specific for android emulators
const BACKEND_URL = 'https://jade-gentle-dolphin.cyclic.app/api';

export const fetchData = async path => {
	const response = await axios.get(`${BACKEND_URL}/${path}`);
	return response;
};
