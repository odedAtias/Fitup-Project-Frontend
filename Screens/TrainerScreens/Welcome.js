// Hooks imports
import {useContext} from 'react';

// RN core components & API imporדts
import {View, StyleSheet, Text, FlatList} from 'react-native';

// Contexts imports
import {TrainerContext} from '../../store/TrainerContext';

// Custom components imports
import TrainerImage from '../../Components/TraineeSide/EventsOutput/TrainerImage';
import HeadingText from '../../Components/UI/HeadingText';
import Card from '../../Components/UI/Card';

// Constants
import {CARDS} from '../../Constants/Cards';
import Colors from './../../Constants/Colors';

// Welcome component
const Welcome = ({navigation}) => {
	const context = useContext(TrainerContext);
	return (
		<View style={styles.container}>
			{/* Heading */}
			<View style={styles.headingContainer}>
				{/* Trainer Image */}
				<TrainerImage
					imageUrl={context.trainer.image}
					style={{width: 100, height: 100}}
				/>
				<View style={styles.greetingsContainer}>
					{/* Welcome Back heading */}
					<HeadingText>Welcome Back, {context.trainer.firstName}</HeadingText>
					{/* Nice subheading */}
					<Text style={styles.greet}>Your journey continues with us. </Text>
				</View>
			</View>
			<View style={styles.qouteContainer}>
				<Text style={styles.qoute}>
					" The mediocre trainer tells. The good trainer explains. The superior
					trainer demonstrates. The great trainer inspires. " - [ William Arthur
					Ward ]
				</Text>
			</View>
			{/* Operations bar */}
			<View style={styles.optionsContainer}>
				<Text style={styles.headingText}>What can we help you find ?</Text>
				{/* Options list */}
				<FlatList
					data={CARDS}
					horizontal
					showsHorizontalScrollIndicator={false}
					keyExtractor={item => item.id}
					renderItem={itemData => (
						<Card
							title={itemData.item.title}
							image={itemData.item.image}
							onPress={() => navigation.navigate(`${itemData.item.link}`)}
							contentStyle={{
								fontSize: 24,
								color: 'black',
								fontFamily: 'rubik',
								fontWeight: 'bold',
								textAlign: 'center',
							}}
							containerStyle={{
								opacity: 0.8,
							}}
						/>
					)}
				/>
			</View>
		</View>
	);
};

// Welcome StyleSheet
const styles = StyleSheet.create({
	container: {
		paddingVertical: '2%',
		paddingHorizontal: '5%',
	},
	headingContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: '2%',
	},
	greetingsContainer: {
		flex: 1,
		alignItems: 'center',
	},
	greet: {
		color: Colors.Texts.fifth,
		fontFamily: 'rubik',
		fontSize: 15,
	},
	optionsContainer: {
		marginTop: '6%',
	},
	headingText: {
		fontFamily: 'rubik',
		fontSize: 24,
		textAlign: 'left',
		color: Colors.Texts.fifth,
	},
	list: {
		flexDirection: 'row',
	},
	qouteContainer: {
		marginTop: '6%',
		backgroundColor: Colors.Backgrounds.secondary,
		borderRadius: 20,
		padding: '5%',
	},
	qoute: {
		fontFamily: 'rubik',
		fontSize: 18,
	},
});

export default Welcome;
