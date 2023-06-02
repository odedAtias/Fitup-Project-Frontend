// Hooks imports
import {useContext, useState} from 'react';

// Custom components imports
import ManageDetailsForm from '../../Components/TraineeSide/ManageDetailsOutput/ManageDetailsForm';

// Contexts imports
import {TraineeContext} from '../../store/TraineeContext';

// Utils
import {updateData} from '../../utils/http/rest';

// Constants
import {alert} from '../../Constants/Alert';
import Spinner2 from './../../Components/UI/Spinner2';

// ManageDetails component
const ManageDetails = ({navigation}) => {
	const tcx = useContext(TraineeContext);

	const [loading, setLoading] = useState(null);

	const handleSubmit = async formData => {
		// caching checking
		const notChanged =
			tcx.trainee.firstName === formData.firstName &&
			tcx.trainee.lastName === formData.lastName &&
			tcx.trainee.height === formData.height &&
			tcx.trainee.weight === formData.weight;

		// Update in the backend
		if (!notChanged) {
			setLoading(true);
			// Upadte the context of the trainee
			const trainee = {...tcx.trainee, ...formData};
			tcx.setTrainee(trainee);
			try {
				await updateData(`api/trainees/${trainee._id}`, trainee);
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

	return <ManageDetailsForm onSubmit={handleSubmit} />;
};

export default ManageDetails;
