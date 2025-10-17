import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import AppCard from "./AppCard";

let windowWidth = undefined;

export default function AppColumn({ data }) {
  const { width } = useWindowDimensions();
  windowWidth = width;
  return (
    <View style={[styles.container, { width: width }]}>
      {data.map((value, index, array) => {
        return <AppCard data={value} key={value.id} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
