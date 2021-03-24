import * as React from "react";
import styles from "./styles";
import { Image, FlatList } from "react-native";
import { Text } from "../../components/Themed";

interface HomeCategoryProps {
  category: {
    id: string;
    title: string;
    movies: { id: string; poster: string }[];
  };
}

const HomeCategory = (props: HomeCategoryProps) => {
  const { category } = props;
  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
          <Image
            source={{
              uri: item.poster,
            }}
            style={styles.image}
          />
        )}
        horizontal
      />
    </>
  );
};

export default HomeCategory;