import React, { useState } from "react";
import { View, Text } from "../../components/Themed";
import { Image, Pressable } from "react-native";
import styles from "./styles";
import movie from "../../assets/data/movie";
import {
  MaterialIcons,
  Entypo,
  AntDesign,
  Feather,
  Ionicons,
} from "@expo/vector-icons";
import EposideItem from "../../components/EposideItem";
import { FlatList } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";

const firstSeason = movie.seasons.items[0];
const firstEposide = firstSeason.episodes.items[0];
const seasonNames = movie.seasons.items.map((season) => season.name);

const MovieDetailsScren = () => {
  const [currentSeason, setCurrentSeason] = useState(firstSeason);
  return (
    <View>
      <Image source={{ uri: firstEposide.poster }} style={styles.image} />

      <FlatList
        style={{ marginBottom: 240 }}
        data={currentSeason.episodes.items}
        renderItem={({ item }) => <EposideItem episode={item} />}
        ListHeaderComponent={
          <View style={{ padding: 12 }}>
            <Text style={styles.title}>{movie.title}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.match}>98% match</Text>
              <Text style={styles.year}>{movie.year}</Text>
              <View style={styles.ageContainer}>
                <Text style={styles.age}>12+</Text>
              </View>
              <Text style={styles.season}>{movie.numberOfSeasons} Seasons</Text>
              <MaterialIcons name="hd" size={24} color="white" />
            </View>
            {/* Play Buttons */}
            <Pressable
              onPress={() => {
                console.warn("Click play");
              }}
              style={styles.playButton}
            >
              <Text style={styles.playButtonText}>
                <Entypo name="controller-play" size={16} color="black" />
                Play
              </Text>
            </Pressable>
            {/* Download Buttons */}
            <Pressable
              onPress={() => {
                console.warn("Click play");
              }}
              style={styles.downloadButton}
            >
              <Text style={styles.downloadButtonText}>
                <AntDesign name="download" size={16} color="white" /> Download
              </Text>
            </Pressable>
            <Text style={styles.plot}>{movie.plot}</Text>
            <Text style={styles.cast}>Cast: {movie.cast}</Text>
            <Text style={styles.creator}>Creators: {movie.creator}</Text>
            {/* Row with icon buttons */}
            <View style={{ flexDirection: "row" }}>
              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <AntDesign name="plus" size={30} color={"white"} />
                <Text style={{ color: "darkgrey" }}>My List</Text>
              </View>
              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <Feather name="thumbs-up" size={30} color="white" />
                <Text style={{ color: "darkgrey" }}>Rate</Text>
              </View>
              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <Ionicons name="share-social-outline" size={30} color="white" />
                <Text style={{ color: "darkgrey" }}>Share</Text>
              </View>
            </View>
            <Picker
              style={{ color: "white", width: 130 }}
              dropdownIconColor={"white"}
              selectedValue={currentSeason.name}
              onValueChange={(itemValue, itemIndex) => {
                setCurrentSeason(movie.seasons.items[itemIndex]);
              }}
            >
              {seasonNames.map((item) => (
                <Picker.Item label={item} value={item} key={item} />
              ))}
            </Picker>
          </View>
        }
      />
    </View>
  );
};

export default MovieDetailsScren;
