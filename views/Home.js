import React from "react";
import { Text, View, Button, Image, TouchableOpacity } from "react-native";
import { css } from "../assets/css/css";

export default function Home({ navigation }) {
  return (
    <View style={css.containerImg}>
      <TouchableOpacity
        style={css.button__home}
        onPress={() => navigation.navigate("Login")}
      >
        <Image source={require("../assets/img/buttonLogin.png")} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Rastreio")}>
        <Image source={require("../assets/img/buttonRastreio.png")} />
      </TouchableOpacity>
    </View>
  );
}
