import React from "react";
import { WebView } from "react-native-webview";

const DetailsScreen = ({ route }) => {
  const params = route.params;
  return (
      <WebView source={{ uri: params.url }} />
  );
};

export default DetailsScreen;
