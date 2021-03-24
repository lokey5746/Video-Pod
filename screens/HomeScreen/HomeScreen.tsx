import * as React from "react";
import styles from "./styles";
import { Text, View } from "../../components/Themed";
import categories from "../../assets/data/categories";
import HomeCategory from "../../components/HomeCategory";
import { FlatList } from "react-native-gesture-handler";

const firstcategory = categories.items[2];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories.items}
        renderItem={({ item }) => <HomeCategory category={item} />}
      />
    </View>
  );
};

export default HomeScreen;
