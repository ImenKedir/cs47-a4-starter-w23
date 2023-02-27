import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const PreviewScreen = ({ route }) => {
  const params = route.params;
  return <WebView source={{ uri: params.url }} />;
};

export default PreviewScreen;

const styles = StyleSheet.create({});
