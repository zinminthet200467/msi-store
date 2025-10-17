import { View, Text, FlatList, StyleSheet } from "react-native";
import AppColumn from "./AppColumn";

export default function CustomizedTabs({ title, data }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View>
        <FlatList
          data={data}
          maxToRenderPerBatch={12}
          keyExtractor={(item) => item[0].id}
          pagingEnabled
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => {
            return <View style={{ height: 15 }} />;
          }}
          renderItem={({ item }) => {
            return <AppColumn data={item} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  title: {
    fontWeight: "semibold",
    color: "black",
    fontSize: 15,
    paddingHorizontal: 10,
    marginBottom: 3,
  },
});
