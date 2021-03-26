import * as React from "react";
import styles from "./styles";
import { Image, FlatList, Pressable } from "react-native";
import { Text } from "../../components/Themed";
import { useNavigation } from "@react-navigation/native";

interface HomeCategoryProps {
  category: {
    id: string;
    title: string;
    movies: { id: string; poster: string }[];
  };
}

const HomeCategory = (props: HomeCategoryProps) => {
  const { category } = props;
  const navigation = useNavigation();

  const onMoviePress = (movie) => {
    navigation.navigate("MovieDetailsScreen", { id: movie.id });
  };
  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
          <Pressable onPress={() => onMoviePress(item)}>
            <Image
              source={{
                uri: item.poster,
              }}
              style={styles.image}
            />
          </Pressable>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default HomeCategory;
