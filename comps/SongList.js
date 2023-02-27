import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { Themes } from "../assets/Themes";
import { Ionicons } from '@expo/vector-icons';

const { width: windowWidth } = Dimensions.get("window");

const SongList = ({ navigation, tracks }) => {
  console.log(tracks);
  return (
    <FlatList
      data={tracks}
      renderItem={({ item, index }) => {
        return (
          <SongItem
            navigation={navigation}
            index={index}
            imageUrl={item.imageUrl}
            songTitle={item.songTitle}
            albumName={item.albumName}
            duration={item.duration}
            songArtists={item.songArtists}
            preview={item.previewUrl}
            externalUrl={item.externalUrl}
          />
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default SongList;

const SongItem = ({
  imageUrl,
  songTitle,
  albumName,
  duration,
  index,
  songArtists,
  preview,
  externalUrl,
  navigation,
}) => {
  const min = Math.floor((duration / 1000 / 60) << 0);
  const sec = Math.floor((duration / 1000) % 60);
  return (
    <View style={styles.songItemContainer}>
      <Pressable
        onPress={(e) => {
          e.stopPropagation();
          navigation.navigate("Preview", { url: preview });
        }}
      >
        <Ionicons name="play-circle" size={32} color={Themes.colors.spotify} />
      </Pressable>
      <Image style={styles.albumImage} source={{ uri: imageUrl }} />
      <View style={styles.songNameContainer}>
        <Pressable
          onPress={(e) => {
            e.stopPropagation();
            navigation.navigate("Details", { url: externalUrl });
          }}
        >
          <Text numberOfLines={1} style={styles.songTitle}>
            {songTitle}
          </Text>
        </Pressable>
        <Text numberOfLines={1} style={styles.songArtist}>
          {songArtists[0].name}
        </Text>
      </View>
      <Text numberOfLines={1} style={styles.albumName}>
        {albumName}
      </Text>
      <Text style={styles.duration}>{min + ":" + sec}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  songItemContainer: {
    flexDirection: "row",
    width: windowWidth,
    marginBottom: 6,
    justifyContent: "space-between",
    maxWidth: windowWidth * 0.92,
  },
  songNameContainer: {
    flexDirection: "column",
    justifyContent: "center",
    width: windowWidth * 0.25,
    overflow: "hidden",
  },
  songIndex: {
    alignSelf: "center",
    color: Themes.colors.gray,
  },
  songTitle: {
    numberOfLines: 1,
    color: Themes.colors.white,
  },
  songArtist: {
    color: Themes.colors.gray,
  },
  albumImage: {
    width: 50,
    height: 50,
  },
  albumName: {
    width: windowWidth * 0.25,
    alignSelf: "center",
    color: Themes.colors.white,
  },
  duration: {
    alignSelf: "center",
    color: Themes.colors.white,
  },
});
