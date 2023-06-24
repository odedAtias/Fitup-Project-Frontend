// API imports
import {postData} from './rest';

export const uploadImage = ({id, isTrainer, imageUri}) => {
	const formData = new FormData();
	formData.append('profile', {
		name: `${id}'s image`,
		uri: imageUri,
		type: 'image/jpg',
	});

	// let path = isTrainer
	// 	? `trainers/:${id}/upload-image`
	// 	: `trainees/:${id}/upload-image`;

	// postData(path, formData, {
	// 	headers: {
	// 		Accept: 'application/json',
	// 		'Content-Type': 'multipart/form-data',
	// 	},
	// });
};
