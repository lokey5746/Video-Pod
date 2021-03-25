import React, { useState, useRef, useEffect } from "react";
import { View, Text } from "react-native";
import { Video } from "expo-av";
import { Episode } from "../../types";
import styles from "./styles";
import { Playback } from "expo-av/build/AV";

interface VideoPlayerProps {
  episode: Episode;
}

const VideoPlayer = (props: VideoPlayerProps) => {
  const { episode } = props;
  const video = useRef<Playback>(null);
  const [status, setStatus] = useState({});

  useEffect(() => {
    if (!video) {
      return;
    }
    (async () => {
      await video?.current?.unloadAsync();
      await video?.current?.loadAsync({ uri: episode.video }, {}, false);
    })();
  }, [episode]);
  return (
    <View>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: episode.video,
        }}
        posterStyle={{
          resizeMode: "cover",
        }}
        posterSource={{ uri: episode.poster }}
        usePoster={true}
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
};

export default VideoPlayer;
