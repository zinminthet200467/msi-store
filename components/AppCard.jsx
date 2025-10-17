import { StyleSheet, View, Image, Text } from "react-native";
import MiniRatingCard from "./MiniRatingCard";
import images from "../assets/images";

export default function AppCard({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/appStore.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.text}>{data.description}</Text>
        <View style={styles.metaDataContainer}>
          <MiniRatingCard ratingText={data.rating} />
          <Text>{data.size}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    gap: 12,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 10,
    borderColor: "white",
    overflow: "hidden",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
  },
  title: {
    fontWeight: "bold",
    color: "gray",
    fontSize: 16,
  },
  text: {
    fontSize: 14,
  },
  metaDataContainer: {
    flexDirection: "row",
    gap: 10,
  },
});
