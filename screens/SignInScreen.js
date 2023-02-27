import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthBtn from "../comps/AuthBtn";

const SignInScreen = ({ authFn }) => {
  return (
    <View>
      <AuthBtn authFn={authFn} />
    </View>
  );
};

export default SignInScreen;
