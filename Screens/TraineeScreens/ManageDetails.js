// Hooks imports
import {useContext, useState} from 'react';

// Custom components imports
import ManageDetailsForm from '../../Components/TraineeSide/ManageDetailsOutput/ManageDetailsForm';

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
	const tcx = route.params.isTrainer
		? useContext(TrainerContext)
		: useContext(TraineeContext);

	const target = route.params.isTrainer ? tcx.trainer : tcx.trainee;

	const [loading, setLoading] = useState(null);

	const handleSubmit = async formData => {
		// caching checking
		const notChanged =
			target.firstName === formData.firstName &&
			target.lastName === formData.lastName &&
			target.height === formData.height &&
			target.weight === formData.weight;

		// Update in the backend
		if (!notChanged) {
			setLoading(true);
			// Upadte the context of the trainee
			const trainee = {...target, ...formData};
			route.params.isTrainer
				? tcx.setTrainer(trainee)
				: tcx.setTrainee(trainee);
			try {
				route.params.isTrainer
					? await updateData(`api/trainees/${trainee._id}`, trainee)
					: await updateData(`api/trainers/${trainee._id}`, trainee);
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

	return (
		<ManageDetailsForm
			onSubmit={handleSubmit}
			isTrainer={route.params.isTrainer}
		/>
	);
};

export default ManageDetails;
