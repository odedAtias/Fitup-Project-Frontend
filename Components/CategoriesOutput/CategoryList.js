// Hooks imports
import { useNavigation } from "@react-navigation/native";
// RN core components & API imports
import { FlatList, StyleSheet, View } from "react-native";
// Custom components imports
import CategoryGridTile from "./CategoryGridTile";

// category press handler function
const handlePress = (item, navigation) => {
  navigation.navigate("Events", {
    categoryId: item.id,
    categoryName: item.name,
  });
};

// CategoryList
const CategoryList = ({ categories }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <CategoryGridTile
            categoryName={itemData.item.name}
            categoryImageUrl={itemData.item.imageUrl}
            handlePress={() => handlePress(itemData.item, navigation)}
          />
        )}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default CategoryList;
