import { initializeApp } from 'firebase/app';
import { getAuth, fetchSignInMethodsForEmail } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBOKbUjLyAQwVnTr0t_rh5pesureQRSv3E',
	authDomain: 'fitup-project.firebaseapp.com',
	projectId: 'fitup-project',
	storageBucket: 'fitup-project.appspot.com',
	messagingSenderId: '471893103470',
	appId: '1:471893103470:web:31b0cfcf0b4516ee27e77f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const isExistingEmail = async email => {
	try {
		const methods = await fetchSignInMethodsForEmail(auth, email);
		return methods.length > 0;
	} catch (error) {
		console.log(error);
	}
};
