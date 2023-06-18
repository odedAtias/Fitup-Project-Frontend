// Hooks imports
import {useContext, useState} from 'react';

// Custom components imports
import ManageDetailsForm from '../../Components/TraineeSide/ManageDetailsOutput/ManageDetailsForm';
import ImagePicker from '../../Components/UI/ImagePicker';

// Contexts imports
import {TraineeContext} from '../../store/TraineeContext';
import {TrainerContext} from '../../store/TrainerContext';

// Utils
import {updateData} from '../../utils/http/rest';

// Constants
import {alert} from '../../Constants/Alert';
import Spinner2 from './../../Components/UI/Spinner2';

// ManageDetails component
const ManageDetails = ({navigation, route}) => {
	const isTrainer = route.params.isTrainer;

	const tcx = isTrainer
		? useContext(TrainerContext)
		: useContext(TraineeContext);

	const target = isTrainer ? tcx.trainer : tcx.trainee;

	const [loading, setLoading] = useState(null);

	const handleSubmit = async formData => {
		// caching checking
		const notChanged =
			target.firstName === formData.firstName &&
			target.lastName === formData.lastName &&
			target.height === formData.height &&
			target.weight === formData.weight &&
			(!isTrainer || target.description === formData.description);

		// Update in the backend
		if (!notChanged) {
			setLoading(true);
			// Upadte the context of the trainee
			const trainee = {...target, ...formData};
			isTrainer ? tcx.setTrainer(trainee) : tcx.setTrainee(trainee);
			try {
				isTrainer
					? await updateData(`api/trainers/${trainee._id}`, trainee)
					: await updateData(`api/trainees/${trainee._id}`, trainee);
				alert(
					'Update Successful',
					'Your personal details has been successfully updated! 🎉.'
				);
			} catch (error) {
				alert(
					'Update Error',
					'Failed to update your details. Please try again later.'
				);
			}
			setLoading(false);
		}

		// navigating to personal details
		navigation.navigate('PersonalDetails');
	};

	if (loading) {
		return <Spinner2 />;
	}

	return <ManageDetailsForm onSubmit={handleSubmit} isTrainer={isTrainer} />;
};

export default ManageDetails;
