import { initializeApp } from 'firebase/app';
import { getAuth, fetchSignInMethodsForEmail } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCbRB-0iwmWJWo7I52zgDvcekysWxUCInY',
	authDomain: 'fitup-16e0d.firebaseapp.com',
	projectId: 'fitup-16e0d',
	storageBucket: 'fitup-16e0d.appspot.com',
	messagingSenderId: '590588144869',
	appId: '1:590588144869:web:ac295d7574db0f827ab80c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const isExistingEmail = async email => {
	try {
		const methods = await fetchSignInMethodsForEmail(auth, email);
		return methods.length > 0;
	} catch (error) {
		console.log(error);
	}
};
