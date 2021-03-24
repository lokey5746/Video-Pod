import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";
import movie from "../../assets/data/movie";
import {
  MaterialIcons,
  Entypo,
  AntDesign,
  Feather,
  Ionicons,
} from "@expo/vector-icons";

const firstEposide = movie.seasons.items[0].episodes.items[0];

const MovieDetailsScren = () => {
  return (
    <View>
      <Image source={{ uri: firstEposide.poster }} style={styles.image} />
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
      </View>
    </View>
  );
};

export default MovieDetailsScren;
