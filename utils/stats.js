import Colors from '../Constants/Colors';
export const bmiColor = bmi => {
	// under weight case
	if (bmi < 18.5) return Colors.Links.primary;
	// normal case
	else if (bmi >= 18.5 && bmi <= 24.9) return Colors.Texts.available;
	// over weight case
	else if (bmi >= 30 && bmi <= 39.9) return Colors.Texts.intermediate;
	// Extremly obese case
	else return Colors.Texts.almostFull;
};
