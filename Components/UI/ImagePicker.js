// constants
import {alert} from '../../Constants/Alert';

// Custom components imports
import Link from './Link';

// ImagePicker imports
import {
	useCameraPermissions,
	PermissionStatus,
	launchCameraAsync,
} from 'expo-image-picker';

// ImagePicker component
const ImagePicker = ({onPickImage}) => {
	// Intialize the camera permissions of the current user device
	const [cameraPermissionsInformation, requestPermission] =
		useCameraPermissions();

	// Permissions verfier
	const verifyPermissions = async () => {
		if (cameraPermissionsInformation.status === PermissionStatus.UNDETERMINED) {
			const permissionResponse = await requestPermission();
			// true if granted, otherwise false
			return permissionResponse.granted;
		}
		// if the camera permission is determined
		if (cameraPermissionsInformation.status === PermissionStatus.DENIED) {
			alert(
				'Insufficient Permissions !',
				'You need to grant camera permissions to use this app.'
			);
			return false;
		}
		return true;
	};

	// ImagePicker handlers
	const handlePickImage = async () => {
		const hasPermission = await verifyPermissions();
		if (!hasPermission) return;
		const image = await launchCameraAsync({
			allowsEditing: true,
			aspect: [16, 9],
			quality: 0.5,
		});

		if (image && image.assets && image.assets.length > 0) {
			onPickImage(image.assets[0].uri);
		} else {
			alert('Pick image error', 'Failed to pick an image. Please try again.');
		}
	};

	return (
		<>
			<Link onPress={handlePickImage}>Change Picture</Link>
		</>
	);
};

export default ImagePicker;
