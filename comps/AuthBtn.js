import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Themes } from "../assets/Themes";

export default function AuthBtn({ authFn }) {
  return (
    <Pressable style={styles.authBotton} onPress={authFn}>
      <Text style={styles.authText}>Connect with Spotify</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  authBotton: {
    backgroundColor: Themes.colors.spotify,
    padding: 12,
    borderRadius: 64,
  },
  authText: {
    color: "white",
  },
});
