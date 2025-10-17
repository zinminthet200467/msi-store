import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function MiniRatingCard({ ratingText }) {
  return (
    <View style={styles.container}>
      <Text>{ratingText}</Text>
      <Icon name="star" size={16} color="#FFD700" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
