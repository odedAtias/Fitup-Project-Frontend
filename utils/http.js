// API imports
import axios from 'axios';
import { Platform } from 'react-native';

// This backend url if specific for android emulators
const BACKEND_URL =
	Platform.OS === 'android'
		? 'http://10.0.2.2:3000/api'
		: 'http://localhost:3000/api';

export const fetchData = async path => {
	const response = await axios.get(`${BACKEND_URL}/${path}`);
	return response;
};
