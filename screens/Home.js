import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  RefreshControl,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { biteSizeTransform } from "../utilities/dataTransform";
import CustomizedTabs from "../components/CustomziedTabs";
import { useState } from "react";

const rawData = [
  {
    id: 1,
    title: "Alibaba.com - B2B marketplace",
    category: "Shopping",
    description: "Online marketplace",
    rating: 3.5,
    size: "3.5 MB",
  },
  {
    id: 2,
    title: "Amazon - Shop Online",
    category: "Shopping",
    description: "Online retail marketplace",
    rating: 4.6,
    size: "50 MB",
  },
  {
    id: 3,
    title: "Spotify - Music and Podcasts",
    category: "Music",
    description: "Stream songs and podcasts",
    rating: 4.8,
    size: "25 MB",
  },
  {
    id: 4,
    title: "Instagram",
    category: "Social",
    description: "Photo and video sharing",
    rating: 4.3,
    size: "70 MB",
  },
  {
    id: 5,
    title: "WhatsApp Messenger",
    category: "Communication",
    description: "Free messaging and video calls",
    rating: 4.7,
    size: "40 MB",
  },
  {
    id: 6,
    title: "TikTok",
    category: "Entertainment",
    description: "Short-form video platform",
    rating: 4.5,
    size: "80 MB",
  },
  {
    id: 7,
    title: "Google Maps",
    category: "Navigation",
    description: "Maps and GPS navigation",
    rating: 4.6,
    size: "45 MB",
  },
  {
    id: 8,
    title: "LinkedIn",
    category: "Business",
    description: "Professional networking",
    rating: 4.4,
    size: "60 MB",
  },
  {
    id: 9,
    title: "YouTube",
    category: "Video",
    description: "Watch and upload videos",
    rating: 4.8,
    size: "90 MB",
  },
  {
    id: 10,
    title: "Canva",
    category: "Productivity",
    description: "Graphic design and editing",
    rating: 4.7,
    size: "55 MB",
  },
];

export default function Home() {
  const data = biteSizeTransform(rawData, 3);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* {/* <CustomizedTabs title="Recommended for you" data={data} /> */}
        <CustomizedTabs title="Apps you might like" data={data} />
        <CustomizedTabs title="Trending games" data={data} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
