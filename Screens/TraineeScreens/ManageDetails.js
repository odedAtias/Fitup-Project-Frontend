// Custom components imports
import ManageDetailsForm from '../../Components/TraineeSide/ManageDetailsOutput/ManageDetailsForm';

// ManageDetails component
const ManageDetails = () => {
	const handleSubmit = formData => {
		console.log('submitted ...', formData);
	};
	return <ManageDetailsForm onSubmit={handleSubmit} />;
};

export default ManageDetails;
