import { StyleSheet, SafeAreaView} from "react-native";
import React from "react";
import { useSpotifyAuth } from "../utils";
import { Themes } from "../assets/Themes";
import SignInScreen from "./SignInScreen";
import TracksScreen from "./TracksScreen";

const HomeScreen = ({navigation}) => {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  return (
    <SafeAreaView style={styles.container}>
      {token ? (
        <TracksScreen navigation={navigation} tracks={tracks} />
      ) : (
        <SignInScreen authFn={getSpotifyAuth} />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

