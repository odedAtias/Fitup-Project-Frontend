// Hooks imports
import {useContext} from 'react';

// Custom components imports
import ManageDetailsForm from '../../Components/TraineeSide/ManageDetailsOutput/ManageDetailsForm';

// Contexts imports
import {TraineeContext} from '../../store/TraineeContext';

// ManageDetails component
const ManageDetails = ({navigation}) => {
	const tcx = useContext(TraineeContext);

	const handleSubmit = formData => {
		// Upadte the context of the trainee
		const trainee = {...tcx.trainee, ...formData};
		tcx.setTrainee(trainee);

		// navigating to personal details
		navigation.navigate('PersonalDetails');
	};
	return <ManageDetailsForm onSubmit={handleSubmit} />;
};

export default ManageDetails;
